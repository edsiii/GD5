

function newsAndInfo(data,b) {
   //alert("newsAndInfo");
	//var rtDataArray = a;
	var status = b;
	var rtJasonData = data;
	var t = new Date();
	
	//alert("Look "+ data[0].topic);
	var str1="";
	
	str1 += '<div class="list-group">';
	for (var i=0;i<data.length;++i)
	{
		//str1 += '<div class="list-group">';
			//str1 += '<a href="#" class="list-group-item active">';
			str1 += '<a href="#" class="list-group-item">';
				str1 += '<h4 class="list-group-item-heading">'+i+' : '+data[i].topic+' : <font size="1">'+data[i].edate+'</font><br/></h4>';
				str1 += '<p class="list-group-item-text">From: '+data[i].ufrom+'<br/>'+data[i].message+'</p>';
			str1 += '</a>';
		//str1 += '</div>';
	};
	str1 += '</div>';
	
	/*
	str1 += '<div class="list-group">';
	str1 += '<a href="#" class="list-group-item active">';
	str1 += '<h4 class="list-group-item-heading">List group item heading</h4>';
	str1 += '<p class="list-group-item-text">...</p>';
	str1 += '</a>';
	str1 += '</div>';	
	//str1 += '';
	*/
			
	
	// myNewsAndInfo
	document.getElementById("myNewsAndInfo").innerHTML = str1;
	document.getElementById("myNewsAndInfo_footer").innerHTML = "<p>"+dateTime1("s")+"</p>";
}