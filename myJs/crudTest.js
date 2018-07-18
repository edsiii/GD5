


function testWin2(typ,idx,xDataObject) {
	// typ - Edit - save,I-insert,D-delete, idx, data
	/*
	testWin1('E',5,xDataObject);// set all fields using xDataObject
	testWin1('I',0,xDataObject);// set default fields using xDataObject fields only
	testWin1('D',5,xDataObject);// show only key fields only
	
	*/
	var x = 'SAVE';
	var x2 = "DELETE";
	var x3 = "INSERT";
	var x4 = "CANCEL";
	var z = 1;
	
	var dataTitle = "Demo Record";
	var dialogTitle;
	var str1 = "";
	str1 += '<div id="to-window"> ';
	
		str1 += '<div style="height:100%;"> ';
			
			str1 += '		<ul class="nav nav-tabs"> ';
			str1 += '		  <li class="active"><a data-toggle="tab" href="#menu1a">AAAAAA</a></li> ';
			str1 += '		  <li><a data-toggle="tab" href="#menu2a">BBBBB</a></li> ';
			str1 += '		</ul> ';
					
			str1 += '<div class="tab-content" style="height:200px;"> ';			

				str1 += '<div id="menu1a" class="tab-pane fade in active" style="width: 90%;"> ';					
				str1 += '<br/> ';
					
				// page layout fields edit
				if ( typ == 'E' ) {
					dialogTitle = "Edit "+dataTitle;
					str1 += '<table> ';
						str1 += '		  <col span="1" class="wide"> ';
						str1 += '			<tr> ';
						
						str1 += '			  <td><input type="hidden" class="k-textbox" style="width:60px;" name="idx" id="idx" value="'+testTblData[idx].idx+'" disabled required="required" /></td> ';
						str1 += '</tr><br/><tr>';
						
						str1 += '			  <td width="100px">Field A: </td> ';
						str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="fldA" id="fldA" value="'+testTblData[idx].fldA+'" required="required" /></td> ';
						str1 += '</tr><tr>';			
						str1 += '			  <td width="100px">Field B: </td> ';
						str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="fldB" id="fldB" value="'+testTblData[idx].fldB+'" required="required" /></td> ';
									
						str1 += '			</tr> ';
					str1 += '</table>';					
				};
				
				// page layout fields new/insert
				if ( typ == 'I' ) {
					dialogTitle = "New "+dataTitle;
					str1 += '<table> ';
						str1 += '		  <col span="1" class="wide"> ';
						str1 += '			<tr> ';
						
						str1 += '			  <td><input type="text" class="k-textbox" style="width:60px;" name="idx" id="idx" value="0" disabled required="required" /></td> ';
						str1 += '</tr><br/><tr>';
						
						str1 += '			  <td width="100px">Label: </td> ';
						str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="fldA" id="fldA" value="" required="required" /></td> ';
						str1 += '			</tr> ';
					str1 += '</table>';					
				};
				
				// page layout fields new/insert
				if ( typ == 'D' ) {
					dialogTitle = "Delete "+dataTitle;
					str1 += '<table> ';
						str1 += '		  <col span="1" class="wide"> ';
						str1 += '			<tr> ';
						
						str1 += '			  <td><input type="text" class="k-textbox" style="width:60px;" name="idx" id="idx" value="'+testTblData[idx].idx+'" disabled required="required" /></td> ';
						str1 += '</tr><br/><tr>';
						
						str1 += '			  <td width="100px">Label: </td> ';
						str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="fldA" id="fldA" value="'+testTblData[idx].fldA+'" disable /></td> ';
						str1 += '			</tr> ';
					str1 += '</table>';					
				};

				// buttons
				str1 += '<br/><br/>';
				str1 += '<div align="right" id="btnBlck" >';
				if ( typ == 'E' ) {
					// save/update delete
					str1 += '		<button id="submit" class="k-button" onClick="javascript:do_X(\''+x+'\','+idx+');">Save</button>  ';	
					str1 += '		<button id="submit2" class="k-button" onClick="javascript:do_X(\''+x2+'\','+idx+');" >Delete</button>  ';
					str1 += '		<button id="submit3" class="k-button" onClick="javascript:do_X(\''+x4+'\',9);" >Cancel</button>  ';			
				};
				
				if ( typ == 'I' ) {
					// save/insert cancel
					str1 += '		<button id="submit" class="k-button" onClick="javascript:do_X(\''+x3+'\',0);">Save</button>  ';	
					str1 += '		<button id="submit3" class="k-button" onClick="javascript:do_X(\''+x4+'\',9);" >Cancel</button>  ';	
				};				
				
				if ( typ == 'D' ) {
					// delete cancel
					str1 += '		<button id="submit" class="k-button" onClick="javascript:do_X(\''+x3+'\','+idx+');">Delete</button>  ';	
					str1 += '		<button id="submit3" class="k-button" onClick="javascript:do_X(\''+x4+'\',9);" >Cancel</button>  ';	
				};
				
				str1 += '</div>';
				str1 += '<br/><br/>';
				str1 += '<div align="center" id="univDialog_1_Msg" >message</div>';
				// end button and dialog message

				str1 +='<span id="undo" style="display:none" class="k-button hide-on-narrow">Click here to open the window.</span>';
				str1 += '</div> ';	
				
				// end menu1
				
			
				str1 += '<div id="menu2a" class="tab-pane fade in active" style="width: 90%;"> ';
					str1 += '<br/> ';
					str1 += '<p>TWO</p> ';	
				str1 += '</div> ';
				
				
			
			str1 += '</div> ';// tab content
		str1 += '</div> ';
	str1 += '</div> ';
	
	document.getElementById("univDialog_1").innerHTML = str1;
	
	// init kendo controls here
	/*
	$("#lastMaintanceCheck").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value: currentVehicleData[x].lastMaintanceCheck
	});
	$("#vStatus").kendoComboBox({

	});
	*/
	$("#fldB").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value: currentVehicleData[x].lastMaintanceCheck
	});
	
	var myWindow = $("#univDialog_1"),
                        undo = $("#undo");
	//myEditSchedualWin = myWindow;

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
			title: dialogTitle,
			visible: true,
			modal: true,
			actions: [
				//"Pin",
				//"Minimize",
				//"Maximize",
				"Close"
			],
			close: onClose
		}).data("kendoWindow").center().open();
		
		$('.nav-tabs a').on('shown.bs.tab', function(event){
		var x = $(event.target).text();         // active tab
		var y = $(event.relatedTarget).text();  // previous tab
		
		// active tab
		switch(x) {
			case "News and Information":
				//showCal("2017/10/10"); //(calDte)
				//GetLocation("5617 shady meadows dr Hamilton oh 45011 usa");
				//alert("Me "+ selectedGPS );
			break;
			case "Job Board":
				//showCal("2017/10/10"); //(calDte)
			break;
			
			case "Menu 2":
			//var str1 = '<p>Hello</p>';
				 //myWinX("Job 32 - Bill Winters","Thi is a test","I",0);// send data to window
			break;
			// 6 
			case "Job Performance":
				//createChartX();
				//createChartY();
				//alert("cc");
			break;
			case "Calendars":
				//$("#scheduler").data("kendoScheduler").refresh();	
				//$('#scheduler').data('kendoScheduler').dataSource.read();				
			break;
			case "Job Maps":
				//initMap1();
			break;
		};
		
		/*
		// previous tab
		switch(y) {
			case "News and Information":
				//showCal("2017/10/10"); //(calDte)
			break;
			case "Job Board":
				//showCal("2017/10/10"); //(calDte)
			break;
			
			// 6 
			case "Calendars":
				//showCal("2017/10/10"); //(calDte)
			break;
			case "Job Maps":
				//initMap1();
			break;
		};
		*/
		//alert(x);
	});

}

