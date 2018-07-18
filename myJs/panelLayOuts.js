// panelLayOuts.js
// tab 1 and tab 2

// TAB 1
function exp1() {
	//var str1 = '';
	// str1 += '
	// ';
	var str1 = '';
	
	/* menu */
	//var str1 = '';

str1 = '<div> ';
//str1 += '        <div id="megaStore"> ';
str1 += '             <ul id="menu" > ';

str1 += '                 <li> ';
str1 += '                     Job Info ';
str1 += '                     <ul> ';
str1 += '                         <li> ';
str1 += '                             Jobs Schedualed ';
str1 += '                             <ul> ';
str1 += '                                 <li>Todays Jobs</li> ';
str1 += '                                 <li>Tomorrows</li> ';
str1 += '                                 <li>This week</li> ';
str1 += '                                <li>Next Week</li> ';
str1 += '                                 <li>This Month</li> ';
str1 += '                             </ul> ';
str1 += '                         </li> ';
	str1 += '                         <li> ';
	str1 += '                             Current Jobs ';
	str1 += '                            <ul> ';
	str1 += '                                 <li>Status</li> ';
	str1 += '                                 <li>Today Map</li> ';
	str1 += '                                 <li>Crew and Customers</li> ';
	str1 += '                                 <li>Routes</li> ';
	str1 += '                                 <li>Special Items</li> ';
	str1 += '                             </ul> ';
	str1 += '                         </li> ';

	str1 += '                         <li> ';
	str1 += '                             Storage ';
	str1 += '                             <ul> ';
	str1 += '                                 <li>Wall Shelving</li> ';
	str1 += '                                 <li>Kids Storage</li> ';
	str1 += '                                 <li>Baskets</li> ';
	str1 += '                                 <li>Multimedia Storage</li> ';
	str1 += '                                 <li>Floor Shelving</li> ';
	str1 += '                                 <li>Toilet Roll Holders</li> ';
	str1 += '                                 <li>Storage Jars</li> ';
	str1 += '                                 <li>Drawers</li> ';
	str1 += '                                 <li>Boxes</li> ';
	str1 += '                             </ul> ';
	str1 += '                         </li> ';
str1 += '                         <li> ';
str1 += '                             Lights ';
str1 += '                             <ul> ';
str1 += '                                 <li>Ceiling</li> ';
str1 += '                                 <li>Table</li> ';
str1 += '                                 <li>Floor</li> ';
str1 += '                                 <li>Shades</li> ';
str1 += '                                 <li>Wall Lights</li> ';
str1 += '                                 <li>Spotlights</li> ';
str1 += '                                 <li>Push Light</li> ';
str1 += '                                 <li>String Lights</li> ';
str1 += '                             </ul> ';
str1 += '                         </li> ';
str1 += '                     </ul> ';
str1 += '                 </li> ';

str1 += '                 <li> ';
str1 += '                     Stores ';
str1 += '                     <ul> ';
str1 += '                         <li> ';
str1 += '                             <div id="template" style="padding: 10px;"> ';
str1 += '                                 <h2>Around the Globe</h2> ';
str1 += '                                 <ol> ';
str1 += '                                     <li>United States</li> ';
str1 += '                                     <li>Europe</li> ';
str1 += '                                     <li>Canada</li> ';
str1 += '                                     <li>Austr1lia</li> ';
str1 += '                                 </ol> ';
str1 += '                                 <img src="./content/web/menu/map.png" alt="Stores Around the Globe" /> ';
//str1 += '                                 <button class="k-button">See full list</button> ';
str1 += '                             </div> ';
str1 += '                         </li> ';
str1 += '                     </ul> ';
str1 += '                 </li> ';
/*
str1 += '                <li> ';
str1 += '                     Blog ';
str1 += '                 </li> ';

str1 += '                 <li> ';
str1 += '                     Company ';
str1 += '                 </li> ';

str1 += '                 <li> ';
str1 += '                     Events ';
str1 += '                 </li> ';

str1 += '                 <li disabled="disabled"> ';
str1 += '                     News ';
str1 += '                 </li> ';
*/

str1 += '             </ul> ';
//str1 += '         </div> ';
str1 += '         <style> ';
str1 += '             #megaStore { ';
str1 += '                 max-width: 600px; ';
str1 += '                 margin: 30px auto; ';
str1 += '                 padding-top: 120px; ';
str1 += '                 background: url("/content/web/menu/header.jpg") no-repeat center 0; ';
str1 += '             } ';
str1 += '             #menu h2 { ';
str1 += '                 font-size: 1em; ';
str1 += '                 text-transform: uppercase; ';
str1 += '                 padding: 5px 10px; ';
str1 += '             } ';
str1 += '             #template img { ';
str1 += '                 margin: 5px 20px 0 0; ';
str1 += '                 float: left; ';
str1 += '             } ';
str1 += '             #template { ';
str1 += '                 width: 380px; ';
str1 += '             } ';
str1 += '             #template ol { ';
str1 += '                 float: left; ';
str1 += '                 margin: 0 0 0 30px; ';
str1 += '                 padding: 10px 10px 0 10px; ';
str1 += '             } ';
str1 += '             #template:after { ';
str1 += '                 content: "."; ';
str1 += '                 display: block; ';
str1 += '                 height: 0; ';
str1 += '                 clear: both; ';
str1 += '                 visibility: hidden; ';
str1 += '             } ';
str1 += '             #template .k-button { ';
str1 += '                 float: left; ';
str1 += '                 clear: left; ';
str1 += '                 margin: 5px 0 5px 12px; ';
str1 += '             } ';
str1 += '         </style> ';

//str1 += '         <script> ';
//str1 += '             $(document).ready(function() { ';
//str1 += '                 $("#menu").kendoMenu(); ';
//str1 += '             }); ';
//str1 += '         </script> ';
//str1 += '     </div>';	
	
	/* end menu */
	
	
//str1 += '<div class="col-lg-12 col-md-12 " >';
//org str1 += '<div >';
	
	//str1 += '<div class="panel panel-default">';
	//str1 += '<div class="panel-heading">Job Board</div>';
	//str1 += '<div class="panel-body" style="height:250px;width:100%;">';
		
	
		//str1 += '<div class="col-lg-10 col-md-10 ">';
			str1 += '<br/><div id="exp1A_header_text">JOBS</div>';
			str1 += '<div class="k-widget k-grid" id="mainGrid" style="width:100%;overflow-x:scroll;"></div>';
			str1 += '<div id="exp1A_footer_text">Jobs Footer</div><br/>';
		//str1 += '</div>';
		/*
		str1 += '<div class="col-lg-2 col-md-2">';
		
			str1 += '<div class="short-div" style="height:120px;">';
			str1 += '	<div style="height:18px; vertical-align: middle;" >';
			str1 += '		<p>&nbsp;Job Board Options</p>';		
			str1 += '		<div id="crewGrid" style="height:190px;width:250px;"></div>';				
			str1 += '	</div>';			
			str1 += '</div>';				
				
		str1 += '</div>';		
		*/	
	//str1 += '</div>';
	//str1 += '<div class="panel-footer"><div id="exp1A_footer_text">Panel Footer</div></div>';
	//str1 += '</div>';
		
			
str1 += '</div>';		
				
	//alert(str1);
	document.getElementById("exp1A").innerHTML = str1;
	//exp1AFooter('<p>My world</p>');
	$("#menu").kendoMenu({
		select: onSelect_menu,
		open: onOpen_menu,
        close: onClose_menu,
        activate: onActivate_menu,
        deactivate: onDeactivate_menu
	});
	//alert("exp1");
}
function onSelect_menu(e) {
	//alert("Selected: " + $(e.item).children(".k-link").text());
	switch($(e.item).children(".k-link").text()) {
		case "Today Map":
			//myWin3('Maps','<div id="map"></div>',false);
			$('#myModal').modal('show');
		break;
		
	};
	
	
}
function onOpen_menu(e) {
	//alert("Opened: " + ($(e.item).children(".k-link").text() || "ContextMenu"));
}

