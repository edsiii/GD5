// http://docs.telerik.com/kendo-ui/api/javascript/ui/window

var myEditSchedualWin;

function bsWin1() {
var str1 = '';	
str1 += '	<div id="myModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"> ';
str1 += '  <div class="modal-dialog modal-lg"> ';
str1 += '    <div class="modal-content"> ';
str1 += '      ... ';
str1 += '    </div> ';
str1 += '  </div> ';
str1 += '</div> ';

	
}

function jComWin(title,content,mod) {

	$("#jComWinDialog").kendoWindow({
		actions: [ "Minimize", "Maximize", "Close", "Refresh" ],
        content: "./winCode/"+content,
        title: title,
        height: 200,
        maxHeight: 200,        
        width: 400,
        maxWidth: 400,
        //modal: mod,
        resizable: false,
        scrollable: false,
	  animation: {
		open: true
	  },
	  visible: false
	});

	$("#jComWinDialog").data("kendoWindow").open();

      
}

function myWinXORG(winTitle,content,mode,id, sd, ed) {
	/*
var str1 = "";
str1 += '<div id="window">';
str1 += '	<h4>Armchair 402</h4>';	
str1 +='</div>';
str1 +='<span id="undo" style="display:none" class="k-button hide-on-narrow">Click here to open the window.</span>';
*/

var newMode;
var wTitle;
switch( mode ) {
	case 'U': // update
	newMode = 1;
	wTitle = "Edit";
	break;
	case 'D': // delete
	newMode = 2;
	wTitle = "Delete";
	break;
	case 'I': // insert
	newMode = 3;
	wTitle = "New";
	break;
	case 'E': // insert
	newMode = 1;
	wTitle = "Edit";
	break;
};


//var sd1 = new Date(sd);
//var ed1 = new Date(ed);
	var sd1 = "2017-10-31 13:30";
	var ed1 = "2017-10-31 14:15";
//alert(sd+" idx2: " +sd1);
var str1 = "";
	// str1 += '
	// ';
	
	str1 += '<div id="to-window"> ';			
	str1 += '		<table> ';
	str1 += '		  <col span="1" class="wide"> ';
	str1 += '			<tr> ';
	str1 += '			  <td width="200px">Title: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="calTitle" id="calTitle" required="required" /></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">Start:</td> ';
	str1 += '			  <td><input id="calStartDate" style="width:220px;" value="'+sd1+'" /></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">End:</td> ';
	str1 += '			  <td><input id="calEndDate" style="width:220px;" value="'+ed+'"  /></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">All day event:</td> ';
	str1 += '			  <td><input type="checkbox" name="Accept" required validationMessage="Acceptance is required" /> I accept the terms of service</td> ';
	str1 += '			</tr> ';
				
	str1 += '<tr> ';
	str1 += '			  <td width="150px"><label for="calAllDayYN">All day event:</label></td> ';
	str1 += '				<td><select id="calAllDayYN" placeholder="Select option..." style="width:90px;" > ';
	str1 += '						<option>No</option> ';
	str1 += '						<option>Yes</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px"><label for="calRepeatYN">Repeat:</label></td> ';
	str1 += '				<td><select id="calRepeatYN" placeholder="Select option..." style="width:90px;" > ';
	str1 += '						<option>No</option> ';
	str1 += '						<option>Yes</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';
				
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">Description:</td> ';
	str1 += '			  <td><textarea rows="3" cols="120" class="k-textbox" style="width:300px;" name="calDesc" id="calDesc" required="required"> </textarea></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px"><label for="calOwner">Owner:</label></td> ';
	str1 += '				<td><select id="calOwner" placeholder="Select option..." style="width:90px;" > ';
	str1 += '						<option>No</option> ';
	str1 += '						<option>Yes</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';				
	str1 += '		</table> ';	
	str1 += '		<button id="submit" class="k-button" onclick="saveMe('+id+','+newMode+')">Save</button>  ';
	
	str1 += '		<button id="submit2" class="k-button" onclick="delMe('+id+','+newMode+')">Delete</button>  ';
	
	str1 += '	</div> ';
	str1 +='<span id="undo" style="display:none" class="k-button hide-on-narrow">Click here to open the window.</span>';

//"2017-10-20 13:30";
var d1 = new Date(sd);
	var e1 = new Date(ed);
	//var sd = d1.getFullYear()+"-"+d1.getMonth()+"-"+d1.getDate()+" "+d1.getHours()+":"+d1.getMinutes()+":"+d1.getSeconds();
	//var ed = e1.getFullYear()+"-"+e1.getMonth()+"-"+e1.getDate()+" "+e1.getHours()+":"+e1.getMinutes()+":"+e1.getSeconds();
	
if ( mode == 'U' || mode == 'D') {
	// update and delete
	document.getElementById("dialogX").innerHTML = str1;
	document.getElementById("calDesc").value = calCurrentData[0].description;
	document.getElementById("calTitle").value = calCurrentData[0].title;	
	//document.getElementById("calStartDate").value;
	//document.getElementById("calEndDate").value;
	//document.getElementById("calAllDayYN").value;
	//document.getElementById("calRepeatYN").value;
	//document.getElementById("calDesc").value;
	//document.getElementById("calOwner").value;
	document.getElementById("calTitle").disabled = true;
	document.getElementById("dialogX").innerHTML = str1;
};
if ( mode == 'I' ) {
	// new
	var d1;// = new Date(sd);
	var e1;// = new Date(ed);
	//var sd = d1.getFullYear()+"-"+d1.getMonth()+"-"+d1.getDate()+" "+d1.getHours()+":"+d1.getMinutes()+":"+d1.getSeconds();
	//var ed = e1.getFullYear()+"-"+e1.getMonth()+"-"+e1.getDate()+" "+e1.getHours()+":"+e1.getMinutes()+":"+e1.getSeconds();
	alert(sd+" : "+ ed);
	document.getElementById("dialogX").innerHTML = str1;
	document.getElementById("calDesc").value = content;
	document.getElementById("calTitle").value = winTitle;	
	sd = document.getElementById("calStartDate").value;
	ed = document.getElementById("calEndDate").value;
	//document.getElementById("calAllDayYN").value;
	//document.getElementById("calRepeatYN").value;
	//document.getElementById("calDesc").value;
	//document.getElementById("calOwner").value;
	document.getElementById("calTitle").disabled = false;
};


	
	$("#calStartDate").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm",
		value: new Date()
	});
	$("#calEndDate").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm",
		value:new Date()
	});
	$("#calAllDayYN").kendoComboBox({

	});
	$("#calRepeatYN").kendoComboBox({
	
	});
	$("#calOwner").kendoComboBox({
	
	});
	
    var myWindow = $("#dialogX"),
                        undo = $("#undo");
	myEditSchedualWin = myWindow;

		undo.click(function() {
			myWindow.data("kendoWindow").open();
			undo.fadeOut();
		});

		function onClose() {
			undo.fadeIn();
		}

		myWindow.kendoWindow({
			width: "530px",
			height: "350px",
			title: wTitle,
			visible: false,
			actions: [
				"Pin",
				"Minimize",
				"Maximize",
				"Close"
			],
			close: onClose
		}).data("kendoWindow").center().open();
	

	//alert(str1);

      
}
function saveMe(id,mode) {
	// get the data
	//alert(mode+" id "+id);
	var newMode;
	switch( mode ) {
		case 1: // update
		newMode = 'U';
		break;
		case 2: // delete
		newMode = 'D';
		break;
		case 3: // insert
		newMode = 'I';
		break;
	};
	
	var newTitle 		= document.getElementById("calTitle").value;	
	var newSd 			= document.getElementById("calStartDate").value;
	var newEd 			= document.getElementById("calEndDate").value;
	var newAllDay 		= document.getElementById("calAllDayYN").value;
	var newRepeat 		= document.getElementById("calRepeatYN").value;
	var newDescription 	= document.getElementById("calDesc").value;
	var newOwner 		= document.getElementById("calOwner").value;
	var newTaskId		= 'DESttt';
	var newId			= id;
	
	//var sd = "2017-10-20 13:30";
	//var ed = "2017-10-20 14:15";
	//alert(newDescription + " Look " + document.getElementById("calDesc").value );
	// mode G - select, I - insert, D - delete, U - update
		//alert("Start "+ newSd);
	var g = {'cid': cid, 'mode': newMode, 'franID': franID, 'id': newId, 'description': newDescription,'title': newTitle,'taskId': newTaskId,'startD': newSd, 'endD': newEd }
	//alert(newSd);
	getCalData(showCal,g);
		
	myEditSchedualWin.data("kendoWindow").close();
	undo.fadeOut();	
}
	
