function show()
{
	var d = new Date();
    var day = d.getDate();
    var bb = getMonthName()+" "+ day +", "+d.getFullYear();
    document.write(bb);
}
function getMonthName() {
	var d = new Date();
    var m = d.getMonth();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return months[m];
}
function getDayName(y,m,d) {
	var date = new Date();
	if ((y||m||d) != ("undefined"||null)){
		str = new Array();
		if (y != null) {
			date.setFullYear(y);
		}
		if (m != null) {
			date.setMonth(m);
		}
		if (d != null) {
			date.setDate(d);
		}
	}
	var dn = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	return dn[date.getDay()];
}
function showCalUp()
{
    var t = 1,s,ths="";
    for(i=1;i<31;i++)
    {	
    	ths += "<td width=\"176\" height=\"63\" background=\"img/DayImages/June" + i + ".png\" onclick=\"$('.days').attr('style', ''); $('#day" + i + "').attr('style', 'background:#FFF;'); $('#HourBox').attr('src', 'img/HourBox/CalendarSideBox" + i + ".png');\" ></td>";
    }
    ths += '</tr><tr height="63">';
    
    for(i=1;i<31;i++)
    {	
        ths += '<th onclick="$(\'.days\').attr(\'style\', \'\'); $(\'#day' + i + '\').attr(\'style\', \'background:#FFF;\'); $(\'#HourBox\').attr(\'src\', \'img/HourBox/CalendarSideBox' + i + '.png\');"><time><span class="day-name">'+getDayName(null,null,i)+'</span><span class="day-number">'+i+'</span></time></th>';
    }
    $('#content thead tr').append(ths);
}

