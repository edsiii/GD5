function crudCaller() {
	var mode = 'I';
	var i = 1;
	
	var dataObj = {
	  'idx':52,      
	  'trucknumber': '32B64',
	  'truckname': 'X32bzzzz',
	  'truckmodel': 'Dodge 11XZ',
	  'description': 'Full 2.5 ton',
	  'milage': 215000.1,
	  'status': 'OnLine',
	  'lastMaintanceCheck': '2017-11-22 13:30:13',
	  
		'mode':'I',
		'cid':'0532',
		'franID':'GD00KS'
    };
	dataUpdate(dataObj,i,mode );	
}

function dataUpdate(dataObj,i,mode) {
	var rtData = [];
    //dataOut = $(this).serialize() + "&" + $.param(dataObj);
	
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/crud-vehicle-IU.php", 
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
							'trucknumber': data[i].trucknumber,
							'truckname':data[i].truckname,
							'truckmodel':data[i].truckmodel,
							'description':data[i].description,
							'milage':data[i].milagel,
							'vStatus':data[i].vStatus,
							'lastMaintanceCheck':data[i].lastMaintanceCheck,
							'status': 'OK',
						});
					};
					//return rtData;
					vehicleReturn(rtData,'OK');
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
			alert(" Crud-vehicle-IU Error:1 "+textStatus+" "+error);
		}
	});
	


}
