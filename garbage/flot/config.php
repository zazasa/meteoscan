<?
    $db_host = 'localhost';
    $db_user = 'meteoscan';
    $db_pwd = 'meteoscan';

    $database = 'meteo';
    $table = 'meteo_data';

    date_default_timezone_set("UTC");
    $dateTime = new DateTime("now", new DateTimeZone('UTC'));
?>
