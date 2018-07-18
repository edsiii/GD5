


   function job1Return2(a,b,data) {
	   //alert("Job data "+ data.length);
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
			
			
			{   field: "zipcode",
				title: "Zip Code",
				width: "6px",
				//hidden: true,
			}
		]
	});
	// end data grid
   }
 
 