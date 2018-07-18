
// vehicle status codes
var vehicleStatCode = [
	{ text: "None", value: "0" },
	{ text: "On-Line", value: "1" },
	{ text: "Off-Line", value: "2" },
	{ text: "Getting Repairs", value: "3" },
	{ text: "Need Replacement", value: "99" }
];

function JavaScriptFunctionWithoutParameters(b)  
{
  alert("JavaScript function called from C# WPF!");
  window.external.AnotherMethod('Hello World!!!');
  return " Hello "+b;
}

// NEW CALL
var statesData=[];
var locationTypsData=[];
var users2Data=[];
var spItemsList=[];
var packRateData=[];

// spItems, franIDs, 
function getUtilData() {
var form = new FormData();
	form.append("franID", "GD00KS");
	form.append("cid", "0532");
	//form.append("mode", "G");

	var u = "./scripts/phpMis1.php";//Edit

	statesData=[];
	locationTypsData=[];
	users2Data=[];
	spItemsList=[];
	packRateData=[];
	
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": u,
	  "method": "POST",
	  "headers": {
		"Cache-Control": "no-cache"
	  },
	  "processData": false,
	  "contentType": false,
	  "mimeType": "multipart/form-data",
	  "data": form
	}

	$.ajax(settings).done(function (response) {
		var data = new Object();
		var data =  $.parseJSON( response );
		//alert(data.items[0].id);
		// each section
		for (var i=0;i<data.states.length;++i)
		{
			statesData.push(data.states[i]);
			//alert(data.states[i].id);
		};
		// each section
		for (var i=0;i<data.locationTyps.length;++i)
		{
			locationTypsData.push(data.locationTyps[i]);
			//alert(data.locationTyps[i].idx);
		};
		// each section
		for (var i=0;i<data.users2.length;++i)
		{
			users2Data.push(data.users2[i]);
			//alert(data.users2[i].idx);
		};
		// 4 each section
		for (var i=0;i<data.spItemsList.length;++i)
		{
			spItemsList.push(data.spItemsList[i]);
			//alert(data.spItemsList[i].idx);
		};
		// 5 each section
		for (var i=0;i<data.packrate.length;++i)
		{
			packRateData.push(data.packrate[i]);
			//alert(data.packrate [i].idx);
		};
		
		//alert(data.spItemsList.length);
		
	}).fail(function (jqXHR, textStatus) {
		alert(jqXHR+" "+textStatus);
	});

}


function getUtilData2() {
var form = new FormData();
	form.append("franID", "GD00KS");
	form.append("cid", "0532");
	//form.append("mode", "G");

	var u = "./scripts/phpMis2.php";//Edit

	zipcodes2Data=[];

	
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": u,
	  "method": "POST",
	  "headers": {
		"Cache-Control": "no-cache"
	  },
	  "processData": false,
	  "contentType": false,
	  "mimeType": "multipart/form-data",
	  "data": form
	}

	$.ajax(settings).done(function (response) {
		var data = new Object();;
		var data =  $.parseJSON( response );
		//alert(data.items[0].id);
		// each section
		for (var i=0;i<data.zipcodes2.length;++i)
		{
			zipcodes2Data.push(data.zipcodes2[i]);
			//alert(data.states[i].id);
		};
		/*
		// each section
		for (var i=0;i<data.locationTyps.length;++i)
		{
			locationTypsData.push(data.locationTyps[i]);
			//alert(data.locationTyps[i].idx);
		};
		// each section
		for (var i=0;i<data.users2.length;++i)
		{
			users2Data.push(data.users2[i]);
			//alert(data.users2[i].idx);
		};
		// 4 each section
		for (var i=0;i<data.spItemsList.length;++i)
		{
			spItemsList.push(data.spItemsList[i]);
			//alert(data.spItemsList[i].idx);
		};
		// 5 each section
		for (var i=0;i<data.packrate.length;++i)
		{
			packRateData.push(data.packrate[i]);
			//alert(data.packrate [i].idx);
		};
		*/
		//alert(data.spItemsList.length);
		
	}).fail(function (jqXHR, textStatus) {
		alert(jqXHR+" "+textStatus);
	});

}
// end new

// Others
var tg = {
	"items": 	
	[
		{ "id": "1001", "type": "Regular1" },
		{ "id": "1002", "type": "Chocolate1" },
		{ "id": "1003", "type": "Blueberry1" },
		{ "id": "1004", "type": "Devil's Food1" }
	]
	,
	
	"batter":
	[
		{ "id": "1001", "type": "Regular2" },
		{ "id": "1002", "type": "Chocolate2" },
		{ "id": "1003", "type": "Blueberry2" },
		{ "id": "1004", "type": "Devil's Food2" }
	]
}

function qTest() {
	alert(tg.items[0].type);
}
