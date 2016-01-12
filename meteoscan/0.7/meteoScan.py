from PyQt4 import QtCore, QtGui
from meteoScanGui import Ui_MainWindow
from datetime import datetime
import sys
import MySQLdb
import win32com.client
import pickle

class meteoScan(QtGui.QMainWindow):

    progName = "Meteo Scan"
    progVer = "0.7"
    logFile = "meteoScanLog.log"
    cfgFile = "meteoScanConfig.cfg"

    configValues = {}
    conn = ""


    def __init__(self,parent=None):   
        QtGui.QWidget.__init__(self, parent)
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)        
        
        self.timer = QtCore.QTimer(self)
        self.setWindowTitle("%s V%s" % (self.progName , self.progVer))
        self.connect(self.ui.startButton,QtCore.SIGNAL("clicked()"),self.startSending)
        self.connect(self.ui.stopButton,QtCore.SIGNAL("clicked()"),self.stopSending)
        self.connect(self.ui.saveButton,QtCore.SIGNAL("clicked()"),self.saveSettings)        
        self.connect(self.ui.lockBox, QtCore.SIGNAL("stateChanged(int)"),self.lockFields)
                
        self.readConfigFile(self.cfgFile)
                          

    def sendData(self):
        try:
            data = {    "date": "\"" + str(datetime.now().date().isoformat()) + "\"",
                        "time": "\"" + str(datetime.now().time().isoformat().split(".")[0]) + "\"",
                        "AmbientT": str(cloud.AmbientT),
                		"ClarityIIVersion": "\"" + str(cloud.ClarityIIVersion) + "\"" ,
                        "CloudCondition": str(cloud.CloudCondition) ,
                        "CloudyThreshT": str(cloud.CloudyThreshT) ,
                        "DayCondition": str(cloud.DayCondition) ,
                        "DayLightV": str(cloud.DayLightV) ,
                        "DayThreshV": str(cloud.DayThreshV) ,
                        "DewPointT": str(cloud.DewPointT) ,
                        "Fahrenheit": str(int(cloud.Fahrenheit == "True")),
                        "FirmwareVersion": str(cloud.FirmwareVersion),
                        "HeaterPercent": str(cloud.HeaterPercent) ,
                        "HumidityPercent": str(cloud.HumidityPercent),
                        "Mph": str(int(cloud.Mph == "True" )) ,
                        "RainCondition": str(cloud.RainCondition),
                        "RainF": str(int(cloud.RainF == "True" )),
                        "RainThreshV": str(cloud.RainThreshV),
                        "RelSkyT": str(cloud.RelSkyT),
                        "RoofCloseRequested": str(int(cloud.RoofCloseRequested == "True" )),
                        "SecondsSinceGoodData": str(cloud.SecondsSinceGoodData),
                        "SensorT": str(cloud.SensorT),
                        "VCloudyThreshT": str(cloud.VCloudyThreshT),
                        "VDayThreshV": str(cloud.VDayThreshV),
                        "VWindyThreshSpeed": str(cloud.VWindyThreshSpeed),
                        "WetF": str(int(cloud.WetF == "True" )),
                        "WetThreshV": str(cloud.WetThreshV),
                        "Wind": str(cloud.Wind),
                        "WindCondition": str(cloud.WindCondition),
                        "WindUnits": str(cloud.WindUnits),
                        "WindyThreshSpeed": str(cloud.WindyThreshSpeed),
                	}
        except:
            self.logManager("Errore ClarityII.CloudSensorII ","both")
            self.stopSending()
            return False            
                    	                            
        cursor = self.conn.cursor()       
        sqlCmd = "INSERT INTO meteo_data (%s) VALUES(%s) " % (",".join(data.keys()),",".join(data.values()))

        try:
          cursor.execute(sqlCmd)
        except (MySQLdb.OperationalError, MySQLdb.ProgrammingError), error:
            self.logManager("%d %s" % (error.args[0],error.args[1]),"both")
            self.stopSending()
            return False
        
        self.logManager(",".join(data.values()),"log")
            
    

    def lockFields(self):
            self.ui.serverNameBox.setReadOnly(self.ui.lockBox.isChecked()) 
            self.ui.dbNameBox.setReadOnly(self.ui.lockBox.isChecked())
            self.ui.userNameBox.setReadOnly(self.ui.lockBox.isChecked())
            self.ui.passwordBox.setReadOnly(self.ui.lockBox.isChecked())   
            self.ui.pollInterval.setReadOnly(self.ui.lockBox.isChecked())        
     
    def dbConnect(self):
        try:
            self.conn = MySQLdb.connect( host = str(self.ui.serverNameBox.text()) , 
                                    user = str(self.ui.userNameBox.text()) , 
                                    passwd = str(self.ui.passwordBox.text()) , 
                                    db = str(self.ui.dbNameBox.text()),
                                    connect_timeout = 1                                #there's a way to fix ???
                                    )
            return True
                   
        except MySQLdb.Error, error:
            self.logManager("%d %s" % (error.args[0],error.args[1]),"both")  
            return False
            

    def polling(self):
        self.sendData()
    
    def startSending(self):
        self.logManager(" Start sending ... ","both")

        if not self.updateSettings():
            self.stopSending()
            return False

        if not self.dbConnect():
            self.stopSending()            
            return False

        self.connect(self.timer,QtCore.SIGNAL("timeout()"), self.polling)
        self.timer.start(int(self.ui.pollInterval.text())*1000)
        
       
        
    def stopSending(self):
        self.logManager(" ... stop sending.","both")
        self.timer.stop()
    
    def updateSettings(self):
    
        self.configValues = {   "host" : str(self.ui.serverNameBox.text()) , 
                                "user" : str(self.ui.userNameBox.text()) , 
                                "passwd" : str(self.ui.passwordBox.text()) , 
                                "db" : str(self.ui.dbNameBox.text()),
                                "poll_interval" : str(self.ui.pollInterval.text()),
                            }                       
        for i in self.configValues.values():
            if not i:
                self.logManager("Errore parametri di configurazione","win")  
                return False
        return True

    
    def saveSettings(self):
        self.updateSettings()
        try:        
            f = open(self.cfgFile,"wb")
            pickle.dump(self.configValues,f)
            f.close()
        except:
            self.logManager(" Errore scrittura file di configurazione.","both")
            return False    

        
    def readConfigFile(self,filename):
        try:
            f = open(self.cfgFile,"rb")
            self.configValues = pickle.load(f)
            f.close()
        except:
            self.logManager("Errore lettura file di configurazione.","both")
            return False    
        
        self.ui.serverNameBox.setText(self.configValues["host"]) 
        self.ui.dbNameBox.setText(self.configValues["db"]) 
        self.ui.userNameBox.setText(self.configValues["user"]) 
        self.ui.passwordBox.setText(self.configValues["passwd"]) 
        self.ui.pollInterval.setText(self.configValues["poll_interval"]) 
        
        
    def logManager(self,message,mtype): #mtype = log for filelog, win for editbox, both for both.
        message = datetime.now().isoformat() + " " + message;
        if ( mtype in ["log","both"] ):            
            try:
                f = open(self.logFile,"a")
                f.write(message + "\n")
                f.close()            
            except: 
                self.logManager("Impossibile scrivere sul file log", "win")
                self.ui.textBox.append(self.logFile +  "  " + message)              
        if ( mtype in ["win","both"] ):            
            self.ui.textBox.append(message)      



if __name__ == "__main__":
    app = QtGui.QApplication(sys.argv)
    myapp = meteoScan()
    myapp.show()

    cloud = win32com.client.Dispatch("ClarityII.CloudSensorII")       

    sys.exit(app.exec_())
    

