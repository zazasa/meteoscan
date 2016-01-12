import MySQLdb

db_host = "pc001.fisica.unisi.it"
db_root = "root"
db_pass = "salvo868"


conn=MySQLdb.connect( host= db_host, user = db_root, passwd = db_pass)

cursor=conn.cursor()

sqlCmd = [ "CREATE USER 'meteoscan'@'%' IDENTIFIED BY  'meteoscan';" ,

           """GRANT USAGE ON * . * TO  'meteoscan'@'%' IDENTIFIED BY  'meteoscan' 
            WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0 ;""",
            
           "CREATE DATABASE IF NOT EXISTS  `meteo` ;",
           
           "GRANT ALL PRIVILEGES ON  `meteo` . * TO  'meteoscan'@'%'",
           
           "CREATE TABLE  `meteo`.`meteo_data` ( `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY ) ENGINE = MYISAM",
           
           """ALTER TABLE  `meteo`.`meteo_data` 
            ADD `time` TIME NOT NULL ,
            ADD `date` DATE NOT NULL ,
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
            ADD `WetF` BOOL NOT NULL ;
            """ 
          ]

for cmd in sqlCmd:
    cursor.execute(cmd)
