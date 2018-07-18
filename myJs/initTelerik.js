

function initTelCtrls() {
	
	// win1
	$("#win1").kendoWindow({
		actions:[
					"Pin",
					"Minimize",
					"Maximize",
					"Close"
				],
		top: 200, // or "100px"
		left: "30%",
		width: "800px",
		height: "600px",
		modal: false,
		resizable: false,
		title: "Win 1",
		//content: "./winCode/a.html",
		visible: false,
		activate: onWin1Activate,
		deactivate: onWin1Deactivate,
		refresh: onWin1Refresh,
		resize: onWin1Resize,
		dragstart: onWin1DragStart,
		dragend: onWin1DragEnd,
		close: onWin1Close
	});
	
	var wndWin1 = $("#win1").data("kendoWindow");
	//alert("Status " + wndWin1.element.is(":hidden") ); //returns true or false
	//$("#open1").click(function () {
		//$("#win1").data("kendoWindow").open();
	//});	
	//document.getElementById("win1").innerHTML = "./b.html";

	function onWin1Close() {
		//OK var kendoWindow = $("#win1").data("kendoWindow");
		//OK kendoWindow.content("<p>Hello</p>");
		//$("#win1").data("kendoWindow").refresh({url: './b.html'});
		//alert("All Done");
	}
	
	function onWin1Activate(e) {
		console.log("event :: activate");
	}

	function onWin1Deactivate(e) {
		console.log("event :: deactivate");
	}

	function onWin1Refresh(e) {
		console.log("event :: refresh");
	}

	function onWin1Resize(e) {
		console.log("event :: resize");
	}

	function onWin1DragStart(e) {
		console.log("event :: dragstart");
	}

	function onWin1DragEnd(e) {
		console.log("event :: dragend");
	}

	//$("#win1").data("kendoWindow").open();
	
	// end win1
	
	// win2
	$("#win2").kendoWindow({
		actions:[
					"Pin",
					"Minimize",
					"Maximize",
					"Close"
				],
		top: 200, // or "100px"
		left: "30%",
		width: "800px",
		height: "600px",
		modal: false,
		resizable: false,
		title: "Win 2",
		//content: "./winCode/a.html",
		visible: false,
		activate: onWin2Activate,
		deactivate: onWin2Deactivate,
		refresh: onWin2Refresh,
		resize: onWin2Resize,
		dragstart: onWin2DragStart,
		dragend: onWin2DragEnd,
		close: onWin2Close
	});
	
	var wndWin2 = $("#win2").data("kendoWindow");
	//alert("Status " + wndWin2.element.is(":hidden") ); //returns true or false
	//$("#open1").click(function () {
		//$("#win2").data("kendoWindow").open();
	//});	
	//document.getElementById("win2").innerHTML = "./b.html";

	function onWin2Close() {
		//OK var kendoWindow = $("#win2").data("kendoWindow");
		//OK kendoWindow.content("<p>Hello</p>");
		//$("#win2").data("kendoWindow").refresh({url: './b.html'});
		//alert("All Done");
	}
	
	function onWin2Activate(e) {
		console.log("event :: activate");
	}

	function onWin2Deactivate(e) {
		console.log("event :: deactivate");
	}

	function onWin2Refresh(e) {
		console.log("event :: refresh");
	}

	function onWin2Resize(e) {
		console.log("event :: resize");
	}

	function onWin2DragStart(e) {
		console.log("event :: dragstart");
	}

	function onWin2DragEnd(e) {
		console.log("event :: dragend");
	}

	//$("#win2").data("kendoWindow").open();
	
	// end win2
	
	
	// win3
	$("#win3").kendoWindow({
		actions:[
					"Pin",
					"Minimize",
					"Maximize",
					"Close"
				],
		top: 300, // or "100px"
		left: "20%",
		width: "600px",
		height: "300px",
		modal: false,
		resizable: false,
		title: "Win 3",
		//content: "./winCode/a.html",
		visible: false,
		activate: onWin3Activate,
		deactivate: onWin3Deactivate,
		refresh: onWin3Refresh,
		resize: onWin3Resize,
		dragstart: onWin3DragStart,
		dragend: onWin3DragEnd,
		close: onWin3Close
	});
	
	var wndWin3 = $("#win3").data("kendoWindow");
	//alert("Status " + wndWin3.element.is(":hidden") ); //returns true or false
	//$("#open1").click(function () {
		//$("#win3").data("kendoWindow").open();
	//});	
	//document.getElementById("win3").innerHTML = "./b.html";

	function onWin3Close() {
		//OK var kendoWindow = $("#win3").data("kendoWindow");
		//OK kendoWindow.content("<p>Hello</p>");
		//$("#win3").data("kendoWindow").refresh({url: './b.html'});
		alert("All Done 3");
	}
	
	function onWin3Activate(e) {
		console.log("event :: activate");
	}

	function onWin3Deactivate(e) {
		console.log("event :: deactivate");
	}

	function onWin3Refresh(e) {
		console.log("event :: refresh");
	}

	function onWin3Resize(e) {
		console.log("event :: resize");
	}

	function onWin3DragStart(e) {
		console.log("event :: dragstart");
	}

	function onWin3DragEnd(e) {
		console.log("event :: dragend");
	}

	//$("#win3").data("kendoWindow").open();
	
	// end win3

	
	// win4
	$("#win4").kendoWindow({
		actions:[
					"Pin",
					"Minimize",
					"Maximize",
					"Close"
				],
		top: 200, // or "100px"
		left: "10%",
		width: "800px",
		height: "400px",
		modal: false,
		resizable: false,
		title: "Win 4",
		//content: "./winCode/a.html",
		visible: false,
		activate: onWin4Activate,
		deactivate: onWin4Deactivate,
		refresh: onWin4Refresh,
		resize: onWin4Resize,
		dragstart: onWin4DragStart,
		dragend: onWin4DragEnd,
		close: onWin4Close
	});
	
	var wndWin4 = $("#win4").data("kendoWindow");
	//alert("Status " + wndWin4.element.is(":hidden") ); //returns true or false
	//$("#open1").click(function () {
		//$("#win4").data("kendoWindow").open();
	//});	
	//document.getElementById("win4").innerHTML = "./b.html";

	function onWin4Close() {
		//OK var kendoWindow = $("#win4").data("kendoWindow");
		//OK kendoWindow.content("<p>Hello</p>");
		//$("#win4").data("kendoWindow").refresh({url: './b.html'});
		//alert("All Done");
	}
	
	function onWin4Activate(e) {
		console.log("event :: activate");
	}

	function onWin4Deactivate(e) {
		console.log("event :: deactivate");
	}

	function onWin4Refresh(e) {
		console.log("event :: refresh");
	}

	function onWin4Resize(e) {
		console.log("event :: resize");
	}

	function onWin4DragStart(e) {
		console.log("event :: dragstart");
	}

	function onWin4DragEnd(e) {
		console.log("event :: dragend");
	}

	//$("#win4").data("kendoWindow").open();
	
	// end win4
	//$("#dialogZ").kendoWindow();
	
		

	
	
	// win5
	
	
	// end win5
	
	// base
	/*
	// winX
	$("#win1").kendoWindow({
		actions:[
					"Pin",
					"Minimize",
					"Maximize",
					"Close"
				],
		top: 200, // or "100px"
		left: "30%",
		width: "800px",
		height: "600px",
		modal: false,
		resizable: false,
		title: "Win 1",
		//content: "./winCode/a.html",
		visible: false,
		activate: onWin1Activate,
		deactivate: onWin1Deactivate,
		refresh: onWin1Refresh,
		resize: onWin1Resize,
		dragstart: onWin1DragStart,
		dragend: onWin1DragEnd,
		close: onWin1Close
	});
	
	var wndWin1 = $("#win1").data("kendoWindow");
	//alert("Status " + wndWin1.element.is(":hidden") ); //returns true or false

	//$("#open1").click(function () {
		//$("#win1").data("kendoWindow").open();
	//});
	
	//document.getElementById("win1").innerHTML = "./b.html";

	function onWin1Close() {
		//OK var kendoWindow = $("#win1").data("kendoWindow");
		//OK kendoWindow.content("<p>Hello</p>");
		//$("#win1").data("kendoWindow").refresh({url: './b.html'});
		alert("All Done");
	}
	
	function onWin1Activate(e) {
		console.log("event :: activate");
	}

	function onWin1Deactivate(e) {
		console.log("event :: deactivate");
	}

	function onWin1Refresh(e) {
		console.log("event :: refresh");
	}

	function onWin1Resize(e) {
		console.log("event :: resize");
	}

	function onWin1DragStart(e) {
		console.log("event :: dragstart");
	}

	function onWin1DragEnd(e) {
		console.log("event :: dragend");
	}

	//$("#win1").data("kendoWindow").open();
	
	// end winX
	*/
	// end base
	
	// junk
	/*
	function myFunction1() {
		$("#win1").data("kendoWindow").open();
		//$("#win1").data("kendoWindow").center().open();
	}
	function myFunction2() {
		$("#win1").data("kendoWindow").close();
		alert("Status " + wnd.element.is(":hidden") );
	}
	function myFunction3() {
		//$("#win1").data("kendoWindow").close();
		$("#win1").data("kendoWindow").refresh({url: './b.html'});
	}
	*/
	// end junk
}

