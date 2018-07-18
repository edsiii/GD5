
/*
function crewTblList() {
	
	var str1="";
	
	str1 += '<table class="table table-bordered responsive table-hover table-striped">';
	str1 += '<thead>';
	str1 += '<tr>';
	str1 += '<th>Name</th>';
	str1 += '<th>Phone</th>';
	str1 += '</tr>';
	str1 += '</thead>';
	str1 += '<tbody>';
		
	//for (i = 0; i < data.length; i++) {
	for (i = 0; i < 6; i++) {
		str1 += '<tr>';
			str1 += '<td width="90">John</td>';
			str1 += '<td>234-9866</td>';
		str1 += '</tr>';

	};
	
	str1 += '</tbody>';
	str1 += '</table>';
	
// crewGrid	
	document.getElementById("crewGrid").innerHTML = str1;
}

function clientTblList() {
	
	var str1="";
	
	str1 += '<table id="mTable1" class="table table-bordered responsive table-hover table-striped">';
	str1 += '<thead>';
	str1 += '<tr>';
	str1 += '<th>Name</th>';
	str1 += '<th>Phone</th>';
	str1 += '</tr>';
	str1 += '</thead>';
	str1 += '<tbody>';
		
	//for (i = 0; i < data.length; i++) {
	for (i = 0; i < 6; i++) {
		str1 += '<tr>';
			str1 += '<td width="90">John'+i+'</td>';
			str1 += '<td>234-9866</td>';
		str1 += '</tr>';

	};
	
	str1 += '</tbody>';
	str1 += '</table>';
	
// crewGrid	
	document.getElementById("clientGrid").innerHTML = str1;

 
}

function dataTbl1(d) {
	
	var str1="";
	
	str1 += '<table id="mTable1" class="display" cellspacing="0" width="100%">';
        str1 += '<thead>';
            str1 += '<tr>';
                str1 += '<th>First name</th>';
                str1 += '<th>Last name</th>';
            str1 += '</tr>';
        str1 += '<thead>';
        str1 += '<tfoot>';
            str1 += '<tr>';
                str1 += '<th>First name</th';
                str1 += '<th>Last name</th>';
            str1 += '</tr>';
        str1 += '</tfoot>';
    str1 += '</table>';
	
document.getElementById("clientGrid").innerHTML = str1;
	
	
	$('#mTable1').DataTable( {
        "paging":   false,
        "ordering": false,
        "info":     false
    } );
	
}
*/