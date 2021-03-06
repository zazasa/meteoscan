# Bootloader unsets _MEIPASS2 for child processes to allow running
# PyInstaller binaries inside pyinstaller binaries.
# This is ok for mac or unix with fork() system call.
# But on Windows we need to overcome missing fork() fuction.
#
# See http://www.pyinstaller.org/wiki/Recipe/Multiprocessing
import multiprocessing.forking
import os
import sys


class _Popen(multiprocessing.forking.Popen):
    def __init__(self, *args, **kw):
        if hasattr(sys, 'frozen'):
            # We have to get original _MEIPASS2 value from PYTHONPATH
            # to get --onefile and --onedir mode working.
            # Last character is stripped in C-loader.
            os.putenv('_MEIPASS2', sys._MEIPASS)
        try:
            super(_Popen, self).__init__(*args, **kw)
        finally:
            if hasattr(sys, 'frozen'):
                # On some platforms (e.g. AIX) 'os.unsetenv()' is not
                # available. In those cases we cannot delete the variable
                # but only set it to the empty string. The bootloader
                # can handle this case.
                if hasattr(os, 'unsetenv'):
                    os.unsetenv('_MEIPASS2')
                else:
                    os.putenv('_MEIPASS2', '')


class Process(multiprocessing.Process):
    _Popen = _Popen


class SendeventProcess(Process):
    def __init__(self, resultQueue):
        self.resultQueue = resultQueue

        multiprocessing.Process.__init__(self)
        self.start()

    def run(self):
        print 'SendeventProcess'
        self.resultQueue.put((1, 2))
        print 'SendeventProcess'


if __name__ == '__main__':
    multiprocessing.freeze_support()
    print 'main'
    resultQueue = multiprocessing.Queue()
    SendeventProcess(resultQueue)
    print 'main'
    if hasattr(sys, 'frozen'):
        # We need to wait for all child processes otherwise
        # --onefile mode won't work.
        while multiprocessing.active_children():
            multiprocessing.active_children()[0].join()