/*
// moved to myJob2.js
function showLocMap(jobID,typ,t,l) {
	//alert(+locInfoData[l].gpsLat+" xxx "+locInfoData[l].gpsLon); //l == job2p.idx
		var gStr = "";
		var p1=locInfoData[l].gpsLat;
		var p2=locInfoData[l].gpsLon;
		var p3=locInfoData[l].startAddr1+" "+locInfoData[l].startCity+" "+locInfoData[l].startState+" "+locInfoData[l].startZip;
		var p4=t;

		if ( typ == 2 ) {			
			gStr += winCodePath+"map1.html?"; //"http://localhost/GD/winCode/map1.html?";
			gStr += "&p1="+p1;
			gStr += "&p2="+p2;
			gStr += "&p3="+p3;
			gStr += "&p4="+p4;
			//qStr += "&p5=xx";			
		};
		
		if ( typ == 1 ) {
			gStr += "http://localhost/GD/winCode/map2.html?";
			gStr += "&p1="+franID;
			gStr += "&p2="+jobID;
			gStr += "&p3="+p3;
			gStr += "&p4="+p4;
		};
		
		$("#dialogZ").kendoWindow({
			actions:[
						"Pin",
						"Minimize",
						"Maximize",
						"Close"
					],
			top: 200, // or "100px"
			left: "10%",
			width: "600",
			height: "350px",
			modal: false,
			resizable: true,
			visible: false,
			title: "Job Route Location information",
			  content: gStr
			//content:
			//visible: false
		});
		$("#dialogZ").data("kendoWindow").open();

}
*/