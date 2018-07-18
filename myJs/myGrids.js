// http://docs.telerik.com/kendo-ui/api/javascript/ui/grid


/*
function grid2() {
	//alert("g1");
	$("#clientGrid").kendoGrid({
	//dataSource: {
		//type: "odata",
		//transport: {
			//read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
		//},
		//pageSize: 20,
	//},
	pageSize: 10,
	height: 325,
//groupable: true,
	sortable: true,
	//pageable: {
		//refresh: true,
		//pageSizes: true,
		//buttonCount: 5
	//},
	columns: [{
		field: "name", filterable: {multi: true,search: true},
		title: "Name",
		width: 40// set its title to "Name"
	  }, 
	  {
		field: "phone",// create a column bound to the "age" field
		title: "Phone",
		width: 45 // set its title to "Age"
	  }],
	  filterable: true,
	  dataSource: [ { name: "Jhon Smith", phone: "1-513-222-3123" }, { name: "Bill Wilcon", phone: "1-513-222-3123" }]
    });
}

function grid1() {
	//alert("g1");
	$("#crewGrid").kendoGrid({
	//dataSource: {
		//type: "odata",
		//transport: {
			//read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
		//},
		//pageSize: 20,
	//},
	pageSize: 10,
	height: 325,
//groupable: true,
	sortable: true,
	//pageable: {
		//refresh: true,
		//pageSizes: true,
		//buttonCount: 5
	//},
	columns: [{
		field: "name", filterable: {multi: true,search: true},
		title: "Name",
		width: 50// set its title to "Name"
	  }, 
	  {
		field: "title",// create a column bound to the "age" field
		title: "Title",
		width: 35 // set its title to "Age"
	  }],
	  filterable: true,
	  dataSource: [ { name: "Jhon Smith", title: "Crew" }, { name: "Bill Wilcon", title: "Lead" }]
    });
}

function mainG(ds) {
	$("#mainGrid").kendoGrid({
		//pageSize: 5,
	//selectable: "multiple cell",
	//allowCopy: true,
	 columns: [{
		field: "name", filterable: {multi: true,search: true},
		title: "Name" // set its title to "Name"
	  }, 
	  {
		field: "age",// create a column bound to the "age" field
		title: "Age" // set its title to "Age"
	  }],
	  filterable: true,
	  //dataSource: [ { name: "Jane", age: 30 }, { name: "John", age: 33 }]
	  pageable: true,
	  noRecords: {
		template: "No data available on current page. Current page is: #=this.dataSource.page()#"
	  },
	  dataSource: ds,
	  //page: 2,
      pageSize: 5,
	  height: "20em",
	  width: "600px",
	  //noRecords: true,

	  toolbar: ["create", "save", "cancel","edit", "destroy"],
	  messages: {
		commands: {
		  cancel: "Cancel changes"
		}
	  }
	});

	
}

function mainG2() {
	//alert("mainG2");
	$("#mainGrid").kendoGrid({
	//selectable: "multiple cell",
	//allowCopy: true,
	 columns: [{
		field: "name", filterable: {multi: true,search: true},
		title: "Name" // set its title to "Name"
	  }, 
	  {
		field: "age",// create a column bound to the "age" field
		title: "Age" // set its title to "Age"
	  }],
	  filterable: true,
	  dataSource: [ { name: "Jane", age: 30 }, { name: "John", age: 33 }]
	});

	
}
*/
/*
function mainG3() {
	
	// [ { name: "Jane", age: 30 }
	var str = '[';
	str += '{ idx: 66 , userID: "dfdfdf" },';
	str += '{ idx: 44 , userID: "erte" }';	
	str += ']';
	//alert(str);
	//alert("A"); idx, userID, franID, FirstName, LastName, email, phone1, accessLevel
	gridX = $("#clientGrid").kendoGrid({
		  change: onChangeMainG3,
	  selectable: "row",
	  // row | cell | multi, row | multi,cell
	//allowCopy: true,
	 columns: [{
		//field: "idx", filterable: {multi: true,search: true},
		field: "idx", 
		title: "#"
	  }, 
	  {
		field: "userID",// create a column bound to the "age" field
		title: "User ID" // set its title to "Age"
	  }, 
	  {
		field: "FirstName",// create a column bound to the "age" field
		title: "First Name" // set its title to "Age"
	  }
	  
	  ],
	  filterable: true,
	  //dataSource: [ { idx: "Jane", userID: 30 }, { idx: "John", userID: 33 }]
	  dataSource: str
	}
	
	);
	
	//gridX.columns[0].width = 10;
	//gridX.setOptions({columns: gridX.columns});



	//var grid = $("#clientGrid").data("kendoGrid");
	var selectedRows = gridX.select();
	selectedRows.each(function(index, row) {
	  var selectedItem = gridX.dataItem(row);
	  alert(selectedItem.idx);
	});

}
*/

function onChangeMainG3(arg) {
	//eds
	var grid = $("#clientGrid").data("kendoGrid");        
	var dataRows = grid.items();
	var rowIndex = dataRows.index(grid.select());
	var selectedItem = grid.dataItem(grid.select());
	//accessing selected rows data 
	//alert(rowIndex+" ----- "+selectedItem.userID);
	myWinX("TITLE-HERE",rowIndex,"U",0,"", "");
	//alert(selected.join(", ")+" Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
}
