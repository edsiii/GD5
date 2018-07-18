
function myCalDialog1() {
	var str1 = "";
	// str1 += '
	// ';
	
	//str1 += '<div id="to-do"> ';			
	str1 += '		<table> ';
	str1 += '		  <col span="1" class="wide"> ';
	str1 += '			<tr> ';
	str1 += '			  <td width="200px">Title:</td> ';
	str1 += '			  <td><input type="text" class="k-textbox" name="calTitle" id="calTitle" required="required" /></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">Start:</td> ';
	str1 += '			  <td><input id="calStartDate" style="width:220px;" /></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">End:</td> ';
	str1 += '			  <td><input id="calEndDate" style="width:220px;" /></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">All day event:</td> ';
	str1 += '			  <td><input type="checkbox" name="Accept" required validationMessage="Acceptance is required" /> I accept the terms of service</td> ';
	str1 += '			</tr> ';
				
	str1 += '<tr> ';
	str1 += '			  <td width="150px"><label for="calAllDayYN">All day event:</label></td> ';
	str1 += '				<td><select id="calAllDayYN" placeholder="Select option..."> ';
	str1 += '						<option>No</option> ';
	str1 += '						<option>Yes</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px"><label for="calAllDayYN">Repeat:</label></td> ';
	str1 += '				<td><select id="calRepeatYN" placeholder="Select option..."> ';
	str1 += '						<option>No</option> ';
	str1 += '						<option>Yes</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';
				
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">Description:</td> ';
	str1 += '			  <td><textarea rows="3" cols="20" class="k-textbox" name="calDesc" id="calDesc" required="required"> </textarea></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px"><label for="calOwner">Owner:</label></td> ';
	str1 += '				<td><select id="calOwner" placeholder="Select option..."> ';
	str1 += '						<option>No</option> ';
	str1 += '						<option>Yes</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';				
	str1 += '		</table> ';	
	//str1 += '		<a id="disabledButton">Disabled Button</a>  ';
	//str1 += '	</div> ';
	
	document.getElementById("dialogX").innerHTML = str1;
	
	$("#calStartDate").kendoDateTimePicker({
		value: new Date("2017/10/16 11:00 AM")
	});
	$("#calEndDate").kendoDateTimePicker({
		value:new Date()
	});
	$("#calAllDayYN").kendoComboBox({

	});
	$("#calRepeatYN").kendoComboBox({
	
	});
	$("#calOwner").kendoComboBox({
	
	});
	
	var window = $("#dialogX");
				
//var dialogX = $("#dialogX");
	window.kendoDialog({
	//$("#dialogX").kendoDialog({
		 width: "400px",
            title: "Software Update",
            closable: true,
            modal: false,
      actions: [{
          text: "Save",
          action: function(e){
			  alert("gogo");
              return false;
          },
          primary: true
      },{
          text: "Cancel",
          action: function(e){
			  alert("gogo2");
			  window.data("kendoWindow").close();
              return false;
          }
      }],
	  close: onClose
    });
	function onClose(e) {
            //show.fadeIn();
            e.preventDefault();
		$('#dialogX').data("kendoWindow").close();

        }
	// dialog.data("kendoDialog").open();
}

function myDialog1() {
    /*
    <div id="dialog"></div>
    */

    //alert("Here");

    $("#dialog").kendoDialog({
      actions: [{
          text: "OK",
          action: function(e){
              return false;
          },
          primary: true
      },{
          text: "Cancel"
      }]
    });


         //dialog.data("kendoDialog").open();
            //undo.fadeOut();
}