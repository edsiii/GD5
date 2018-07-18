

var map, map2;
var markers = [];
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

// url vars
//alert(parmArray[2].id);
if ( parmArray.length >= 2 ) {
	switch(parmArray[2].id) {
		case "jobRoute":
			//var jobRouteMode = parmArray[2].id;
			//var jobRouteID = parmArray[2].val;
			//setUp_jobroute(jobRouteID,jobRouteMode);
			//jobRouteForm();
		break;
	};
};

setUp();

function setUp() {
	//document.getElementById("usrName").innerHTML  =  '<font size="1" color="white">'+cUserName+'</font>';
	document.getElementById("Edit0").innerHTML =  '<font size="1" color="white">'+cUserName+'</font>';


	
	//chatUsers();
	mssgList();
	//appAlerts();
	get_alertData();
	showTasks();
	getCalData();
}

function cc_jobGrid() {
	
}





// document.getElementById("mySelect").selectedIndex = "2";
// document.getElementById("mySelect").selectedIndex = "-1";
//document.getElementById("mySelect").addEventListener("change", myFunction);
//function myFunction() {
    //var x = document.getElementById("mySelect");
    //x.value = x.value.toUpperCase();
//}


