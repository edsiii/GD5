
// TAB1
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var target = $(e.target).attr("href") // activated tab
  //alert(target);
  //fitmap();
	google.maps.event.trigger(map, 'resize');
	//fitmap();
});

function setUpTab1(){
	jsonAllActiveUsers2(sp1fu,'GD00KS','0532');
	//mainG2();
}
function sp1fu(a,b,data) {
	//alert("sp1fu");
	//currentUserData = x;
	// Build Kendo UI grid and datasource...
	var sharedDataSource = new kendo.data.DataSource({  
		data: data
	});		
	var gridX = $("#clientGrid").kendoGrid({
		change: onChangeMainG3,
		selectable: "row",
		dataSource: sharedDataSource,
		columns: [
			{
				field: "idx",
				title: "idx",
				width: "20px",
			},
			{   field: "userID",
				title: "userID",
				width: "40px",
				hidden: true,
			},
			{   field: "FirstName",
				title: "First Name",
				style: "text-align:right",
				width: "60px",
				//type: 'date',
				//template: '#= kendo.toString(CreatedDate,"MM/dd/yyyy") #'
			}
		]
	});
	// end data grid
	
	var gridY = $("#crewGrid").kendoGrid({
		change: onChangeMainG3,
		selectable: "row",
		dataSource: sharedDataSource,
		columns: [
			{
				field: "idx",
				title: "idx",
				width: "20px",
			},
			{   field: "userID",
				title: "userID",
				width: "40px",
				hidden: true,
			},
			{   field: "FirstName",
				title: "First Name",
				style: "text-align:right",
				width: "60px",
				//type: 'date',
				//template: '#= kendo.toString(CreatedDate,"MM/dd/yyyy") #'
			}
		]
	});
	// end data grid
	
}
