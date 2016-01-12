
<?php

/*    
-->TIME INTERVAL FORMAT
MICROSECOND	MICROSECONDS
SECOND	SECONDS
MINUTE	MINUTES
HOUR	HOURS
DAY	DAYS
WEEK	WEEKS
MONTH	MONTHS
QUARTER	QUARTERS
YEAR	YEARS
SECOND_MICROSECOND	'SECONDS.MICROSECONDS'
MINUTE_MICROSECOND	'MINUTES:SECONDS.MICROSECONDS'
MINUTE_SECOND	'MINUTES:SECONDS'
HOUR_MICROSECOND	'HOURS:MINUTES:SECONDS.MICROSECONDS'
HOUR_SECOND	'HOURS:MINUTES:SECONDS'
HOUR_MINUTE	'HOURS:MINUTES'
DAY_MICROSECOND	'DAYS HOURS:MINUTES:SECONDS.MICROSECONDS'
DAY_SECOND	'DAYS HOURS:MINUTES:SECONDS'
DAY_MINUTE	'DAYS HOURS:MINUTES'
DAY_HOUR	'DAYS HOURS'
YEAR_MONTH	'YEARS-MONTHS'
*/
    include "config.php";
        
    if(!isset($_GET["max_rows"])) $max_rows = 50;
        else $max_rows = $_GET["max_rows"];
    if(!isset($_GET["time_range"])) $time_range = "1 HOUR";
        else $time_range = $_GET["time_range"];
    if(!isset($_GET["format"])) $format = "html";
        else $format = $_GET["format"];
    if(!isset($_GET["keys"])) $keys = "*";
        else $keys = "date,time,".$_GET["keys"];


    if (!mysql_connect($db_host, $db_user, $db_pwd))
        die("Can't connect to database");

    if (!mysql_select_db($database))
        die("Can't select database");

    // sending query
//    $result = mysql_query("SELECT * FROM {$table} ORDER BY DATE DESC,TIME DESC LIMIT {$max_rows}");

    $query = "SELECT ".$keys." FROM " . $table . " where addtime(DATE,TIME) > subdate(UTC_TIMESTAMP(), INTERVAL " . $time_range ." ); ";


    $result = mysql_query($query);
    if (!$result) {
        die("Query to show fields from table failed");
    }

    $fields_num = mysql_num_fields($result);
    
    
    
    
    if ($format=="html"){
        echo "<html><head><title>Meteo Scan : Fetch Data</title></head><body>";
        echo "<h1>Table: {$table} ,  last {$time_range} , {$dateTime->format("d-m-Y H:i:s")} (UTC) </h1>";
        echo $query;
        echo "<table border='1'><tr>";
        // printing table headers
        for($i=0; $i<$fields_num; $i++)
        {
            $field = mysql_fetch_field($result);
            echo "<td>{$field->name}</td>";
        }
        echo "</tr>\n";
        // printing table rows
        while($row = mysql_fetch_row($result))
        {
            echo "<tr>";

            // $row is array... foreach( .. ) puts every element
            // of $row to $cell variable
            foreach($row as $cell)
                echo "<td>$cell</td>";

            echo "</tr>\n";
        }
        echo "</body></html>";
    }
    
    if ($format=="json"){
//        echo $query . "<br />" ;

        while($row = mysql_fetch_assoc($result)){
              $row_set[] = array( strtotime($row['date']."  ".$row['time'])*1000 , $row['daylightv'] );
        }
        echo json_encode($row_set);

    }

    if ($format=="json2"){
//        echo $query . "<br />" ;

      for($i=0; $i<$fields_num; $i++)
        {
            $field = mysql_fetch_field($result)->name;
            if (($field != "date") && ($field != "time")){
              $date[$field] = array("label" => $field);
            }
        }
        
        while($row = mysql_fetch_assoc($result))
          foreach($date as &$value){
            $value["data"][] = array( strtotime($row['date']."  ".$row['time'])*1000 , $row[$value["label"]]);
        }
        
      
        
//      $array = mysql_fetch_row($result);
//      echo json_encode($array);
//      echo($data["date"]->name);
//        $c = array("date" => 1,"time" => 2);
        echo json_encode($date);
//        echo count($date);
    }


    mysql_free_result($result);
?>