function myWin2(title,content,mod) {

    $("#jComWinDialog").kendoWindow({
        actions: [ "Minimize", "Maximize", "Close", "Refresh" ],
        content: "./winCode/"+content,
        title: "Customer details",

        height: 300,
        maxHeight: 600,        
        width: 600,
        maxWidth: 600,
        //modal: mod,
        resizable: false,
        scrollable: false,        

        position: {
            top: 300, // or "100px"
            left: "30%"
          }        
      });

	

      
}
function myWin3(title,content,mod) {
	/*
    $("#winDialog2").kendoWindow({
        actions: [ "Minimize", "Maximize", "Close", "Refresh" ],
        content: "./winCode/"+content,
        title: "Customer details",
        
        height: 500,
        maxHeight: 700,        
        width: 800,
        maxWidth: 900,
        //modal: mod,
        resizable: false,
        scrollable: false,        

        position: {
            top: 300, // or "100px"
            left: "30%"
          }        
      });
      */
}
	
function myWin4(title,content,mod) {
	//var myCapPath = capPath+"a1/index.html";
	var myCapPath = capPath+content;
	//alert(myCapPath);
    $("#capWinDialog").kendoWindow({
        actions: [ "Minimize", "Maximize", "Close", "Refresh" ],
        content: myCapPath,
        title: title,
        height: 670,
        maxHeight: 700,        
        width: 800,
        maxWidth: 900,
        //modal: mod,
        resizable: false,
        scrollable: false,
        position: {
            top: 50, // or "100px"
            left: "10%"
          }        
      });
}

