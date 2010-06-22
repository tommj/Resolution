<?php

$baseUrl = 'http://dinkus.nyphp.com/pub/luke/';

$db_connection = mysql_connect('localhost', 'root', 'zaun3r3');
mysql_set_charset('utf8', $db_connection);
mysql_select_db('luke', $db_connection);

$query = "SELECT activity_id, title, location, start_time, end_time, day FROM activity";
if ( ($result = mysql_query($query, $db_connection)) && mysql_affected_rows($db_connection) > 0 )
{
    while ( $rs = mysql_fetch_assoc($result) )
        $activities[$rs['day']][] = $rs;
}

$day = isset($_GET['day']) ? $_GET['day'] : 1 ;

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Resolution</title>
<link type="text/css" href="jquery.ui/ui.dialog.css" rel="stylesheet" />
<link type="text/css" href="jquery.ui/ui.core.css" rel="stylesheet" />
<link type="text/css" href="jquery.ui/resolution.css" rel="stylesheet" />
<script src="js/jquery-1.3.2.js" language="javascript" type="text/javascript"></script>
<script src="js/jquery-ui-1.7.1.custom.min.js" language="javascript" type="text/javascript"></script>
<script src="js/slider_test.js" language="javascript" type="text/javascript"></script>
<script src="js/ui.core.js" language="javascript" type="text/javascript"></script>
<script src="js/ui.dialog.js" language="javascript" type="text/javascript"></script>
<script src="js/city.js" language="javascript" type="text/javascript"></script>
<script src="js/resolution.js" language="javascript" type="text/javascript"></script>
</head>
<body>
 
