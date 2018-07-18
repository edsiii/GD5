/*
required
dialogTelerik.js
call back function  form window:
window.parent.entryForm1_rt();

load forms in divs:
ex: $("#x711").load(winCodePath+"winCodeMaster.html?uid=EDS&recID=22&franID=GD00KS");

*/
function custList() {
	// lits / grid
	$("#Edit2").load(winCodePath+"customerList.html?uid=EDS&recID=22&franID=GD00KS");
	
}

function jobRouteForm() {
	
	//load forms in divs:
	$("#Edit0").load(winCodePath+"divPageMaster.html?uid=EDS&recID=22&franID=GD00KS");
	// lits / grid
	$("#Edit2").load(winCodePath+"divPageStub2.html?uid=EDS&recID=22&franID=GD00KS");
	// help	
	$("#Edit1").load(winCodePath+"divPageStub3.html?uid=EDS&recID=22&franID=GD00KS");
	// form title
	//document.getElementById("formTitle").innerHTML = "Forms";

}

function callCenter() {
	//load forms in divs:
	$("#Edit0").load(winCodePath+"ccMaster.html?uid=EDS&recID=22&franID=GD00KS");
	
}

function testForm1() {
	
	//load forms in divs:
	$("#Edit0").load(winCodePath+"divPageMaster.html?uid=EDS&recID=22&franID=GD00KS");
	/*
	// list / grid
	$("#Edit2").load(winCodePath+"divPageStub2.html?uid=EDS&recID=22&franID=GD00KS");
	// help	
	$("#Edit1").load(winCodePath+"divPageStub3.html?uid=EDS&recID=22&franID=GD00KS");
	// form title
	//document.getElementById("formTitle").innerHTML = "Forms";
	*/
}

function entryForm1() {
//master
/*
edit content, width and height, title, 
entryForm1_rt function, window name

*/	
//$("#x711").load(winCodePath+"winCodeMaster.html?uid=EDS&recID=22&franID=GD00KS");

	var myWindow = $("#windowLarge");
	if (!myWindow.data('kendoWindow')) {
		myWindow.kendoWindow({
			width: "550px",
			height: "300px",
			draggable: true,
			resizable: false,
			actions: ["Refresh", "Close"],
			title: 'TITLE HERE',
			content: winCodePath+"winCodeMaster.html?uid=EDS&recID=22&franID=GD00KS",
			close: onClose,
			refresh: onRefresh,
			deactivate: onDeactivate,
			open: onOpen
		});
	} else {
        myWindow.data('kendoWindow').open();
		myWindow.data("kendoWindow").center();
		// myWindow.data("kendoWindow").refresh();
    };
	
	function onClose(e) {
		alert("Closing");
	};
	function onOpen(e) {
		alert("Opening");
	};
	function onRefresh(e) {
		//kendoConsole.log("event :: refresh");
	}
	function onDeactivate(e) {
		//kendoConsole.log("event :: refresh");
	}
}
function entryForm1_rt() {
	//alert('main Window function mainTest');
	$("#windowLarge").data("kendoWindow").close();
}

function myWin(x,c,t) {
	var myWindow = $("#windowLarge");
	myWindow.kendoWindow({
		width: "615px",
		height: "600px",
		title: t,
		content: c
		//close: onClose
	});	
}
// end

function doHelp() {
var typ = 0; //0 - no close button, 1 - close button,
// page layout here 
var st = ""
//st += '<form>';
st += '<table width="95%">';

st += '  <tr>';
st += '    	<td width="10%">';
st += '    <label for="inputPassword1" class="col-form-label">Password</label>';
st += '		</td>';
st += '    	<td width="25%">';
st += '      <input type="password1" class="form-control" id="inputPassword" placeholder="Password">';
st += '		</td>';

st += '    <td width="5%"></td>';
st += '    	<td width="10%">';
st += '    <label for="inputPassword2" class="col-form-label">xxxxx</label>';
st += '		</td>';
st += '    	<td width="25%">';
st += '      <input type="password2" class="form-control" id="inputPassword" placeholder="xxxxx">';
st += '		</td>';
st += '  </tr>';

st += '  <tr>';
st += '    	<td width="10%">';
st += '    <label for="inputPassword3" class="col-form-label">Name</label>';
st += '		</td>';
st += '    	<td width="25%">';
st += '      <input type="password3" class="form-control" id="inputPassword" placeholder="Name">';
st += '		</td>';

st += '    <td width="5%"></td>';
st += '    	<td width="10%">';
st += '    <label for="inputPassword4" class="col-form-label">Address</label>';
st += '		</td>';
st += '    	<td width="25%">';
st += '      <input type="password4" class="form-control" id="inputPassword" placeholder="Address">';
st += '		</td>';
st += '  </tr>';



st += '  <tr>';
st += '    <td> &nbsp; </td>';
st += '    <td> &nbsp; </td>';
st += '    <td> &nbsp; </td>';
st += '    <td> &nbsp; </td>';
st += '    <td> &nbsp; </td>';
st += '  </tr>';

st += '  <tr align="right">';
st += '      <td colspan="5"><button type="button" class="btn btn-secondary">New</button> <button type="button" class="btn btn-secondary">Delete</button> <button type="button" class="btn btn-secondary" onclick="javascript:help_closeMe();">Cancel</button> <button type="button" class="btn btn-secondary">Save</button></td>';
st += '  </tr>';

  
st += '</table>';
//st += '</form>';

/*
st += '  <tr>';
st += '    <td></td>';
st += '    <td></td>';
st += '    <td></td>';
st += '    <td></td>';
st += '  </tr>';
*/
//var st = "<p>A new version of <strong>Kendo UI</strong> is available. <button onclick='help_closeMe()'>Click me</button> Would you like to download and install it now?<p>";
//var st = "./help/a1/test.html";

//alert("do Help");


myHelpShow(0,st,'On-Line Training');

//myWin(0,capPath+"a1/index.html",'Demo');
}
