
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

    $query = 'select max(id) as id from '.$table.' group by date_format(datetime,"%Y-%m-%d %H:%i") having count(*) > 1;';

    $result = $mysqli->query($query);

    echo $query;

    if (!$result) {
        die("Query to show fields from table failed");
    }
    
    $list = "0";
    
    while($row = $result->fetch_row())
    {

        foreach($row as $cell){
            $list = $cell." , ".$list;
            };
    }

    $query = "delete from ".$table." where id in (".$list.");";
    $mysqli->query($query);
    
    echo $query;
    
    $mysqli->close();

?>

