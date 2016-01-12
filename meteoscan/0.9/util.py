import win32com.client
from datetime import datetime

cloud = win32com.client.Dispatch("ClarityII.CloudSensorII")

dataConversion =    {   "int" : "INT NOT NULL",
                        "float": "FLOAT NOT NULL" ,
                        "bool": "BOOL NOT NULL" ,
                        "unicode": "VARCHAR( 10 ) NOT NULL" ,
                        "str": "VARCHAR( 25 ) NOT NULL" ,
                    }
                    


rawData = {    "date": (datetime.now().date().isoformat()),
                    "time":(datetime.now().time().isoformat().split(".")[0]),
                    "AmbientT": (cloud.AmbientT),
            		"ClarityIIVersion": "\"" + (cloud.ClarityIIVersion) + "\"" ,
	                "CloudCondition": (cloud.CloudCondition) ,
	                "CloudyThreshT": (cloud.CloudyThreshT) ,
	                "DayCondition": (cloud.DayCondition) ,
	                "DayLightV": (cloud.DayLightV) ,
	                "DayThreshV": (cloud.DayThreshV) ,
	                "DewPointT": (cloud.DewPointT) ,
	                "Fahrenheit": (cloud.Fahrenheit),
	                "FirmwareVersion": (cloud.FirmwareVersion),
	                "HeaterPercent": (cloud.HeaterPercent) ,
	                "HumidityPercent": (cloud.HumidityPercent),
	                "Mph": (cloud.Mph) ,
	                "RainCondition": (cloud.RainCondition),
	                "RainF": (cloud.RainF),
	                "RainThreshV": (cloud.RainThreshV),
	                "RelSkyT": (cloud.RelSkyT),
	                "RoofCloseRequested": (cloud.RoofCloseRequested),
	                "SecondsSinceGoodData": (cloud.SecondsSinceGoodData),
	                "SensorT": (cloud.SensorT),
	                "VCloudyThreshT": (cloud.VCloudyThreshT),
	                "VDayThreshV": (cloud.VDayThreshV),
	                "VWindyThreshSpeed": (cloud.VWindyThreshSpeed),
	                "WetF": (cloud.WetF),
	                "WetThreshV": (cloud.WetThreshV),
	                "Wind": (cloud.Wind),
	                "WindCondition": (cloud.WindCondition),
	                "WindUnits": (cloud.WindUnits),
	                "WindyThreshSpeed": (cloud.WindyThreshSpeed),
            	}

#sqlDataStruc = {}

for line in rawData:
#    sqlDataStruc[line] = type(rawData[line]).__name__ 
#    print line + "->" + sqlDataStruc[line]
    
    print "ADD `" + line + "` " + dataConversion[type(rawData[line]).__name__ ] + " ,"

"""
ADD `time` VARCHAR( 25 ) NOT NULL ,
ADD `date` VARCHAR( 25 ) NOT NULL ,
ADD `HumidityPercent` FLOAT NOT NULL ,
ADD `ClarityIIVersion` VARCHAR( 10 ) NOT NULL ,
ADD `AmbientT` FLOAT NOT NULL ,
ADD `RelSkyT` FLOAT NOT NULL ,
ADD `Fahrenheit` BOOL NOT NULL ,
ADD `DayLightV` INT NOT NULL ,
ADD `WetThreshV` INT NOT NULL ,
ADD `RainThreshV` INT NOT NULL ,
ADD `DayThreshV` FLOAT NOT NULL ,
ADD `SensorT` FLOAT NOT NULL ,
ADD `WindUnits` INT NOT NULL ,
ADD `SecondsSinceGoodData` INT NOT NULL ,
ADD `WindyThreshSpeed` FLOAT NOT NULL ,
ADD `Mph` BOOL NOT NULL ,
ADD `DewPointT` FLOAT NOT NULL ,
ADD `CloudCondition` INT NOT NULL ,
ADD `RainF` BOOL NOT NULL ,
ADD `FirmwareVersion` INT NOT NULL ,
ADD `RoofCloseRequested` BOOL NOT NULL ,
ADD `VWindyThreshSpeed` FLOAT NOT NULL ,
ADD `RainCondition` INT NOT NULL ,
ADD `DayCondition` INT NOT NULL ,
ADD `Wind` FLOAT NOT NULL ,
ADD `HeaterPercent` FLOAT NOT NULL ,
ADD `VCloudyThreshT` FLOAT NOT NULL ,
ADD `VDayThreshV` FLOAT NOT NULL ,
ADD `WindCondition` INT NOT NULL ,
ADD `CloudyThreshT` FLOAT NOT NULL ,
ADD `WetF` BOOL NOT NULL ,

"""
