//function showMainGrid(a,b,data) {
function showMainGrid() {	
	//var rtDataArray = a;
	//var status = b;
	//var rtJasonData = data;
		
	var sharedDataSource = new kendo.data.DataSource({  
	data: data
	});	

	var gridT = $("#mainGridDiv").kendoGrid({
		change: onChangeGetQueryMaster,
		click: onChangeGetQueryMaster,
		selectable: "row",
		dataSource: sharedDataSource,
		height: "280px", 
		sortable: true,
		columns: [
			{
				field: "idx",
				title: "idx",
				width: "5px",
			},
			{   field: "clientID",
				title: "clientID",
				width: "10px",
				//hidden: true,
			},
			{   field: "FirstName",
				title: "First Name",
				style: "text-align:right",
				width: "10px",
				//type: 'date',
				//template: '#= kendo.toString(CreatedDate,"MM/dd/yyyy") #'
			},
			{   field: "LastName",
				title: "Last Name",
				style: "text-align:right",
				width: "10px",
				//type: 'date',
				//template: '#= kendo.toString(CreatedDate,"MM/dd/yyyy") #'
			},
			
			{   field: "phone1",
				title: "Cell Phone",
				width: "8px"
				//template: "#= kendo.toString(fixPhoneNumberDisplay("phone1")) #"
				//hidden: true,
			},
			
			{   field: "addr1",
				title: "Address",
				width: "15px",
				//hidden: true,
			},
			{   field: "city",
				title: "City",
				width: "10px",
				//hidden: true,
			},
			{   field: "state",
				title: "State",
				width: "4px",
				//hidden: true,
			},			
			
			{   field: "jobID",
				title: "jobID",
				width: "4px",
				//hidden: true,
			},
			
			{   field: "zipcode",
				title: "Zip Code",
				width: "6px",
				//hidden: true,
			}
		]
	});

}

function onChangeGetQueryMaster(arg) {
	//alert("Look");
	var grid = $("#mainGridDiv").data("kendoGrid");        
	var dataRows = grid.items();
	var rowIndex = dataRows.index(grid.select());
	var selectedItem = grid.dataItem(grid.select());
	//accessing selected rows data 
	//alert(rowIndex+" "+selectedItem.FirstName);
	
	jobLocDetails(selectedItem.id);
	//jobCrewDetails(selectedItem.id);
	//jobLocDetails(selectedItem.id);
	cJobNo = selectedItem.idx;
	
	//document.getElementById("jobBoard_title").value =  'Job # ';
	
	//myWinX("TITLE-HERE",rowIndex,"U",0,selectedItem.moveDate, "");
	//alert(selected.join(", ")+" Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
	//alert("JobID "+ selectedItem.idx);
	
	// TEST
	//chatUpdate();
	
	var selectedRows = this.select();
    var selectedDataItems = [];
    for (var i = 0; i < selectedRows.length; i++) {
      var dataItem = this.dataItem(selectedRows[i]);
      //selectedDataItems.push(dataItem);
    }
    // selectedDataItems contains all selected data items
	
}
	
function getJobGridData() {
	// job1Return
var c = '0532';
var d = 'GD00KS';
//alert("xxxx");
var rtData = [];
//var i=0;
	// Assign handlers immediately after making the request,
	// and remember the jqxhr object for this request
	// https://jsonplaceholder.typicode.com/
	//alert("a");
	
	// EDIT
	 var data = {
      'loginName': 'joel',
	  'pwd':'none',
	  'franID':'none',
	  'cid':'0532'
    };
    data = $(this).serialize() + "&" + $.param(data);
	
	//var data = {};
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/jobs1.php", 
		//data: { },  
		//data: data,
		data: {'franID':c, 'cid':d },
		success: function (data) { 
			//alert(data.length);
			//alert("Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						rtData.push(data[i]);
					};		
					//alert(rtData.length+" Look: "+rtData[0].FirstName);					
					// set global value
					mainGridData = rtData;
					//return_fuction(rtData,0,data);
					showMainGrid(rtData,0,data);
					//getAllLocMapData(rtData[0].idx,1,'Job X','XX');// show all for selected job
				break;
				case 'ERROR':
					alert("No records found");
					//return_fuction(rtData,2,data);// 0=ok,1-security,2=no records
					showMainGrid(rtData,2,data);
				break;
				case 'SECURITY ERROR':
					alert("SECURITY ERROR");
					//return_fuction(rtData,1,data);// 0=ok,1-security,2=no records
					showMainGrid(rtData,1,data);
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
	//return rtData;
}
/*

	
<span id="mg_label-default" style="display:none;"  class="label label-default">Default Label</span>
<span id="mg_label-primary" style="display:none;"  class="label label-primary">Primary Label</span>
<span id="mg_label-success" style="display:none;"  class="label label-success">Success Label</span>
<span id="mg_label-info" style="display:none;"  	class="label label-info">Info Label</span>
<span id="mg_label-warning" style="display:none;"  class="label label-warning">Warning Label</span>
<span id="mg_label-danger" style="display:none;"  	class="label label-danger">Danger Label</span>


*/