function testWin1(typ,idx,xDataObject) {
	// typ - Edit - save,I-insert,D-delete, idx, data
	/*
	testWin1('E',5,xDataObject);// set all fields using xDataObject
	testWin1('I',0,xDataObject);// set default fields using xDataObject fields only
	testWin1('D',5,xDataObject);// show only key fields only
	
	*/
	var x = 'SAVE';
	var x2 = "DELETE";
	var x3 = "INSERT";
	var x4 = "CANCEL";
	var z = 1;
	
	var dataTitle = "Demo Record";
	var dialogTitle;
	var str1 = "";
	str1 += '<div id="to-window"> ';
		
	
	// page layout fields edit
	if ( typ == 'E' ) {
		dialogTitle = "Edit "+dataTitle;
		str1 += '<table> ';
			str1 += '		  <col span="1" class="wide"> ';
			str1 += '			<tr> ';
			
			str1 += '			  <td><input type="hidden" class="k-textbox" style="width:60px;" name="idx" id="idx" value="'+testTblData[idx].idx+'" disabled required="required" /></td> ';
			str1 += '</tr><br/><tr>';
			
			str1 += '			  <td width="100px">Field A: </td> ';
			str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="fldA" id="fldA" value="'+testTblData[idx].fldA+'" required="required" /></td> ';
			str1 += '</tr><tr>';			
			str1 += '			  <td width="100px">Field B: </td> ';
			str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="fldB" id="fldB" value="'+testTblData[idx].fldB+'" required="required" /></td> ';
						
			str1 += '			</tr> ';
		str1 += '</table>';
		
	};
	
	// page layout fields new/insert
	if ( typ == 'I' ) {
		dialogTitle = "New "+dataTitle;
		str1 += '<table> ';
			str1 += '		  <col span="1" class="wide"> ';
			str1 += '			<tr> ';
			
			str1 += '			  <td><input type="text" class="k-textbox" style="width:60px;" name="idx" id="idx" value="0" disabled required="required" /></td> ';
			str1 += '</tr><br/><tr>';
			
			str1 += '			  <td width="100px">Label: </td> ';
			str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="fldA" id="fldA" value="" required="required" /></td> ';
			str1 += '			</tr> ';
		str1 += '</table>';
		
	};
	
	// page layout fields new/insert
	if ( typ == 'D' ) {
		dialogTitle = "Delete "+dataTitle;
		str1 += '<table> ';
			str1 += '		  <col span="1" class="wide"> ';
			str1 += '			<tr> ';
			
			str1 += '			  <td><input type="text" class="k-textbox" style="width:60px;" name="idx" id="idx" value="'+testTblData[idx].idx+'" disabled required="required" /></td> ';
			str1 += '</tr><br/><tr>';
			
			str1 += '			  <td width="100px">Label: </td> ';
			str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="fldA" id="fldA" value="'+testTblData[idx].fldA+'" disable /></td> ';
			str1 += '			</tr> ';
		str1 += '</table>';
		
	};

	// buttons
	str1 += '<br/><br/>';
	str1 += '<div align="right" id="btnBlck" >';
	if ( typ == 'E' ) {
		// save/update delete
		str1 += '		<button id="submit" class="k-button" onClick="javascript:do_X(\''+x+'\','+idx+');">Save</button>  ';	
		str1 += '		<button id="submit2" class="k-button" onClick="javascript:do_X(\''+x2+'\','+idx+');" >Delete</button>  ';
		str1 += '		<button id="submit3" class="k-button" onClick="javascript:do_X(\''+x4+'\',9);" >Cancel</button>  ';			
	};
	
	if ( typ == 'I' ) {
		// save/insert cancel
		str1 += '		<button id="submit" class="k-button" onClick="javascript:do_X(\''+x3+'\',0);">Save</button>  ';	
		str1 += '		<button id="submit3" class="k-button" onClick="javascript:do_X(\''+x4+'\',9);" >Cancel</button>  ';	
	};
	
	
	if ( typ == 'D' ) {
		// delete cancel
		str1 += '		<button id="submit" class="k-button" onClick="javascript:do_X(\''+x3+'\','+idx+');">Delete</button>  ';	
		str1 += '		<button id="submit3" class="k-button" onClick="javascript:do_X(\''+x4+'\',9);" >Cancel</button>  ';	
	};
	str1 += '</div>';
	str1 += '<br/><br/>';
	str1 += '<div align="center" id="univDialog_1_Msg" >message</div>';
	// end button and dialog message
	
	str1 += '</div> ';
	str1 +='<span id="undo" style="display:none" class="k-button hide-on-narrow">Click here to open the window.</span>';

	

	
	
	
	document.getElementById("univDialog_1").innerHTML = str1;
	
	// init kendo controls here
	/*
	$("#fldB").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value: currentVehicleData[x].lastMaintanceCheck
	});
	$("#vStatus").kendoComboBox({

	});
	*/
	
	$("#fldB").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value: currentVehicleData[x].lastMaintanceCheck
	});
	
	var myWindow = $("#univDialog_1"),
                        undo = $("#undo");
	//myEditSchedualWin = myWindow;

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
			title: dialogTitle,
			visible: true,
			modal: true,
			actions: [
				//"Pin",
				//"Minimize",
				//"Maximize",
				"Close"
			],
			close: onClose
		}).data("kendoWindow").center().open();
		
		$('.nav-tabs a').on('shown.bs.tab', function(event){
		var x = $(event.target).text();         // active tab
		var y = $(event.relatedTarget).text();  // previous tab
		
		// active tab
		switch(x) {
			case "News and Information":
				//showCal("2017/10/10"); //(calDte)
				//GetLocation("5617 shady meadows dr Hamilton oh 45011 usa");
				//alert("Me "+ selectedGPS );
			break;
			case "Job Board":
				//showCal("2017/10/10"); //(calDte)
			break;
			
			case "Menu 2":
			//var str1 = '<p>Hello</p>';
				 //myWinX("Job 32 - Bill Winters","Thi is a test","I",0);// send data to window
			break;
			// 6 
			case "Job Performance":
				//createChartX();
				//createChartY();
				//alert("cc");
			break;
			case "Calendars":
				//$("#scheduler").data("kendoScheduler").refresh();	
				//$('#scheduler').data('kendoScheduler').dataSource.read();				
			break;
			case "Job Maps":
				//initMap1();
			break;
		};
		
		/*
		// previous tab
		switch(y) {
			case "News and Information":
				//showCal("2017/10/10"); //(calDte)
			break;
			case "Job Board":
				//showCal("2017/10/10"); //(calDte)
			break;
			
			// 6 
			case "Calendars":
				//showCal("2017/10/10"); //(calDte)
			break;
			case "Job Maps":
				//initMap1();
			break;
		};
		*/
		//alert(x);
	});

}

