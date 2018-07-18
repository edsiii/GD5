
function j2(mainGridData) {
var rtData = [];
	// Assign handlers immediately after making the request,
	// and remember the jqxhr object for this request
	// https://jsonplaceholder.typicode.com/
	//alert("a");
	var jqxhr = $.getJSON( "https://jsonplaceholder.typicode.com/users", function() {
			console.log( "success" );
		})
		.done(function( data ) {
			var items = [];
			$.each( data, function( i, item ) { 
				//console.log( data[i].address.geo.lat + " second success " + data[i].name);
				//rtData.push(data[i]);
				//document.getElementById("secC").innerHTML = data[i].name;
				rtData.push({ name: data[i].name, age: data[i].id });
				
			});	
			//alert(data[0].address.geo.lat + " second success " + data[0].name+" "+data[0].address.zipcode);	
			//$("#login").val(data[0].name);
			//$("#inputPassword3").val( data[0].address.zipcode );
			//alert(rtData);
			 mainG(rtData);
			 grid1();
			 grid2();
		})
		.fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
			alert("Request Failed: " + err );
		});
		//.always(function() {
			//console.log( "complete" );
		//});
	 
		// Perform other work here ...
	 
		// Set another completion function for the request above optional
		jqxhr.complete(function() {
			console.log( "second complete " );
			//document.getElementById("secC").innerHTML = gg[2].name;
			//k3();
			//alert("jqxhr.complet");
		});
}


function j1() {
//var rtData = [];
	// Assign handlers immediately after making the request,
	// and remember the jqxhr object for this request
	// https://jsonplaceholder.typicode.com/
	//alert("a");
	var jqxhr = $.getJSON( "https://jsonplaceholder.typicode.com/users", function() {
			console.log( "success" );
		})
		.done(function( data ) {
			var items = [];
			$.each( data, function( i, item ) { 
				//console.log( data[i].address.geo.lat + " second success " + data[i].name);
				//rtData.push(data[i]);
				//document.getElementById("secC").innerHTML = data[i].name;
				//gg.push(data[i]);
				
			});	
			//alert(data[0].address.geo.lat + " second success " + data[0].name+" "+data[0].address.zipcode);	
			//$("#login").val(data[0].name);
			//$("#inputPassword3").val( data[0].address.zipcode );
			
		})
		.fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
			alert("Request Failed: " + err );
		})
		.always(function() {
			console.log( "complete" );
		});
	 
		// Perform other work here ...
	 
		// Set another completion function for the request above optional
		jqxhr.complete(function() {
			console.log( "second complete " );
			//document.getElementById("secC").innerHTML = gg[2].name;
			//k3();
			//alert("jqxhr.complet");
		});
}


