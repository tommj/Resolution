function show()
{
    var aa=new Date();
    var mon = aa.getMonth();
    var day = aa.getDate();
    if(mon==0) bb="Janurary";
    else if(mon==5) bb="June";
    bb = bb+"   "+ day +",   "+aa.getFullYear();
    document.write(bb);
}

function showCalUp()
{
    var t = 1;
    var s;
    for(i=1;i<31;i++)
    {	
        document.write("<td width=\"176\" height=\"63\" background=\"img/DayImages/June" + i + ".png\" onclick=\"$('.days').attr('style', ''); $('#day" + i + "').attr('style', 'background:#FFF;'); $('#HourBox').attr('src', 'img/HourBox/CalendarSideBox" + i + ".png');\" ></td>" );
    }
}

function showCalDown(activities)
{
    var aa=new Date();
    var day = aa.getDate();
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