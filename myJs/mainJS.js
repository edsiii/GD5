
   function setDT() {
		//alert("Called");
		//setTab1();
		var currentdate = new Date();
        $("#appendto").html("<p>&nbsp;"+ dateTime1('s') +"&nbsp;&nbsp;</p>");
		//console.log("XXXXX " + dateTime1('s'));
		//initMap1();
        //miniCal1();		
		//jsonAllActiveUsers2(fu,'GD00KS','0532');		
        //myNotifi1(x+" Welcome ","info
		//'Active,'+a[0].userID+','+a[0].franID+','+a[0].FirstName+" "+a[0].LastName+',0'
		//mainBar(cookieData[2],cookieData[3],'Ready');
		//setTab1();
		//jobs1Menu();
		

   }
   
   
function jobs1Menu() {
	var str1 = '';
	str1 += '             <ul id="jobsmenu" > ';

str1 += '                 <li> ';
str1 += '                     Job Details and Actions ';
str1 += '                     <ul> ';
str1 += '                         <li> ';
str1 += '                             Jobs Schedualed ';
str1 += '                             <ul> ';
str1 += '                                 <li>Todays Jobs</li> ';
str1 += '                                 <li>Tomorrows</li> ';
str1 += '                                 <li>This week</li> ';
str1 += '                                <li>Next Week</li> ';
str1 += '                                 <li>This Month</li> ';
str1 += '                             </ul> ';
str1 += '                         </li> ';
	str1 += '                         <li> ';
	str1 += '                             Current Jobs ';
	str1 += '                            <ul> ';
	str1 += '                                 <li>Status</li> ';
	str1 += '                                 <li>Today Map</li> ';
	str1 += '                                 <li>Crew and Customers</li> ';
	str1 += '                                 <li>Routes</li> ';
	str1 += '                                 <li>Special Items</li> ';
	str1 += '                             </ul> ';
	str1 += '                         </li> ';

	str1 += '                         <li> ';
	str1 += '                             Storage ';
	str1 += '                             <ul> ';
	str1 += '                                 <li>Wall Shelving</li> ';
	str1 += '                                 <li>Kids Storage</li> ';
	str1 += '                                 <li>Baskets</li> ';
	str1 += '                                 <li>Multimedia Storage</li> ';
	str1 += '                                 <li>Floor Shelving</li> ';
	str1 += '                                 <li>Toilet Roll Holders</li> ';
	str1 += '                                 <li>Storage Jars</li> ';
	str1 += '                                 <li>Drawers</li> ';
	str1 += '                                 <li>Boxes</li> ';
   str1 += '<li><a href="javascript: mkMarkers();">marker</a></li> ';
   str1 += '<li><a href="javascript: mkMarkersGroup();">marker2X</a></li> ';
   str1 += '<li><a href="javascript: dodo2();">marker2</a></li> ';
							   
	str1 += '                             </ul> ';
	str1 += '                         </li> ';
str1 += '                         <li> ';
str1 += '                             Lights ';
str1 += '                             <ul> ';
str1 += '                                 <li>Ceiling</li> ';
str1 += '                                 <li>Table</li> ';
str1 += '                                 <li>Floor</li> ';
str1 += '                                 <li>Shades</li> ';
str1 += '                                 <li>Wall Lights</li> ';
str1 += '                                 <li>Spotlights</li> ';
str1 += '                                 <li>Push Light</li> ';
str1 += '                                 <li>String Lights</li> ';
str1 += '                             </ul> ';
str1 += '                         </li> ';
str1 += '                     </ul> ';
str1 += '                 </li> ';
/*
str1 += '                 <li> ';
str1 += '                     Stores ';
str1 += '                     <ul> ';
str1 += '                         <li> ';
str1 += '                             <div id="template" style="padding: 10px;"> ';
str1 += '                                 <h2>Around the Globe</h2> ';
str1 += '                                 <ol> ';
str1 += '                                     <li>United States</li> ';
str1 += '                                     <li>Europe</li> ';
str1 += '                                     <li>Canada</li> ';
str1 += '                                     <li>Austr1lia</li> ';
str1 += '                                 </ol> ';
str1 += '                                 <img src="./content/web/menu/map.png" alt="Stores Around the Globe" /> ';
str1 += '                                 <button class="k-button">See full list</button> ';
str1 += '                             </div> ';
str1 += '                         </li> ';
str1 += '                     </ul> ';
str1 += '                 </li> ';
*/

/*
str1 += '                <li> ';
str1 += '                     Blog ';
str1 += '                 </li> ';

str1 += '                 <li> ';
str1 += '                     Company ';
str1 += '                 </li> ';

str1 += '                 <li> ';
str1 += '                     Events ';
str1 += '                 </li> ';

str1 += '                 <li disabled="disabled"> ';
str1 += '                     News ';
str1 += '                 </li> ';
*/

str1 += '             </ul> ';
//str1 += '         </div> ';
str1 += '         <style> ';
str1 += '             #megaStore { ';
str1 += '                 max-width: 600px; ';
str1 += '                 margin: 30px auto; ';
str1 += '                 padding-top: 120px; ';
str1 += '                 background: url("/content/web/menu/header.jpg") no-repeat center 0; ';
str1 += '             } ';
str1 += '             #menu h2 { ';
str1 += '                 font-size: 1em; ';
str1 += '                 text-transform: uppercase; ';
str1 += '                 padding: 5px 10px; ';
str1 += '             } ';
str1 += '             #template img { ';
str1 += '                 margin: 5px 20px 0 0; ';
str1 += '                 float: left; ';
str1 += '             } ';
str1 += '             #template { ';
str1 += '                 width: 380px; ';
str1 += '             } ';
str1 += '             #template ol { ';
str1 += '                 float: left; ';
str1 += '                 margin: 0 0 0 30px; ';
str1 += '                 padding: 10px 10px 0 10px; ';
str1 += '             } ';
str1 += '             #template:after { ';
str1 += '                 content: "."; ';
str1 += '                 display: block; ';
str1 += '                 height: 0; ';
str1 += '                 clear: both; ';
str1 += '                 visibility: hidden; ';
str1 += '             } ';
str1 += '             #template .k-button { ';
str1 += '                 float: left; ';
str1 += '                 clear: left; ';
str1 += '                 margin: 5px 0 5px 12px; ';
str1 += '             } ';
str1 += '         </style> <br/>';

	document.getElementById("jobs1menu").innerHTML = str1;
	$("#jobsmenu").kendoMenu({
		//select: onSelect_jobmenu,
		//open: onOpen_jobmenu,
        //close: onClose_jobmenu,
        //activate: onActivate_jobmenu,
        //deactivate: onDeactivate_jobmenu
	});
}

   
   
   
	// calles by getJob1
	function job1Return(a,b,data) {
		var str1 = "";		
	
		str1 += '<table id="mainGrid"> ';
        str1 += '        <colgroup> ';
        str1 += '            <col style="width:10px" /> ';
        str1 += '            <col style="width:15px" /> ';
        str1 += '            <col style="width:20px" /> ';
        str1 += '            <col style="width:20px" /> ';
        str1 += '            <col style="width:100px" /> ';
		str1 += '            <col style="width:20px" /> ';
        str1 += '        </colgroup> ';
        str1 += '        <thead> ';
        str1 += '            <tr> ';
        str1 += '                <th data-field="idx">#</th> ';
        str1 += '                <th data-field="clientID">client ID</th> ';
        str1 += '                <th data-field="FirstName">First Name</th> ';
        str1 += '                <th data-field="LastName">Last Name</th> ';
        str1 += '                <th data-field="addr1">Address</th> ';
		str1 += '                <th data-field="phone1">Cell Phone</th> ';
        str1 += '            </tr> ';
        str1 += '        </thead> ';
        str1 += '        <tbody> ';
				
		// loop
		for (var i=0;i<data.length;++i)
		{
			str1 += '<tr> ';
				str1 += '        <td>'+data[i].idx+'</td> ';
				str1 += '        <td>'+data[i].clientID+'</td> ';
				str1 += '        <td>'+data[i].FirstName+'</td> ';
				str1 += '        <td>'+data[i].LastName+'</td> ';
				str1 += '        <td>'+data[i].addr1+'</td> ';
				str1 += '        <td>'+fixPhoneNumberDisplay(data[i].phone1)+'</td> ';
			str1 += '</tr> ';
		};

		str1 += '        </tbody> ';
        str1 += '            </table></br> ';
		
		document.getElementById("exp1A").innerHTML = str1;
		
		$(document).ready(function() {
			$("#mainGrid").kendoGrid({
				height: 220,
				change: onChangeGetQueryMaster,
				selectable: "row",
				sortable: true
			});
		});
   }

   function openWin1(){
       alert("Ready")
       //$("#window").data("kendoWindow").open();
       
       //$("#undo").fadeOut();	
       //myWindow.data("kendoWindow").open();
       $('#dialog').modal('show');
   
       //myDialog.data("kendoDialog").open();
   }
   
   function fu(a,b,x) {
		currentUserData = x;
		//alert(currentUserData[0].userID+" cccccc "+a[0].userID);
		//dataTbl1(a);
		//mainG3(a);	
	}

	// mainGrid
	function getQueryMasterReturn(a,b,data) {
		//alert("getQueryMasterReturn");
		var rtDataArray = a;
		var status = b;
		var rtJasonData = data;
		
		var sharedDataSource = new kendo.data.DataSource({  
		data: data
		});	
		
		var gridT = $("#mainGrid").kendoGrid({
		change: onChangeGetQueryMaster,
		selectable: "row",
		dataSource: sharedDataSource,
		height: "220px", 
		sortable: true,
		columns: [
			{
				field: "idx",
				title: "idx",
				width: "5px",
			},
			{   field: "userID",
				title: "userID",
				width: "10px",
				//hidden: true,
			},
			{   field: "FirstName",
				title: "First Name",
				style: "text-align:right",
				width: "30px",
				//type: 'date',
				//template: '#= kendo.toString(CreatedDate,"MM/dd/yyyy") #'
			},
			{   field: "LastName",
				title: "Last Name",
				style: "text-align:right",
				width: "30px",
				//type: 'date',
				//template: '#= kendo.toString(CreatedDate,"MM/dd/yyyy") #'
			},
			{   field: "phone1",
				title: "Call Phone",
				width: "10px",
				//hidden: true,
			},
		]
	});
	// end data grid
		
	}
	function onChangeGetQueryMaster(arg) {
		var grid = $("#mainGrid").data("kendoGrid");        
		var dataRows = grid.items();
		var rowIndex = dataRows.index(grid.select());
		var selectedItem = grid.dataItem(grid.select());
		//accessing selected rows data 
		//alert(rowIndex+" "+selectedItem.FirstName);
		jobLocDetails(selectedItem.id);
		jobCrewDetails(selectedItem.id);
		jobLocDetails(selectedItem.id);
		cJobNo = selectedItem.id;
		//myWinX("TITLE-HERE",rowIndex,"U",0,selectedItem.moveDate, "");
		//alert(selected.join(", ")+" Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
	}
	
	function adminOpts(x){
		if ( cookieData[4] >= 7 ) {
			alert("Access");
			switch(x) {
				case 1:
					//
					
				break;
			};
		}else{
			alert("Access Denied!");
		};
	}
	
	
	
	function jobCrewDetails(id) {
		var cid = '0532';
		var rtData = [];
//alert("jobCrewDetails");
		$.ajax({ 
		type: 'POST', 
		url: "./scripts/crews.php", 
			//data: { },  
			//data: data,
			data: {'franID': franID, 'cid': cid, 'jobId': id },
			success: function (data) { 
				//alert(data.length);
				//alert(data.length+" Status "+data[0].status);
				switch (data[0].status) {
					case 'OK':
						for (var i=0;i<data.length;++i)
						{
							//alert(data[i].topic);
							rtData.push(data[i]);
						};		
						//alert(rtData.length+" Look: "+rtData[0].FirstName);	
						showData1(rtData);
					break;
					case 'ERROR':
						//alert("No records found");
						return_fuction(rtData,2);// 0=ok,1-security,2=no records
					break;
					case 'SECURITY ERROR':
						return_fuction(rtData,1);// 0=ok,1-security,2=no records
					break;
					default:
						//alert("XXXXX");
					break;
				};			
			},
			error: function(xhr, textStatus, error) {
				alert("Error:1 "+textStatus+" "+error);
			}
		});
		
		function showData1(data) {
			//alert("crewReturn");
			//var rtDataArray = a;
			//var status = b;
			var rtJasonData = data;
			var t = new Date();
			
			//alert("Look "+ data.length);
			var str1="";
			
			str1 += '<div class="list-group">';
			for (var i=0;i<data.length;++i)
			{
				//str1 += '<div class="list-group">';
					//str1 += '<a href="#" class="list-group-item active">';
					str1 += '<a href="#" class="list-group-item">';
						str1 += '<h4 class="list-group-item-heading">'+i+' : '+data[i].firstname+' '+data[i].lastname+' Title: '+data[i].title+'<br/></h4>';
						str1 += '<p class="list-group-item-text">Joined Job: '+data[i].startTime+'<br/>Exited Job: '+data[i].endTime+' Total Time: '+data[i].timeTotal+' </p>';
					str1 += '</a>';
				//str1 += '</div>';
			};
			str1 += '</div>';

			document.getElementById("job3Detail").innerHTML = str1;
			document.getElementById("exp1C_footer_text").innerHTML = "<p> Crew count: "+data.length+"</p>";
		}
	}