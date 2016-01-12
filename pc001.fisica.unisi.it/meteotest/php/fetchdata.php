
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
    if(!isset($_GET["format"])) $format = "html";
        else $format = $_GET["format"];
    if(!isset($_GET["keys"])) $keys = "*";
        else $keys = "datetime,".$_GET["keys"];
    if(!isset($_GET["start_date"])) $start_date = date('Y-m-d H:i:s',strtotime("-1 day"));
        else $start_date = $_GET["start_date"];
		if(!isset($_GET["end_date"])) $end_date = date('Y-m-d H:i:s',strtotime("now"));
        else $end_date = $_GET["end_date"];

    $value= round((strtotime($end_date) - strtotime($start_date))/(24*60*60));

    //reduce points number dynamically(find a better way)     
    if ($value > 1) {
        $div = " group by id-(id%".$value.");" ;
        $nullGap = $nullGap * $value;
        }        
        else $div = "";

		$datequery = " where datetime between '". $start_date ."' and '". $end_date ."'" ;

    //db connect
    $mysqli = new mysqli($db_host, $db_user,  $db_pwd, $database);
    $mysqli->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, true);
    
    /* check connection */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

    // sending query
    $query = "SELECT ".$keys." FROM ".$table.$datequery.$div;
    
//    echo $query; 
//    exit();
    
    $result = $mysqli->query($query);
    if (!$result) {
        die("Query to show fields from table failed");
    }
    
    //default format, show query result on browser window.   
    if ($format=="html"){
        echo "<html><head><title>Meteo Scan : Fetch Data</title></head><body>";
        echo "<h1>Table: {$table} ,  from {$start_date} to {$end_date} , {$dateTime->format("d-m-Y H:i:s")} (UTC) </h1>";
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
        if ($field->name != "datetime")
          
          $data[$field->name] = array("name" => $field->name);

      //second level of json data field1:{fieldname,data{}}
      $prevData = 0;
      while($row = $result->fetch_assoc()){
        $curData = strtotime($row['datetime'])*1000 ;

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

