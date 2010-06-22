function show(){
		var aa=new Date();
		var mon = aa.getMonth();
		var day = aa.getDate();
		if(mon==0) bb="Janurary";
		else if(mon==5) bb="June";
		bb = bb+",   "+ day +",   "+aa.getFullYear();
		document.write(bb);
		}
	function showCalUp(){
		var t = 1;
		var s;
		for(i=1;i<31;i++)
		{	
				switch(t){
				case 1: s = "Tuesday";break;
				case 2: s = "Wednesday  ";break;
				case 3: s = "Thursday  " ;break;
				case 4: s = "Friday " ;break;
				case 5: s = "Sataday  " ;break;
				case 6: s = "Sunday  " ;break;
				case 7: s = "Monday  " ;break;
			}
			t++;
			if(t>7) t =1;
		 document.write("<td width=\"173\" height=\"63\"  background=\"img/CalendarDayBar.png\" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size=\"2\" color=\"#333\">"+s+"</font>&nbsp;&nbsp;<font size=\"5\" color=\"#333\">"+i+"</font></td>" );

		}
	}
	
	function showCalDown(){
		var aa=new Date();
		var day = aa.getDate();
		var s;
		for(i=1;i<31;i++)
		{	
			
			
			 s="";
			if(i%4==0)
				s = s + "<img src=\"img/LanceReflectedActivity.png\" /> <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;";
			if(i%3==0)
				s = s + "<img src=\"img/ShannonReflectedActivity.png\" /><br/>&nbsp;&nbsp;&nbsp;&nbsp;";
			if(i%7==0)
				s = s + "<img src=\"img/LeroyReflectedActivity.png\"/><br/><br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;";
			if(i == day)
				document.write("<td width=\"170\" height=\"618\" rowspan=\"1\"  background=\"img/CurrentDay.png\" >"+s+"</td>" );
			else
				document.write("<td width=\"170\" height=\"618\" rowspan=\"1\" background=\"img/Background.png\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+s+"</td>" );

		}
	}