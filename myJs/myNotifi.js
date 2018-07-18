	/*
<span id="popupNotification"></span>
<span id="staticNotification"></span>

<div class="demo-section k-content">
	<h4>Show notification</h4>
	<p>
		<button id="showPopupNotification" class="k-button">As a popup at bottom-right</button><br />
		<button id="showStaticNotification" class="k-button">Static in the panel below</button>
	</p>
	<div style="padding-top: 1em;">
		<h4>Hide notification</h4>
		<button id="hideAllNotifications" class="k-button">Hide All Notifications</button>
	</div>
</div>

<div id="appendto" class="demo-section k-content"></div>

*/

function myNotifi1(m,i) {
//alert(" myNotifi1 " +m);
		
	var popupNotification = $("#popupNotification").kendoNotification().data("kendoNotification");
	var staticNotification = $("#staticNotification").kendoNotification({
		appendTo: "#appendto",
		allowHideAfter: 5000
	}).data("kendoNotification");
    //var d = new Date();   
	popupNotification.show(m, i);
	//popupNotification.hide();
	//staticNotification.hide();


}


function myNotifi2() {
		
var popupNotification = $("#popupNotification").kendoNotification().data("kendoNotification");
var staticNotification = $("#staticNotification").kendoNotification({
	appendTo: "#appendto"
}).data("kendoNotification");

var d = new Date();
	staticNotification.show(kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), "000"), "info");
	var container = $(staticNotification.options.appendTo);
	container.scrollTop(container[0].scrollHeight);
/*
	popupNotification.hide();
	staticNotification.hide();
*/

}

function myNotifi3(){
	
	 function onShow(e) {
                    if (e.sender.getNotifications().length == 1) {
                        var element = e.element.parent(),
                            eWidth = element.width(),
                            eHeight = element.height(),
                            wWidth = $(window).width(),
                            wHeight = $(window).height(),
                            newTop, newLeft;
                        
                        newLeft = Math.floor(wWidth / 2 - eWidth / 2);
                        newTop = Math.floor(wHeight / 2 - eHeight / 2);

                        e.element.parent().css({top: newTop, left: newLeft});
                    }
                }

 //               $(document).ready(function() {
                    var centered = $("#centeredNotification").kendoNotification({
                        stacking: "down",
                        show: onShow,
                        button: true
                    }).data("kendoNotification");

                    $("#showNotification").click(function(){
                        var d = new Date();
                        centered.show(kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), "000"));
                    });

                    var configurable = $("#configurableNotification").kendoNotification().data("kendoNotification");

                    $("#hideAllNotifications").click(function(){
                        centered.hide();
                        configurable.hide();
                    });

                    function applyConfiguration() {
                        configurable.hide();
                        configurable.setOptions({
                            position: {
                                top: $("#top").data("kendoNumericTextBox").value(),
                                left: $("#left").data("kendoNumericTextBox").value(),
                                bottom: $("#bottom").data("kendoNumericTextBox").value(),
                                right: $("#right").data("kendoNumericTextBox").value()
                            },
                            stacking: $("#stacking").data("kendoDropDownList").value()
                        });
                    }

                    var config = {
                        decimals: 0,
                        min: 0,
                        format: "n0",
                        change: applyConfiguration
                    };

                    $(".num").each(function(){
                        $(this).kendoNumericTextBox(config);
                    });

                    $("#stacking").kendoDropDownList({
                        change: applyConfiguration
                    });

                    $("#showConfigurable").click(function(){
                        var d = new Date();
                        configurable.show(kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), "000"));
                    });
  //              });
	
}

function securityNotifi(m,t) {
	//alert("X");
	
	var popupNotification = $("#popupNotification").kendoNotification().data("kendoNotification");
	var staticNotification = $("#staticNotification").kendoNotification({
		appendTo: "#appendto"
	}).data("kendoNotification");

				
	
	 var d = new Date();
	//staticNotification.show(kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), "000"), "info");
	staticNotification.show(m, t);
	
	var container = $(staticNotification.options.appendTo);
	container.scrollTop(container[0].scrollHeight);

}