function jsonAllActiveUsers(return_fuction,c,d) {
var cid = '0532';
//alert("S");
var rtData = [];
//var i=0;
	// Assign handlers immediately after making the request,
	// and remember the jqxhr object for this request
	// https://jsonplaceholder.typicode.com/
	//alert("a");
	
	// works
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
    url: "./scripts/activeUser.php", 
		//data: { },  
		//data: data,
		data: {'franID':c, 'cid':d },
		success: function (data) { 
			//alert(data.length);
			//alert("Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					for (var i=0;i<data.length;++i)
					{
						//alert(data[i].FirstName);
						rtData.push(data[i]);
					};		
					//alert(rtData.length+" Look: "+rtData[0].FirstName);


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
					//gridX.hideColumn("userID
					
					// end data grid
					
					return_fuction(rtData,0,data);
				break;
				case 'ERROR':
					//alert("No records found");
					return_fuction(rtData,2,data);// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					return_fuction(rtData,1,data);// 0=ok,1-security,2=no records
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

}

function jsonAllActiveUsers2(return_fuction,c,d) {
var cid = '0532';
//alert("S");
var rtData = [];
//var i=0;
	// Assign handlers immediately after making the request,
	// and remember the jqxhr object for this request
	// https://jsonplaceholder.typicode.com/
	//alert("a");
	
	// works
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
    url: "./scripts/activeUser.php", 
		//data: { },  
		//data: data,
		data: {'franID':c, 'cid':d },
		success: function (data) { 
			//alert(data.length);
			//alert("Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					for (var i=0;i<data.length;++i)
					{
						//alert(data[i].FirstName);
						rtData.push(data[i]);
					};		
					//alert(rtData.length+" Look: "+rtData[0].FirstName);					
					return_fuction(rtData,0,data);
				break;
				case 'ERROR':
					//alert("No records found");
					return_fuction(rtData,2,data);// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					return_fuction(rtData,1,data);// 0=ok,1-security,2=no records
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

}



function jsonMaster1(return_fuction,a,b,c,d) {
var cid = '0532';
var rtData = [];
//var i=0;
	// Assign handlers immediately after making the request,
	// and remember the jqxhr object for this request
	// https://jsonplaceholder.typicode.com/
	//alert("a");
	
	// works
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
    url: "./scripts/userAccess.php", 
		//data: { },  
		//data: data,
		data: {'loginName': a,'pwd':b, 'franID':c, 'cid':d },
		success: function (data) { 
			//alert(data.length);
			//alert("Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					for (var i=0;i<data.length;++i)
					{
						//alert(data[i].FirstName);
						rtData.push(data[i]);
					};		
					//alert(rtData.length+" Look: "+rtData[0].FirstName);
					if ( a.length >= 1 ) {
						loginfu(rtData,0);
						//return_fuction(rtData,0);
					}else{
						loginfu(rtData,1);
						//return_fuction(rtData,1);
					};
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
			//alert("Error:1 "+textStatus+" "+error);
			$('#bsAlert3').show();
		}
	});
	
	
/*
	// works
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "http://localhost/GD/scripts/Master1.php", 
    //data: { },           
      data: {'loginName': 'sdfgdf'},
		success: function (data) { 
			//alert(data.length);
			for (var i=0;i<data.length;++i)
			{
				//alert(data[i].FirstName);
				rtData.push(data[i]);
			};		
			//alert(rtData.length+" Look: "+rtData[0].FirstName);		
		}
	});


*/
/*
//var jqxhr = $.postJSON( "http://localhost/GD/scripts/Master1.php", function() {
			//console.log( "success" );

	var data = {'loginName': 'sdfgdf'};
	var jqxhr = $.post("http://localhost/GD/scripts/Master1.php", data, function(){}, 'json'){
		.done(function( data ) {
			var items = [];
			$.each( data, function( i, item ) {
				// note delflg
				if (data[0].idx != 999999999999 && data[0].delflg != 1) {
					rtData.push(data[i]);		
				};				
			});	
			if (data[0].idx == 999999999999) {
				// security breach error
				rtData = [];
				//alert("SECURITY BREACH ERROR "+data[0].idx);
			};	
			return_fuction(rtData);			
		})
		.fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
			alert("Request Failed: " + err );
		})
		.always(function() {
			console.log( "complete" );
		});
	 
		// Perform other work here ...
	 
		// Set another completion function for the request above optional
		jqxhr.complete(function() {
			console.log( "second complete " );
			//document.getElementById("secC").innerHTML = gg[2].name;
			//k3();
			//alert("jqxhr.complet");
		});
	*/
}


function getJob1(return_fuction,c,d) {
	// job1Return
var cid = '0532';
//alert("getJob1");
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
					return_fuction(rtData,0,data);
				break;
				case 'ERROR':
					//alert("No records found");
					return_fuction(rtData,2,data);// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					return_fuction(rtData,1,data);// 0=ok,1-security,2=no records
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

}

function getJob2(return_fuction,c,d) {
	// job2Return
var cid = '0532';
//alert("getJob2");
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
					return_fuction(rtData,0,data);
				break;
				case 'ERROR':
					//alert("No records found");
					return_fuction(rtData,2,data);// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					return_fuction(rtData,1,data);// 0=ok,1-security,2=no records
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

}

