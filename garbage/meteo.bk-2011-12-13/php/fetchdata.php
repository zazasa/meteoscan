
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


    function  checkValue ($name,$value) {
        switch ($name) {
            case "RelSkyT":
                if($value == -998) return null ;
                    else return $value;
                break;
            case "Wind":
                if($value <= 0) return null ;
                    else return $value;
                break;
            case "DayLightV":
                    return $value*(1/1000);
                break;

            default: 
                return $value;
        }
    }

        
    if(!isset($_GET["max_rows"])) $max_rows = 50;
        else $max_rows = $_GET["max_rows"];
    if(!isset($_GET["time_range"])) $time_range = "1 HOUR";
        else $time_range = $_GET["time_range"];
    if(!isset($_GET["format"])) $format = "html";
        else $format = $_GET["format"];
    if(!isset($_GET["keys"])) $keys = "*";
        else $keys = "date,time,".$_GET["keys"];
    if(!isset($_GET["datetime"])) $datequery = " where addtime(concat(DATE,' 00:00'),TIME) > subdate(UTC_TIMESTAMP(), INTERVAL " . $time_range ." ); ";
        else $datequery = "";


    //db connect
    $mysqli = new mysqli($db_host, $db_user,  $db_pwd, $database);
    $mysqli->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, true);
    
    /* check connection */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

    // sending query
    $query = "SELECT ".$keys." FROM " . $table . $datequery;
    
//    echo $query; 
//    exit();
    
    $result = $mysqli->query($query);
    if (!$result) {
        die("Query to show fields from table failed");
    }
    
    //default format, show query result on browser window.   
    if ($format=="html"){
        echo "<html><head><title>Meteo Scan : Fetch Data</title></head><body>";
        echo "<h1>Table: {$table} ,  last {$time_range} , {$dateTime->format("d-m-Y H:i:s")} (UTC) </h1>";
        echo $query;
        echo "<table border='1'><tr>";
        
        $fields = $result->fetch_fields();
        // printing table headers
        foreach($fields as $field) 
            echo "<td>{$field->name}</td>";
       
        echo "</tr>\n";
        
        // printing table rows
        while($row = $result->fetch_row())
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


    // sendind result via json datatype
    if ($format=="json"){
//        echo $query . "<br />" ;
      $fields = $result->fetch_fields();  
      //first level of json data {field1,field2,..}
      foreach($fields as $field) 
        if (($field->name != "date") && ($field->name != "time"))
          
          $data[$field->name] = array("name" => $field->name);

      //second level of json data field1:{fieldname,data{}}
      $prevData = 0;
      while($row = $result->fetch_assoc()){
        $curData = strtotime($row['date']."  ".$row['time'])*1000 ;

        foreach($data as &$value){
            $curValue = checkValue ($value["name"] , $row[$value["name"]]); //check special value as -998 for relskyt
//          $curValue = $row[$value["name"]];
          if (($prevData != 0) && (($curData - $prevData) > $nullGap )) { $value["data"][] = array($prevData+$nullGap,null); } //null gap check
          $value["data"][] = array( $curData , $curValue );  
        }
        $prevData = $curData;
      }                      
      echo json_encode($data);
    }

    $mysqli->close();
?>