function do_X_load() {
	// init display div
	var dataObj = {
		'idx':0,      
		'fldA': null,
		'fldB': null,

	  
		'mode':"X",
		'cid':'0532',
		'franID':'GD00KS'
	};
	
	do_X_DB(dataObj,0,"X");
}

function do_X(mode,x) {
	//alert(x+" "+mode);
	//get field data
	var x = document.getElementById("idx").value;
	var jsonMode;
	switch(mode){
		case 'SAVE':
		jsonMode = 'U';
		break;
		case "DELETE":
		// delete
		jsonMode = 'D';
		break;
		case "INSERT":
		// insert save
		jsonMode = 'I';
		break;
	};
	
	var dataObj = {
		'idx': x,      
		'fldA': document.getElementById("fldA").value,
		'fldB': document.getElementById("fldB").value,

	  
		'mode':jsonMode,
		'cid':'0532',
		'franID':'GD00KS'
	};
	
	//do_X_DB(dataObj,x,jsonMode );
	
	// close window
	var myWindow = $("#univDialog_1"), undo = $("#undo");
	myVWin = myWindow;	
	myVWin.data("kendoWindow").close();
	undo.fadeOut();
	// end close window
	
	// check button function call params
	// do some work
	switch(mode) {
		case 'SAVE':
		// save update
		//alert(x+" save / update "+mode);
		do_X_DB(dataObj,x,jsonMode );
		break;
		case "DELETE":
		// delete
		alert(x+" delete / update "+mode);
		break;
		case "INSERT":
		// insert save
		alert(x+" save / insert new "+mode);
		break;
		case "CANCEL":
		// cancel
		alert(x+" cancel "+mode);
		break;
		case 9:
		
		break;
	};
}


