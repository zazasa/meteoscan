<?
    $db_host = 'localhost';
    $db_user = 'meteoscan';
    $db_pwd = 'meteoscan';

    $database = 'meteo';
    $table = 'meteo_data';

    date_default_timezone_set("UTC");
    $dateTime = new DateTime("now", new DateTimeZone('UTC'));
    
    $nullGap = 120000; //find a better way to get this param
    
    
?>