function onClose_menu(e) {
	//alert("Closed: " + ($(e.item).children(".k-link").text() || "ContextMenu"));
}

function onActivate_menu(e) {
	//alert("Activated: " + ($(e.item).children(".k-link").text() || "ContextMenu"));
}

function onDeactivate_menu(e) {
	//alert("Deactivated: " + ($(e.item).children(".k-link").text() || "ContextMenu"));
}
			
function exp1AFooter(t) {
	//var str1 = '';
	// str1 += '
	// ';
	// str1 = '<p>My world</p>';
	
	//document.getElementById('exp1A_footer_text').innerHTML = t;
}

// end

// Tab two  
function exp2() {
	//var str1 = '';
	// str1 += '
	// ';
	var str1 = '';	
		
	str1 += '	<div class="row"> ';
	str1 += '		<table  width="99%"> ';
	str1 += '		  <tr> ';
	str1 += '			<th width="1%"></th> ';
	str1 += '			<th width="45%"> ';							
	str1 += '				<div class="panel panel-default"> ';
	str1 += '					<div class="panel-heading"><div id="exp1B_header_text">Pick up / drop off Location Information</div></div>';
	str1 += '					<div class="panel-body" style="height:260px;"> ';
	str1 += '						<div id="job2Detail" style="height:245px;overflow-x:scroll;">....</div> ';
	str1 += '					</div> ';
	str1 += '					<div class="panel-footer"><div id="exp1B_footer_text">exp1B_footer_text</div></div>';
	str1 += '				</div> ';
	str1 += '			</th> ';
	str1 += '			<th width="1%"></th> ';
	str1 += '			<th width="45%"> ';
	str1 += '				<div class="panel panel-default"> ';
	str1 += '			<div class="panel-heading"><div id="exp1C_header_text">Job Crew Details</div></div>';
	str1 += '					<div class="panel-body" style="height:260px;"> ';
	str1 += '						<div id="job3Detail" style="height:245px;overflow-x:scroll;">..............</div> ';
	str1 += '					</div> ';
	str1 += '			<div class="panel-footer"><div id="exp1C_footer_text">exp1C_footer_text</div></div>';
	str1 += '				</div> ';
	str1 += '			</th> ';
	str1 += '			<th width="1%"></th> ';
	str1 += '		  </tr> ';
	str1 += '		</table> ';						
	str1 += '	</div> ';
	str1 += '	<br/><br/><br/><br/> ';
	str1 += '	<div style="height:600px;"></div> ';
					
					

								
	
	document.getElementById("exp1B").innerHTML = str1;
	//exp1BFooter('<p>My world</p>');
	
	//alert("exp1");
}
function exp1BHFooter(h1,f1,h2,f2) {
	//var str1 = '';
	// str1 += '
	// ';
	// str1 = '<p>My world</p>';
	
	document.getElementById('exp1B_header_text').innerHTML = h1;
	document.getElementById('exp1B_footer_text').innerHTML = f1;
	document.getElementById('exp1C_header_text').innerHTML = h2;
	document.getElementById('exp1C_footer_text').innerHTML = f2;
}