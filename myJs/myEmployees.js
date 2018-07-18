//myEmployees.js
/*
Add to main.html : 
	var currentVehicleData = [];
Call on load complete:
	getAllVehicle('GD00KS','0532');
	--> vehicleUpdate(dataObj,i,mode )
	--> vehicleReturn(data,b)

list onClick:
		getVehicleSelected
		--> vehicleDialogShow(x,'U')
		on save --> javascript:doVehicle(x,1)
		on Delete --> javascript:doVehicle(x,3)
Admin new vehicle onClick --> vehicleNewDialogShow
save onClick --> javascript:doVehicle(0,2)

doVehicle:
case 1:
// update
upDateVehicle(x,franID, '0532');
break;
case 2:
// insert
newVehicle();
break;
case 3:
// delete
deleteVehicle(x,franID, '0532');
break;
		
*/



   function employeeReturn(data,b) {
	   //alert("employeeReturn");
		//var rtDataArray = a;
		var status = b;
		currentEmployeeData = data;
		var t = new Date();
		
		//alert("Look "+ data.length);
		var str1="";
		
		str1 += '<div class="list-group">';
		for (var i=0;i<data.length;++i)
		{
			//str1 += '<div class="list-group">';
				//str1 += '<a href="#" class="list-group-item active">';
				str1 += '<a href="javascript:getEmployeeSelected('+i+');" class="list-group-item">';
					str1 += '<h4 class="list-group-item-heading">'+i+' : '+data[i].fullname+' : <font size="1">'+data[i].eDate+'</font><br/></h4>';
					str1 += '<p class="list-group-item-text">Phone/Cell: '+fixPhoneNumberDisplay(data[i].phone)+' / '+fixPhoneNumberDisplay(data[i].cell)+'<br/>Address: '+data[i].address+' '+data[i].city+' '+data[i].state+' '+data[i].zipcode+'</p>';
				str1 += '</a>';
			//str1 += '</div>';
		};
		str1 += '</div>';


		document.getElementById("emp1").innerHTML = str1;
		document.getElementById("emp1_footer").innerHTML = "<p>"+dateTime1("s")+"</p>";
   }
   
 // NEW
function getEmployeeSelected(x) {
	//get selected data send to dialog
	//alert(currentEmployeeData[x].fullname);
	employeeDialogShow(x,'U');
}
 
// vehicleDialog
function employeeDialogShow(x) {
	// currentEmployeeData
	var str1 = "";
	str1 += '<div id="to-window"> ';
	str1 += '		<table> ';
	str1 += '		  <col span="1" class="wide"> ';
	
	str1 += '			<tr> ';
	//str1 += '			  <td width="10px">#: </td> ';
	str1 += '			  <td><input type="hidden" class="k-textbox" style="width:30px;" name="idx" id="idx" value="'+currentEmployeeData[x].idx+'" disable /></td> ';
	str1 += '			</tr> ';
	
	str1 += '			<tr> ';
	str1 += '			  <td width="100px">First Name: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:150px;" name="firstname" id="firstname" value="'+currentEmployeeData[x].firstname+'" required="required" /></td> ';
	//str1 += '&nbsp;&nbsp;  ';
	str1 += '			  <td width="100px">&nbsp;&nbsp;Last Name: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:150px;" name="lastname" id="lastname" value="'+currentEmployeeData[x].lastname+'" required="required" /></td> ';
	str1 += '			  <td><input type="hidden" class="k-textbox" style="width:30px;" name="fullname" id="fullname" value="'+currentEmployeeData[x].fullname+'" disable /></td> ';
	
	str1 += '			</tr> ';
	
	str1 += '			<tr> ';
	str1 += '			  <td><input type="hidden" class="k-textbox" style="width:30px;" name="stateid" id="stateid" value="'+currentEmployeeData[x].stateid+'" disable /></td> ';

	str1 += '			  <td width="100px">State:</td> ';
	str1 += '				<td><select id="empState" placeholder="Select option..." style="width:60px;" value="'+currentEmployeeData[x].state+'" > ';
	str1 += '						<div id="state1">'+stateOptions+'</div>';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';
	
/*
	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Truck Number: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="trucknumber" id="trucknumber" value="'+currentVehicleData[x].trucknumber+'" required="required" /></td> ';
	str1 += '			</tr> ';	

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Truck Model: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="truckmodel" id="truckmodel" value="'+currentVehicleData[x].truckmodel+'" required="required" /></td> ';
	str1 += '			</tr> ';	


	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Description: </td> ';
	str1 += '			  <td><textarea rows="3" cols="120" class="k-textbox" style="width:300px;" name="description" id="description" required="required"> '+currentVehicleData[x].description+'</textarea></td> ';
	str1 += '			</tr> ';

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Truck Milage: </td> ';
	str1 += '			  <td><input type="number" class="k-textbox" style="width:300px;" name="milage" id="milage" value="'+currentVehicleData[x].milage+'" required="required" /></td> ';
	str1 += '			</tr> ';	

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Maintance Check: </td> ';
	str1 += '			  <td><input type="date" class="k-textbox"  name="lastMaintanceCheck" id="lastMaintanceCheck" style="width:300px;"  required="required" /></td> ';
	str1 += '			</tr> ';	

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Status:</td> ';
	str1 += '				<td><select id="vStatus" placeholder="Select option..." style="width:200px;" value="'+currentVehicleData[x].vStatus+'" > ';
	str1 += '						<option>On Line</option> ';
	str1 += '						<option>Off Line</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';
	
*/
	
				
	str1 += '		</table><br/>';	
	str1 += '		<button id="submit"  class="k-button" onClick="javascript:doEmployee('+x+',1);">Save</button>  ';	
	str1 += '		<button id="submit2" class="k-button" onClick="javascript:doEmployee('+x+',3);" >Delete</button>  ';	
	str1 += '	</div> ';
	str1 +='<span id="undo" style="display:none" class="k-button hide-on-narrow">Click here to open the window.</span>';

	document.getElementById("employeeDialog").innerHTML = str1;
	document.getElementById("empState").selectedIndex = currentEmployeeData[x].stateid; //32;
	
	//var y = document.getElementById("state1").options;
	// set kendo controls here
	//$("#lastMaintanceCheck").kendoDateTimePicker({
		//format: "yyyy-MM-dd HH:mm",
		//value: currentEmployeeData[x].lastMaintanceCheck
	//});
	
	//document.getElementById("state1").innerHTML = stateOptions;
	$("#state1").kendoComboBox({
	});
	
	
	var myWindow = $("#employeeDialog"),
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
			title: "Employee Maintiance Screen",
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
	
}




