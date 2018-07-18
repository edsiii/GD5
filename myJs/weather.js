
function weather1() {
	// http://simpleweatherjs.com/
	//alert("OK");
	$.simpleWeather({
    //woeid: '2357536', //2357536
    location: 'Kansas City, Kansas',
    unit: 'f',
    success: function(weather) {
		
		html = '<h5>'+weather.title+' '+weather.temp+'&deg;'+weather.units.temp+' '+weather.currently+'</h5>';
		//html += '<h5>'+weather.temp+'&deg;'+weather.units.temp+'</h5>';	  
      //html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      //html += '<li class="currently">'+weather.currently+'</li>';
      //html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';
      //html += '';
	  
	  html += '<table width="500" height="100%" border-spacing:5em;><tr height="20">';
	  html += '<td align="center"> </th><th> &nbsp; &nbsp; &nbsp;</td>';
		  for(var i=0;i<weather.forecast.length;i++) {
			//html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
			html += '<th>'+weather.forecast[i].day+'</th><th> &nbsp; &nbsp; &nbsp;</th>';
		  }		  
		html +='</tr>';
		html +='<tr>';
		html += '<td align="center">Highs</th><th> &nbsp; &nbsp; &nbsp;</td>';
		for(var i=0;i<weather.forecast.length;i++) {
			html += '<td align="center">'+weather.forecast[i].high+'</th><th> &nbsp; &nbsp; &nbsp;</td>';
		}	
		html +='</tr>';
		
		html +='<tr>';
		html += '<td align="center">Lows</th><th> &nbsp; &nbsp; &nbsp;</td>';
		for(var i=0;i<weather.forecast.length;i++) {
			html += '<td align="center">'+weather.forecast[i].low+'</th><th> &nbsp; &nbsp; &nbsp;</td>';
		}
		html +='</tr></table>';
		
		html += 'Wind Speed: '+weather.wind.speed+' Humidity '+weather.humidity+'%';
		 $("#wupdte").html("<p>"+dateTime1("s")+"</p>"); //html('Last Updated: '+weather.updated);
		 
		$("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

}