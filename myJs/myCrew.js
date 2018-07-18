// myCrews.js

function getCrews() {
	//alert("OK");
// cr.idx as idx, cr.jobNo as jobNo, cr.jobDate as jobDate, cr.rate as rate, cr.empID as empID, cr.franID, cr.timeTotal as timeTotal ,em.firstname as firstname, em.lastname as lastname, 
// cr.title as title, cr.startTime as startTime, cr.endTime as endTime  
	document.getElementById("theCrew").innerHTML = "<div class='list-group'>loading....</div>";
	
	var str1 = "";
	/*
	str1 += '<table class="table table-hover" width="100%"> ';
	str1 += '<tr> ';
	str1 += '<th width="50">ID/Emp#</th> ';
	str1 += '<th>Name</th> ';
	str1 += '<th width="150">Check In</th> ';
	str1 += '<th width="150">Check Out</th> ';
	str1 += '<th>Title</th> ';
	str1 += '<th width="100">Notes</th> ';
	str1 += '</tr> ';
	*/
	
	// list group
	str1 += '<div class="list-group" style="height: 100%;">';

	vehicleData = [];
    //dataOut = $(this).serialize() + "&" + $.param(dataObj);
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/crews.php", 
		data: {franID:'GD00KS',cid:0532, ID:1},
		success: function (data) { 
			//alert(data.length);
			//alert("Call Status "+data[0].status);
			document.getElementById("theCrew").innerHTML = "";
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						/*
						crewData.push({
							'idx':data[i].idx,
							'empID': data[i].empID,
							'firstname':data[i].firstname,
							'lastname':data[i].lastname,
							'title': data[i].title,
							'status': 'OK',
						});
						*/
						
						crewData.push(data[i]);
						
						// add to table
						str1 += '<a href="#" class="list-group-item">';
							str1 += '<h4 class="list-group-item-heading">'+i+' '+data[i].firstname+' '+data[i].lastname+'<br/></h4>';
							
							str1 += '<table class="table table-hover" width="100%"> ';
							
							str1 += '<tr> ';
							str1 += '<th width="50">ID/Emp#</th> ';
							str1 += '<th>Name</th> ';
							str1 += '<th width="150">Check In</th> ';
							str1 += '<th width="150">Check Out</th> ';
							str1 += '<th>Title</th> ';
							str1 += '<th width="100">Notes</th> ';
							str1 += '</tr> ';
							
								str1 += '<tr> ';
									str1 += '<td>'+data[i].idx+' - '+data[i].empID+' Job#:'+data[i].jobNo+'</td> ';
									str1 += '<td>'+data[i].firstname+' '+data[i].lastname+'</td> ';
									str1 += '<td>'+data[i].startTime+'</td> ';
									str1 += '<td>'+data[i].endTime+'</td> ';
									str1 += '<td><span class="label label-success">Helper</span></td> ';
									str1 += '<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td> ';
								str1 += '</tr>';
							str1 += '</table> ';
							
							str1 += '<p class="list-group-item-text">Time Total: '+data[i].timeTotal+'</p>';
													
							str1 += '<button type="button" onclick="javascript:getCrewMemberSelected('+i+');" class="btn btn-default btn-sm"> ';
							str1 += '  <span class="glyphicon glyphicon-edit"></span> Edit  ';
							str1 += '</button> ';
							
							str1 += '<button type="button" onclick="javascript:getCrewMemberSelected('+i+');" class="btn btn-default btn-sm"> ';
							str1 += '  <span class="glyphicon glyphicon-trash"></span> Delete  ';
							str1 += '</button> ';
							
							str1 += '<button type="button" onclick="javascript:getCrewMemberSelected('+i+');" class="btn btn-default btn-sm"> ';
							str1 += '  <span class="glyphicon glyphicon-plus-sign"></span> New ';
							str1 += '</button> ';
							
							str1 += '<button type="button" onclick="javascript:getCrewMemberSelected('+i+');" class="btn btn-default btn-sm"> ';
							str1 += '  <span class="glyphicon glyphicon-question-sign"></span> Help ';
							str1 += '</button> ';
												
						str1 += '</a>';
						
					};
					
					//str1 += '</table> ';					
					str1 += '</div>';
					
					document.getElementById("theCrew").innerHTML = str1;
					//crewDialogShow();
				break;
				case 'ERROR':
					//alert("No records found");
					vehicleData.push({
						'idx':0,
						'empID': 0,
						'firstname':null,
						'lastname':null,
						'status': 'ERROR',
					});
					//return crewData;// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					vehicleData.push({
						'idx':0,
						'empID': 0,
						'firstname':null,
						'lastname':null,

						'status': 'ERROR'
					});
					//return crewData;// 0=ok,1-security,2=no records
				break;
				default:
					//alert("XXXXX");
				break;
			};			
		},
		error: function(xhr, textStatus, error) {
			alert(" State Data Error:1 "+textStatus+" "+error);
		}
	});

}
function getCrewMemberSelected(id) {
	//alert("Selected "+crewData[id].firstname);
	crewDialogShow();
}
function crewDialogShow() {
    /*
    <div id="crewDialog"></div>
    */

	//Form Layout
	var str1 = '';
	str1 += '<form id="replyForm" >';
	str1 += '<div style="width:300px;" class="form-group">';
	str1 += '<label for="exampleInputEmail1">Email address</label>';
	str1 += '<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">';
	str1 += '<small id="emailHelp" class="form-text text-muted">Well never share your email with anyone else.</small>';
	str1 += '</div>';
	str1 += '<div style="width:300px;" class="form-group">';
	str1 += '<label for="exampleInputPassword1">Password</label>';
	str1 += '<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">';
	str1 += '</div>';
	str1 += '<div style="width:300px;" class="form-check">';
	str1 += '<input type="checkbox" class="form-check-input" id="exampleCheck1">';
	str1 += '<label class="form-check-label" for="exampleCheck1">Check me out</label>';
	str1 += '</div>';
	str1 += '</form>';

	$("#crewDialog").kendoDialog({
		width: "350px",
		title: "Crew Member Edit",
		closable: true,
		modal: false,
		draggable: true,
		close: onClose,
		content: str1,
		
		 position: 'fixed',
       margin: 'auto',
       top: '80%',
	   
		actions: [
			{ text: 'Cancel', action: onCancel },
			{ text: 'Help', action: onHlp },
			{ text: 'Submit', primary: true, action: onOK }
		]
    });
	
	function onClose(e) {
		//alert("XXX");
	}
	function onCancel(e) {
		alert("action :: cancel");
	}
	function onHlp(e) {
		alert("action :: Help");
	}
	function onOK(e) {
		//submit
		//alert("action :: OK");
	}
	
	$('#crewSubmit_btn').on('click', function (e) {

		//alert("CCC");
		//$("#crewDialog").close();
		$("#crewDialog").data("kendoWindow").close();
		
	});
	
    //dialog.data("kendoDialog").open();
    //undo.fadeOut();
}
