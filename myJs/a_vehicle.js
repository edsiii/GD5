

function getVehicle1() {

var data = null;
var dataX = {
	'idx':'0',      
	'trucknumber': '.',
	'truckname': '.',
	'truckmodel': '.',
	'description': '.',
	'mileage': 0,
	'status': '.',
	'lastMaintanceCheck': '.',
  
	'mode':'X',
	'cid':'0532',
	'franID':'GD00KS'
};

var dataObj = new FormData();
dataObj.append("mode", "X");// ID
dataObj.append("cid", "0532");//KEY
dataObj.append("franID", "GD00KS");//KEY

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
	  vehicleData = JSON.parse(this.responseText);
	  if ( vehicleData[0].status == "OK" ) {
		  // good
		  displayVehicleData();
	  }else{
		  // bad
		  
	  };
    //alert(vehicleData[0].truckname);
  }
});

xhr.open("POST", "http://localhost/GD5/scripts/a_crud-vehicle-IU.php");
//xhr.open("GET", "http://localhost/GD5/scripts/a_crud-vehicle-IU.php");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "4b8388fb-b872-7892-5e07-0c1c7f2de8df");

xhr.send(dataObj);

}

function displayVehicleData() {
	//alert("OK");
$("#vehicleGrid").kendoGrid({
	
	dataSource: {
				type: "json",
				transport: {
					read: "http://localhost/GD5/scripts/a_crud-vehicle-IU.php"
				},	
		
		schema: {
			model: {
				fields: {
					idx: { type: "number" },
					trucknumber: { type: "string" },
					truckname: { type: "string" }
				}
			}
		},
		pageSize: 20
	},
	height: 292,
	scrollable: true,
	sortable: true,
	filterable: true,
	pageable: {
		input: true,
		numeric: false
	},
	columns: [

		{ field: "idx", title: "idx", format: "{0:c}", width: "60px" },
		{ field: "trucknumber", title: "trucknumber", width: "100px" },
		{ field: "truckname", title: "trucknname",width: "140px" }
	]
});

}