function do_X_DB(dataObj,i,mode) {
	var theDiv = document.getElementById("testDiv1").id;
	var theDivFooter = "XXXXXX";
    //dataOut = $(this).serialize() + "&" + $.param(dataObj);
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/curdTest.php", 
		data: dataObj,
		success: function (data) { 
			//alert(data.length);
			//alert("Call Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data					
					// load content
					var t = new Date();
					//var status = b;
					testTblData = data;// add global
					var str1="";
					// div to load data in
					document.getElementById(theDiv).innerHTML = "<div class='list-group'>loading....</div>";
					
					str1 += '<div class="list-group">';
					for (var i=0;i<data.length;++i)
					{
						str1 += '<a href="javascript:testDiv1_Selected('+i+');" class="list-group-item">';
							str1 += '<h4 class="list-group-item-heading">'+i+' fldA : '+data[i].fldA+' : <font size="1">'+data[i].fldB+'</font><br/></h4>';
							str1 += '<p class="list-group-item-text">Truck Name : '+data[i].fldA+' Model: '+data[i].fldA+'<br/>';
							str1 += 'Description: '+data[i].fldB+' <br/> Status: '+data[i].fldA;
						str1 += '</p>';
						str1 += '</a>';
					};
					str1 += '</div>';
					document.getElementById(theDiv).innerHTML = str1;
					//document.getElementById(theDivFooter).innerHTML = "<p>"+dateTime1("s")+"</p>";					
				break;
				case 'ERROR':
					//alert("No records found");
					str1 += '<div class="list-group">';
						str1 += '<a href="#" class="list-group-item">';
							str1 += '<h4 class="list-group-item-heading">No records : <br/></h4>';
							str1 += '<p class="list-group-item-text">Truck Name : <br/></p>';
						str1 += '</a>';
					str1 += '</div>';
					document.getElementById(theDiv).innerHTML = str1;
					document.getElementById(theDivFooter).innerHTML = "<p>"+dateTime1("s")+"</p>";
				break;
				case 'SECURITY ERROR':
					str1 += '<div class="list-group">';
						str1 += '<a href="#" class="list-group-item">';
							str1 += '<h4 class="list-group-item-heading">Security Error : <br/></h4>';
							str1 += '<p class="list-group-item-text">Truck Name : <br/></p>';
						str1 += '</a>';
					str1 += '</div>';
					document.getElementById(theDiv).innerHTML = str1;
					document.getElementById(theDivFooter).innerHTML = "<p>"+dateTime1("s")+"</p>";
				break;
				default:
					//alert("XXXXX");
				break;
			};			
		},
		error: function(xhr, textStatus, error) {
			alert(" xxx-IU Error:1 "+textStatus+" "+error);
		}
	});
}
 
 // edit
function testDiv1_Selected(x) {
	//alert(x+" "+testTblData[x].fldA);
	testWin1("E",x,testTblData[x]);
}