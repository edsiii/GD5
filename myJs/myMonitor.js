// myMonitor.js
// 1000 ms = 1 second.
// 3000 = 3 seconds
// 60000 =  1 minute
//var sm0 = 60000;   // 1 minutes
//var sm1 = 300000;  // 5 minutes
//var sm2 = 1800000; // 30 minutes
//var sm3 = 3600000; // 60 minutes
//appTimers();

var myInt = setInterval(mainSys, 60000);
//setInterval(mainSys1, sm1);
//setInterval(mainSys2, sm2);
//setInterval(mainSys3, sm3);
//alert("X");
//mainSys0();
function mainSys() {
	// 1 minutes
	// get alerts
	
	var dT = new Date();
	//var popupNotification = $("#popupNotification").kendoNotification().data("kendoNotification");
	//popupNotification.show("Help", "info");
	var staticNotification = $("#staticNotification").kendoNotification({
		allowHideAfter: 20000
	}).data("kendoNotification");
	staticNotification.show(" system check ","info");
}
function mainSys1() {
	// 5 minutes
	// get alerts
	
}
function mainSys2() {
	// 30 minutes
	// get alerts
	
}
function mainSys3() {
	// 60 minutes
	// get alerts
	
}