function showCalDown(activities)
{
    var d = new Date();
    var day = d.getDate();
    var s;
    for(i=1;i<31;i++)
    {	
        s = "";
        
        for(j in activities[i])
        {
            s +=  "<div><img src=\"img/Titles/" + activities[i][j]['activity_id'] + "t.png\" alt=\"\" width=\"172\" onclick=\"changeDay(" + i + ");\" /></div>";
            
            if (i<24)
            {
                s += (activities[i][j]['Leroy'] == 1) ? '<div class="bubbleInfo left" title="Reflect" onclick="changeDay(' + i + ');" ><img class="trigger" src="img/Colors/' + activities[i][j]['activity_id'] + '/Le.png" alt="" /><div class="popup"><img src="img/Event/' + activities[i][j]['activity_id'] + '/Le.png" alt="" /></div></div>' : '<div class="left" onclick="changeDay(' + i + ');" ><img src=\"img/LeroyBlank.png\" /></div>' ;
                s += (activities[i][j]['Emma'] == 1) ? '<div class="bubbleInfo left" title="Reflect" onclick="changeDay(' + i + ');" ><img class="trigger" src="img/Colors/' + activities[i][j]['activity_id'] + '/Em.png" alt="" /><div class="popup"><img src="img/Event/' + activities[i][j]['activity_id'] + '/Em.png" alt="" /></div></div>' : '<div class="left" onclick="changeDay(' + i + ');" ><img src=\"img/EmmaBlank.png\" /></div>' ;
                s += (activities[i][j]['Lance'] == 1) ? '<div class="bubbleInfo left" title="Reflect" onclick="changeDay(' + i + ');" ><img class="trigger" src="img/Colors/' + activities[i][j]['activity_id'] + '/La.png" alt="" /><div class="popup"><img src="img/Event/' + activities[i][j]['activity_id'] + '/La.png" alt="" /></div></div>' : '<div class="left" onclick="changeDay(' + i + ');" ><img src=\"img/LanceBlank.png\" /></div>' ;
                s += (activities[i][j]['Shannon'] == 1) ? '<div class="bubbleInfo left" title="Reflect" onclick="changeDay(' + i + ');" ><img class="trigger" src="img/Colors/' + activities[i][j]['activity_id'] + '/Sh.png" alt="" /><div class="popup"><img src="img/Event/' + activities[i][j]['activity_id'] + '/Sh.png" alt="" /></div></div>' : '<div class="left" onclick="changeDay(' + i + ');" ><img src="img/ShannonBlank.png" /></div>' ;
            }
            else
            {
                s += (activities[i][j]['Leroy'] == 1) ? '<div class="bubbleInfo left" title="Activate" onclick="changeDay(' + i + ');" ><img class="trigger" src="img/ActivityLeroy.png" alt="" /><div class="popup"><img src="img/Event/' + activities[i][j]['activity_id'] + 'act.png" alt="" /></div></div>' : '<div class="left" onclick="changeDay(' + i + ');" ><img src=\"img/LeroyBlank.png\" /></div>' ;
                s += (activities[i][j]['Emma'] == 1) ? '<div class="bubbleInfo left" title="Activate" onclick="changeDay(' + i + ');" ><img class="trigger" src="img/ActivityEmma.png" alt="" /><div class="popup"><img src="img/Event/' + activities[i][j]['activity_id'] + 'act.png" alt="" /></div></div>' : '<div class="left" onclick="changeDay(' + i + ');" ><img src=\"img/EmmaBlank.png\" /></div>' ;
                s += (activities[i][j]['Lance'] == 1) ? '<div class="bubbleInfo left" title="Activate" onclick="changeDay(' + i + ');" ><img class="trigger" src="img/ActivityLance.png" alt="" /><div class="popup"><img src="img/Event/' + activities[i][j]['activity_id'] + 'act.png" alt="" /></div></div>' : '<div class="left" onclick="changeDay(' + i + ');" ><img src=\"img/LanceBlank.png\" /></div>' ;
                s += (activities[i][j]['Shannon'] == 1) ? '<div class="bubbleInfo left" title="Activate" onclick="changeDay(' + i + ');" ><img class="trigger" src="img/ActivityShannon.png" alt="" /><div class="popup"><img src="img/Event/' + activities[i][j]['activity_id'] + 'act.png" alt="" /></div></div>' : '<div class="left" onclick="changeDay(' + i + ');" ><img src="img/ShannonBlank.png" /></div>' ;
            }
            
            
            s += '</div><div style="clear:left;" <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;';
        }
        if(i == day)
            document.write("<td width=\"176\" height=\"618\" rowspan=\"1\"  background=\"img/CurrentDay.png\" onclick=\"changeDay(" + i + ");\" >"+s+"</td>" );
        else
            document.write("<td width=\"176\" height=\"618\" rowspan=\"1\" background=\"img/Background.png\" onclick=\"changeDay(" + i + ");\" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+s+"</td>" );
    }
}

//function showCalUp()
//{
//    var t = 1;
//    var s;
//    for(i=1;i<31;i++)
//    {	
//        switch(t){
//        case 1: s = "Tuesday";break;
//        case 2: s = "Wednesday  ";break;
//        case 3: s = "Thursday  " ;break;
//        case 4: s = "Friday " ;break;
//        case 5: s = "Sataday  " ;break;
//        case 6: s = "Sunday  " ;break;
//        case 7: s = "Monday  " ;break;
//    }
//    t++;
//    if(t>7) t =1;
//        document.write("<td width=\"173\" height=\"63\"  background=\"img/CalendarDayBar.png\" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size=\"2\" color=\"#333\">"+s+"</font>&nbsp;&nbsp;<font size=\"5\" color=\"#333\">"+i+"</font></td>" );
//    
//    }
//}
//function showCalDown(){
//    var aa=new Date();
//    var day = aa.getDate();
//    var s;
//    for(i=1;i<31;i++)
//    {	
//        s="";
//        if(i%4==0)
//            s = s + "<img src=\"img/LanceReflectedActivity.png\" /> <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;";
//        if(i%3==0)
//            s = s + "<img src=\"img/ShannonReflectedActivity.png\" /><br/>&nbsp;&nbsp;&nbsp;&nbsp;";
//        if(i%7==0)
//            s = s + "<img src=\"img/LeroyReflectedActivity.png\"/><br/><br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;";
//        if(i == day)
//            document.write("<td width=\"170\" height=\"618\" rowspan=\"1\"  background=\"img/CurrentDay.png\" >"+s+"</td>" );
//        else
//            document.write("<td width=\"170\" height=\"618\" rowspan=\"1\" background=\"img/Background.png\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+s+"</td>" );
//    }
//}