function doEmployee(x,mode) {
	//alert(currentEmployeeData[x].idx+" "+mode);
	var myWindow = $("#employeeDialog"), undo = $("#undo");
	myVWin = myWindow;	
	myVWin.data("kendoWindow").close();
	undo.fadeOut();
	
	switch(mode) {
		case 1:
		// update
		upDateEmployee(x,franID, '0532');
		break;
		case 2:
		// insert
		newEmployee();
		break;
		case 3:
		// delete
		deleteEmployee(x,franID, '0532');
		break;
		case 9:
		
		break;
	};
}

function upDateEmployee(x,a,b) {
	var mode = 'U';
	var i = 1;
	var fn = document.getElementById("firstname").value + " "+document.getElementById("fullname").value;
	
	var dataObj = {
		'idx':currentEmployeeData[x].idx,      
		'firstname': document.getElementById("firstname").value,
		'lastname': document.getElementById("lastname").value,
		'fullname': fn,
		'phone': document.getElementById("phone").value,
		'cell': document.getElementById("cell").value,
		
		'address': document.getElementById("address").value,
		'city': document.getElementById("city").value,
		'state': document.getElementById("state").value,
		'stateid': document.getElementById("stateid").value,
		'zipcode': document.getElementById("zipcode").value,
		
		//'status': document.getElementById("vStatus").value,
		//'lastMaintanceCheck': document.getElementById("lastMaintanceCheck").value,
	  
		'mode':mode,
		'cid':'0532',
		'franID':'GD00KS'
	};
	employeeUpdate(dataObj,i,mode );
}

function employeeUpdate(dataObj,i,mode) {
	var rtData = [];
    //dataOut = $(this).serialize() + "&" + $.param(dataObj);
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/crud-employee-IU.php", 
		data: dataObj,
		success: function (data) { 
			//alert(data.length);
			//alert("Call Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						rtData.push({
							'idx':data[i].idx,
							'firstname': data[i].firstname,
							'lastname':data[i].lastname,
							'fullname':data[i].fullname,
							'phone':data[i].phone,
							'cell':data[i].cell,
							'address':data[i].address,
							'city':data[i].city,
							'state':data[i].state,
							'stateid':data[i].stateid,
							'zipcode':data[i].zipcode,
							'eDate':data[i].eDate,
							
							//'lastMaintanceCheck':data[i].lastMaintanceCheck,
							'status': 'OK',
						});
					};
					//return rtData;
					employeeReturn(rtData,'OK');
				break;
				case 'ERROR':
					//alert("No records found");
					rtData.push({
						'idx':0,
						'trucknumber':'0',
						'truckname':'0',
						'truckcolor':'0',
						'status': 'ERROR',
					});
					return rtData;// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					rtData.push({
						'idx':0,
						'trucknumber':'0',
						'truckname':'0',
						'truckcolor':'0',
						'status': 'ERROR'
					});
					return rtData;// 0=ok,1-security,2=no records
				break;
				default:
					//alert("XXXXX");
				break;
			};			
		},
		error: function(xhr, textStatus, error) {
			alert(" Crud-employee-IU Error:1 "+textStatus+" "+error);
		}
	});
}

function getAllEmployee(a,b) {
// get all	
	var mode = 'X';
	var i = 1;
	var dataObj = {
		'idx':0,      
		'firstname': '.',
		'lastname': '.',
		'fullname': '.',
		'phone': '.',
		'cell': '.',
		'eDate': '.',
		//'status': '.',
		//'lastMaintanceCheck': '.',
	  
		'mode':'X',
		'cid':'0532',
		'franID':'GD00KS'
	};
	employeeUpdate(dataObj,i,mode );
}