function getUserData(return_fuction,a,b) {
var cid = '0532';
var rtData = [];
//var i=0;
	// Assign handlers immediately after making the request,
	// and remember the jqxhr object for this request
	// https://jsonplaceholder.typicode.com/
	//alert("a");
	
	// works
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
    url: "./scripts/Master1.php", 
		//data: { },  
		//data: data,
		data: {'uid': a,'franID':c, 'cid':d },
		success: function (data) { 
			//alert(data.length);
			//alert("Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					for (var i=0;i<data.length;++i)
					{
						//alert(data[i].FirstName);
						rtData.push(data[i]);
					};		
					//alert(rtData.length+" Look: "+rtData[0].FirstName);	
					return_fuction(rtData,0);
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

}


function getCalData(return_fuction,theData) {
	//alert("theData "+theData[0].title);
//var cid = '0532';
var rtData = [];

	$.ajax({ 
    type: 'POST', 
    url: "./scripts/calendar1.php", 
		//data: { },  
		//data: data,
		data: theData, //{'franID':a, 'cid':cid, 'mode':'U', 'id':5 },
		success: function (data) { 
			//alert(data.length);
			//alert(data.length+" Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					for (var i=0;i<data.length;++i)
					{
						//alert(data[i].topic);
						// normal object array
						//rtData.push(data[i]);
						// schedular data
						rtData.push({
							id: data[i].id,
							taskId: data[i].taskId,
							title: data[i].title,
							start: new Date(data[i].startD),
							end: new Date(data[i].endD),			  
							startTimezone: null,
							endTimezone: null,
							description: data[i].description,
							recurrenceId: null,
							recurrenceRule: null,
							recurrenceException: null,
							franID: data[i].franID,
							isAllDay: data[i].isAllDay
						});
		
					};		
					//alert(rtData.length+" Look: "+rtData[0].franID);	
					return_fuction(rtData,0);
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

}
function goGetIt() {
	//alert("DD");
	var a = 'GD00KS';
	var b = '0532';
	$.ajax({
		url: './scripts/newsandinfo.php',
		type: 'POST',
		data: {'franID':a, 'cid':b },
		dataType: 'json',
		cache: false,
		success: goGetItData,
		async:true,
		error: goGetItError
	});
}
function goGetItData(data) {
   var myArray = data;
   //alert(myArray[1].ufrom+" Hello "+data[0].topic); //myArray);
   document.getElementById("myNewsAndInfo_footer").innerHTML = "<p>"+dateTime1("s")+"</p>";
}
function goGetItError(xhr, textStatus, error) {
	alert("Error:1 "+textStatus+" "+error);
}
	 
function getnewsandinfo(return_fuction,a,b) {
	//alert("Newsandinfo");
var cid = '0532';
var rtData = [];

	$.ajax({ 
    type: 'POST', 
    url: "./scripts/newsandinfo.php", 
		//data: { },  
		//data: data,
		data: {'franID':a, 'cid':b },
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
					return_fuction(rtData,0);
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

}

function getemployee(return_fuction,a,b) {
var cid = '0532';
var rtData = [];

	$.ajax({ 
    type: 'POST', 
    url: "./scripts/employees.php", 
		//data: { },  
		//data: data,
		data: {'franID':a, 'cid':b },
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
					return_fuction(rtData,0);
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

}




function getQueryMaster(return_fuction,c,d) {
var cid = '0532';
//alert("getQueryMaster");
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
    url: "./scripts/activeUser.php", 
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
					return_fuction(rtData,0,data);
				break;
				case 'ERROR':
					//alert("No records found");
					return_fuction(rtData,2,data);// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					return_fuction(rtData,1,data);// 0=ok,1-security,2=no records
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

}

function getStates() {
	stateData = [];
	var str1 = "";
    //dataOut = $(this).serialize() + "&" + $.param(dataObj);
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/states.php", 
		//data: dataObj,
		success: function (data) { 
			//alert(data.length);
			//alert("Call Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						stateData.push({
							'id':data[i].id,
							'name': data[i].name,
							'abbreviations':data[i].abbreviations,

							'status': 'OK',
						});
						str1 +='<option>'+data[i].abbreviations+'</option>';
					};
					stateOptions = str1;
				break;
				case 'ERROR':
					//alert("No records found");
					stateData.push({
						'idx':0,
						'trucknumber':'0',
						'truckname':'0',
						'truckcolor':'0',
						'status': 'ERROR',
					});
					//return stateData;// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					stateData.push({
						'idx':0,
						'trucknumber':'0',
						'truckname':'0',
						'truckcolor':'0',
						'status': 'ERROR'
					});
					return stateData;// 0=ok,1-security,2=no records
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
	
	//return stateData;
}