function myMapWin1(title,content,mod) {
 var window = $("#WinDialog4");
 if (!window.data("kendoWindow")) {

    $("#WinDialog4").kendoWindow({
        actions: [ "Minimize", "Maximize", "Close", "Refresh" ],
        content: "http://localhost/GD/winCode/map2.html",
        title: "Location Map Detail View",
        height: 600,
        maxHeight: 600,        
        width: 800,
        maxWidth: 800,
        //modal: mod,
        resizable: false,
        scrollable: false, 

		//open: onOpen,
		//activate: onActivate,

		close: onClose,

		//deactivate: onDeactivate,
		//refresh: onRefresh,
		//resize: onResize,
		//dragstart: onDragStart,
		//dragend: onDragEnd						

        position: {
            top: 100, // or "100px"
            left: "10%"
          }        
    });
	
} else {
	alert("x");
	window.data("kendoWindow").open();
}
	
	function onClose(e) {
		//e.preventDefault();
		//$("#undo").fadeIn();
		//alert(e+"event :: close");
		
		
		var dialog = $("#WinDialog4").data("kendoWindow");
		dialog.destroy();
		
		document.getElementById("WinDialog4").innerHTML = "<p>...</p>";

		//$("#WinDialog4").data("kendoWindow").close();
		
		
		//window.top.location.replace = '@Url.Action("Edit", "Characters")' + '?id=333');
		//window.close();

		
	}

	/*
	function onOpen(e) {
		kendoConsole.log("event :: open");
	}

	function onActivate(e) {
		kendoConsole.log("event :: activate");
	}

	function onDeactivate(e) {
		kendoConsole.log("event :: deactivate");
	}

	function onRefresh(e) {
		kendoConsole.log("event :: refresh");
	}

	function onResize(e) {
		kendoConsole.log("event :: resize");
	}

	function onDragStart(e) {
		kendoConsole.log("event :: dragstart");
	}

	function onDragEnd(e) {
		kendoConsole.log("event :: dragend");
	}
	*/
      
}

function myWin1(d,w,t) {
	
		//$("#calendar").kendoCalendar();

	document.getElementById("win1").style.display = "block";
	/*
	document.getElementById('statebox').style.visibility = 'visible';
	document.getElementById('statebox').style.visibility = 'none';
    */
	
	var window = $("#win1"),
		undo = $("#undo")
				.bind("click", function() {
					window.data("kendoWindow").open();
					undo.hide();
				});

	var onClose = function() {
		undo.show();
	}

	if (!window.data("kendoWindow")) {
		window.kendoWindow({
			width: w,
			height: "215px",
			title: t,
			 //visible: false,
			 close: win1onClose,
			//content: "../content/web/window/ajax/ajaxContent.html",
			
			actions: [
				"Pin",
				"Minimize",
				"Maximize",
				"Close"
			]
			//,
			//close: onClose
		});
	}
	/*
	 $("#open").click(function (e) {
                        myWindow.data("kendoWindow").open();
                        myWindow.data("kendoWindow").close();
                        myWindow.data("kendoWindow").refresh();
                        myWindow.data("kendoWindow").center();
                    });
					
		<script>
                function onOpen(e) {
                    kendoConsole.log("event :: open");
                }

                function onClose(e) {
                    $("#undo").fadeIn();
                    kendoConsole.log("event :: close");
                }

                function onActivate(e) {
                    kendoConsole.log("event :: activate");
                }

                function onDeactivate(e) {
                    kendoConsole.log("event :: deactivate");
                }

                function onRefresh(e) {
                    kendoConsole.log("event :: refresh");
                }

                function onResize(e) {
                    kendoConsole.log("event :: resize");
                }

                function onDragStart(e) {
                    kendoConsole.log("event :: dragstart");
                }

                function onDragEnd(e) {
                    kendoConsole.log("event :: dragend");
                }

                $("#undo").click(function () {
                    $("#window").data("kendoWindow").open();
                    $("#undo").fadeOut();
                });

                $(document).ready(function() {
                    $("#window").kendoWindow({
                        width: "630px",
                        height: "315px",
                        title: "Rams's Ten Principles of Good Design",
                        actions: ["Refresh", "Close"],
                        content: "../content/web/window/ajax/ajaxContent1.html",
                        visible: false,

                        open: onOpen,
                        activate: onActivate,
                        close: onClose,
                        deactivate: onDeactivate,

                        refresh: onRefresh,

                        resize: onResize,
                        dragstart: onDragStart,
                        dragend: onDragEnd
                    }).data("kendoWindow").open();
                });
            </script>
	*/
	document.getElementById("win1Content").innerHTML= d; //"someContent"; 
	
	var win1onClose = function(e) {
		$("#undo").fadeIn();
		kendoConsole.log("event :: close");
		alert("Closed");
	}
}