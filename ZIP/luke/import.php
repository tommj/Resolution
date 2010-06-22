<?php

include_once( 'excelreader/excel_reader2.php' );
$data = new Spreadsheet_Excel_Reader( 'programmer.xls' );

for ( $row = 4; $row <= 50; $row++ )
{
    $date = explode('-', $data->sheets[0]['cells'][$row][2]);
    $day = $date[0];
    $title = ($row < 42) ? $data->sheets[0]['cells'][$row][3] : $data->sheets[0]['cells'][$row][4] ;
    $location = $data->sheets[0]['cells'][$row][6];
    $startTime = $data->sheets[0]['cells'][$row][7];
    $endTime = $data->sheets[0]['cells'][$row][8];
    
    $db_connection = mysql_connect('localhost', 'root', 'zaun3r3');
    mysql_set_charset('utf8', $db_connection);
    mysql_select_db('luke', $db_connection);
    
    $query = "INSERT INTO activity
              (title, location, start_time, end_time, day)
              VALUES
              ('$title', '$location', '$startTime', '$endTime', '$day')";
    echo $query . '<br/>';
    mysql_query($query, $db_connection);
}

?>