<div id="main">
    <div style="margin:0px auto; width:1024px; height:60px position:relative; overflow:visible">
        <table width="100%" border="0" height="60px" cellspacing="0" background="img/MenuBar.png" >
            <tr>
                <td width="184" rowspan="2" style="padding-top:10px"></td>
                <td width="566" rowspan="2" style="padding-top:5px; font-size:15px; color:#999;">  <script>show();</script>   </td>   
                <td width="93" rowspan="2" style="padding-top:0px"><img src="img/CalButton.png" width="72" height="30" border="0" /> </td>   
                <td width="77" rowspan="2" style="padding-top:5px"><img src="img/VisionButton.png" width="57" height="30" border="0" /> </td>   
                <td width="94" rowspan="2" style="padding-top:5px"><img src="img/Shared.png" width="61" height="30" border="0" /> </td>   
            </tr>
        </table>
    </div>
    <div id="left" style="background:url(img/CalendarSideBox<?=$day?>.png);">
        <div style="margin:0px auto; height:3.3%; position:relative; overflow:visible"></div>
        <div  align="center" style="margin:0px auto; height:3%; position:relative; overflow:visible; font-size:15px; color:#D6D6D6;" > June </div>
        <div style="margin:0px auto; height:2.3%; position:relative; overflow:visible">
            <table >
                <tr>
                    <td width="27"></td>
                    <td width="14"></td>
                    <td width="14"></td>
                    <td width="14" style="<?php if( $day == 1): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=1" style="font-size:10px; color:#333; text-decoration:none;">1</a></td>
                    <td width="14" style="<?php if( $day == 2): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=2" style="font-size:10px; color:#333; text-decoration:none;">2</a></td>
                    <td width="14" style="<?php if( $day == 3): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=3" style="font-size:10px; color:#333; text-decoration:none;">3</a></td>
                    <td width="14" style="<?php if( $day == 4): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=4" style="font-size:10px; color:#333; text-decoration:none;">4</a></td>
                    <td width="14" style="<?php if( $day == 5): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=5" style="font-size:10px; color:#333; text-decoration:none;">5</a></td>
                </tr>
            </table>
        </div>
        <div style="margin:0px auto; height:2.3%; position:relative; overflow:visible">
            <table >
                <tr>
                    <td width="27"></td>
                    <td width="14" style="<?php if( $day == 6): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=6" style="font-size:10px; color:#333; text-decoration:none;">6</a></td>
                    <td width="14" style="<?php if( $day == 7): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=7" style="font-size:10px; color:#333; text-decoration:none;">7</a></td>
                    <td width="14" style="<?php if( $day == 8): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=8" style="font-size:10px; color:#333; text-decoration:none;">8</a></td>
                    <td width="14" style="<?php if( $day == 9): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=9" style="font-size:10px; color:#333; text-decoration:none;">9</a></td>
                    <td width="14" style="<?php if( $day == 10): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=10" style="font-size:10px; color:#333; text-decoration:none;">10</a></td>
                    <td width="14" style="<?php if( $day == 11): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=11" style="font-size:10px; color:#333; text-decoration:none;">11</a></td>
                    <td width="14" style="<?php if( $day == 12): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=12" style="font-size:10px; color:#333; text-decoration:none;">12</a></td>
                </tr>
            </table>
        </div>
        <div style="margin:0px auto; height:2.3%; position:relative; overflow:visible">
            <table >
                <tr>
                    <td width="27"></td>
                    <td width="14" style="<?php if( $day == 13): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=13" style="font-size:10px; color:#333; text-decoration:none;">13</a></td>
                    <td width="14" style="<?php if( $day == 14): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=14" style="font-size:10px; color:#333; text-decoration:none;">14</a></td>
                    <td width="14" style="<?php if( $day == 15): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=15" style="font-size:10px; color:#333; text-decoration:none;">15</a></td>
                    <td width="14" style="<?php if( $day == 16): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=16" style="font-size:10px; color:#333; text-decoration:none;">16</a></td>
                    <td width="14" style="<?php if( $day == 17): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=17" style="font-size:10px; color:#333; text-decoration:none;">17</a></td>
                    <td width="14" style="<?php if( $day == 18): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=18" style="font-size:10px; color:#333; text-decoration:none;">18</a></td>
                    <td width="14" style="<?php if( $day == 19): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=19" style="font-size:10px; color:#333; text-decoration:none;">19</a></td>
                </tr>
            </table>
        </div>
        <div style="margin:0px auto; height:2.3%; position:relative; overflow:visible">
            <table >
                <tr>
                    <td width="27"></td>
                    <td width="14" style="<?php if( $day == 20): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=20" style="font-size:10px; color:#333; text-decoration:none;">20</a></td>
                    <td width="14" style="<?php if( $day == 21): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=21" style="font-size:10px; color:#333; text-decoration:none;">21</a></td>
                    <td width="14" style="<?php if( $day == 22): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=22" style="font-size:10px; color:#333; text-decoration:none;">22</a></td>
                    <td width="14" style="<?php if( $day == 23): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=23" style="font-size:10px; color:#333; text-decoration:none;">23</a></td>
                    <td width="14" style="<?php if( $day == 24): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=24" style="font-size:10px; color:#333; text-decoration:none;">24</a></td>
                    <td width="14" style="<?php if( $day == 25): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=25" style="font-size:10px; color:#333; text-decoration:none;">25</a></td>
                    <td width="14" style="<?php if( $day == 26): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=26" style="font-size:10px; color:#333; text-decoration:none;">26</a></td>
                </tr>
            </table>
        </div>
        <div style="margin:0px auto; height:2.3%; position:relative; overflow:visible">
            <table >
                <tr>
                    <td width="27">
                    </td>
                    <td width="14" style="<?php if( $day == 27): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=27" style="font-size:10px; color:#333; text-decoration:none;">27</a></td>
                    <td width="14" style="<?php if( $day == 28): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=28" style="font-size:10px; color:#333; text-decoration:none;">28</a></td>
                    <td width="14" style="<?php if( $day == 29): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=29" style="font-size:10px; color:#333; text-decoration:none;">29</a></td>
                    <td width="14" style="<?php if( $day == 30): ?>background: #FFF<?php endif; ?>"><a href="<?=$baseUrl?>index.php?day=30" style="font-size:10px; color:#333; text-decoration:none;">30</a></td>
                    <td width="14"></td>
                    <td width="14"></td>
                    <td width="14"></td>
                </tr>
            </table>
        </div>
    </div>
    <div id="right">
        <div id="content-scroll">
            <div id="content-holder">
                <div class="content-item">
                    <table  border="0" cellspacing="0">
                        <tr height="63">
                            <script>
                            showCalUp();
                            </script>
                        </tr >
                        <tr>
                            <script>
                            showCalDown();
                            </script>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div id="content-slider"></div>
    </div>
</div> 

</body>
</html>