# -*- mode: python -*-
a = Analysis([os.path.join(HOMEPATH,'support\\_mountzlib.py'), os.path.join(CONFIGDIR,'support\\useUnicode.py'), 'Z:/meteoscan/0.9/meteoScan.py'],
             pathex=['Z:\\meteoscan\\0.9\\pyinstaller'],
             hookspath=None)
pyz = PYZ(a.pure)
exe = EXE( pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          name=os.path.join('dist', 'meteoScan.exe'),
          debug=False,
          strip=None,
          upx=True,
          console=False )
app = BUNDLE(exe,
             name=os.path.join('dist', 'meteoScan.exe.app'))
