// myJob2.js - pick up and job crew

var locInfoData = [];
// http://localhost/GD/scripts/jobs2.php
   function jobLocDetails(id) {
		var cid = '0532';
		var rtData = [];
		$.ajax({ 
		type: 'POST', 
		url: "./scripts/jobs2.php", 
			//data: { },  
			//data: data,
			data: {'franID': franID, 'cid': cid },
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
						showJobData2(rtData);
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
		
		function showJobData2(data) {
			//alert("employeeReturn");
			//var rtDataArray = a;
			//var status = b;
			//var rtJasonData = data;
			var t = new Date();
			var sd ;
			
			//alert("Look "+ data.length);
			var str1="";
			
			str1 += '<div class="list-group">';
			for (var i=0;i<data.length;++i)
			{
				locInfoData.push(data[i]);
				if ( i == 0){sd = "From Other Location: "; }else{ sd = "From Last Stop: "; };
				var addr = data[i].startAddr1+" "+data[i].startCity+", "+data[i].startState+" "+data[i].startZip;
				//str1 += '<div class="list-group">';
					//str1 += '<a href="#" class="list-group-item active">';
					str1 += '<a href="#" class="list-group-item">';
						str1 += '<h4 class="list-group-item-heading">'+data[i].orderSeq+' : '+addr+'<br/></h4>';
						str1 += '<p class="list-group-item-text">ROUTE NOTES: '+data[i].routeDesc+'<br/>STATUS: '+data[i].routeStatus+'<br/>VEHICLES: '+data[i].vehicleIds+'<br/>ARRIVAL: '+data[i].arivalTime+' ';
						str1 += '<br/>DEPATURE: '+data[i].departureTime+' ';
						str1 += '<br/>ROUTE MILES '+sd+data[i].routeDistance+' ';
						str1 += '<br/>LOCATION TYPE: '+data[i].locationType+' ';
						str1 += '<br/><button type="button" onclick="showThisMapX(\''+data[i].jobID+'\',2,\''+i+'\');" class="btn btn-info">Show on map</button>';
						
						str1 += '</p></a>';
				//str1 += '</div>';
			};
			str1 += '</div>';
// idx, orderSeq, clientID, startAddr1, startCity, startState, startZip, gpsLat, gpsLon, arivalTime, departureTime, routeDesc, routeDistance, directionsTxt, routeStatus, vehicleIds
//alert(str1);
			document.getElementById("job2Detail").innerHTML = str1;
			document.getElementById("exp1B_footer_text").innerHTML = "<p><button type='button' onclick='showThisMapX("+data[0].jobID+",1,0);' class='btn btn-info'>Show Map</button> Total Stops on this job: "+locInfoData.length+"</p>";
		}		
	}
	
	function showThisMapX(x,z,g) {
		//alert(z+" X "+x);
		var jobID = x;
		var dType = z;
		var t = "Job ID: "+g;// map marker title
		
		showLocMap(jobID,dType,t,g);// initTelerik.js
	}


function showLocMap(jobID,typ,t,l) {
	//alert(+locInfoData[l].gpsLat+" xxx "+locInfoData[l].gpsLon); //l == job2p.idx
		var gStr = "";
		var p1=locInfoData[l].gpsLat;
		var p2=locInfoData[l].gpsLon;
		var p3=locInfoData[l].startAddr1+" "+locInfoData[l].startCity+" "+locInfoData[l].startState+" "+locInfoData[l].startZip;
		var p4=t;

		if ( typ == 2 ) {			
			gStr += winCodePath+"map1.html?"; //"http://localhost/GD/winCode/map1.html?";
			gStr += "&p1="+p1;
			gStr += "&p2="+p2;
			gStr += "&p3="+p3;
			gStr += "&p4="+p4;
			//qStr += "&p5=xx";			
		};
		
		if ( typ == 1 ) {
			gStr += winCodePath+"map2.html?";
			gStr += "&p1="+franID;
			gStr += "&p2="+jobID;
			gStr += "&p3="+p3;
			gStr += "&p4="+p4;
		};
		
		$("#dialogZ").kendoWindow({
			actions:[
						//"Pin",
						//"Minimize",
						//"Maximize",
						"Close"
					],
			top: "400px", // or "100px"
			left: "10%",
			width: "600",
			height: "350px",
			modal: false,
			resizable: true,
			visible: false,
			title: "Job Route Location information",
			  content: gStr
			//content:
			//visible: false
		});
		$("#dialogZ").data("kendoWindow").open();

}
