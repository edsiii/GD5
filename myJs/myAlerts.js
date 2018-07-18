/*
get data from table
by date and time and delFld = 0
noteifier message
add toName to db
*/

var alertData = [];
function get_alertData() {
	var cid = '0532';
	var str1 = "";
	var rtData = [];
	$.ajax({ 
	type: 'POST', 
	url: "./scripts/alerts.php", 
			//data: { },  
			//data: data,
			data: {'franID': franID, 'cid': cid },
			success: function (data) { 
				str1 += ' <a href="#"> ';
				alertData = [];
				switch (data[0].status) {
					case 'OK':
						for (var i=0;i<data.length;++i)
						{
							//alert(data[i].topic);
							alertData.push(data[i]);
							
							str1 += ' <li> ';
							//str1 += ' <a href="javascript:alertDetails(\''+data[i]+'\')"> ';
							str1 += ' <a href="javascript:alertDetails('+i+')"> ';
							str1 += '   <i class="fa fa-users text-aqua"></i> '+data[i].msgTitle+' ';
							str1 += ' </a> ';
							str1 += ' </li> ';						
						};

						document.getElementById("appAlert_txt").innerHTML = str1;
						document.getElementById("appAlert_cnt").innerHTML = "You have "+i+" alerts";
						document.getElementById("appAlert_cnt2").innerHTML = i;	

					break;
					case 'ERROR':
						alert("No records found");
						//return_fuction(rtData,2);// 0=ok,1-security,2=no records
					break;
					case 'SECURITY ERROR':
						alert("SECURITY ERROR");
						//return_fuction(rtData,1);// 0=ok,1-security,2=no records
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
	
function alertDetails(d) {
	var t = alertData[d].eDate+"\nFrom: "+ alertData[d].aFrom+"\nTitle: "+alertData[d].msgTitle+"\nAlert:"+alertData[d].msg;
	alert(t);
}

function appAlerts() {
var str1 = "";
for (var i=0;i<8;++i)
{
	str1 += ' <li> ';
	str1 += ' <a href="#"> ';
	str1 += '   <i class="fa fa-users text-aqua"></i> x new members joined today ';
	str1 += ' </a> ';
	str1 += ' </li> ';
};
document.getElementById("appAlert_txt").innerHTML = str1;
document.getElementById("appAlert_cnt").innerHTML = "You have "+i+" alerts";
document.getElementById("appAlert_cnt2").innerHTML = i;	
}
