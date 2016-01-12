
<?php


    include "config.php";


    //db connect
    $mysqli = new mysqli($db_host, $db_user,  $db_pwd, $database);
    $mysqli->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, true);
    
    /* check connection */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

    $query = 'insert into meteo_datatest select * from meteo_data where id > (select id from meteo_datatest order by id desc limit 1);';

    $result = $mysqli->query($query);

    echo $query;

    if (!$result) {
        die("Query to show fields from table failed");
    }

    echo $result;
    
    $mysqli->close();

?>

