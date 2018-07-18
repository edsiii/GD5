

function baseWin1() {
    /*

    <div id="window">.......................</div>
	<div class="responsive-message"></div>
    var myWindow = $("#window");
    // .data("kendoWindow").close();
	// .data("kendoWindow").refresh();
	// .data("kendoWindow").refresh();
    */

    $("#window").kendoWindow({
        width: "630px",
        height: "315px",
        title: "Rams's Ten Principles of Good Design",
        actions: ["Refresh", "Maximize", "Close"],
        content: "content/web/window/ajax/ajaxContent1.html",
        visible: false,
        open: onOpen1,
        position: {
            top: 100, // or "100px"
            left: "20%"
            },
        activate: onActivate1,
        close: onClose1,
        deactivate: onDeactivate1,
        refresh: onRefresh1,
        resize: onResize1,
        dragstart: onDragStart1,
        dragend: onDragEnd1
    }); //.data("kendoWindow").open(); // use to open on init

    function onOpen1(e) {
		//alert("event :: open");
	}

	function onClose1(e) {
		$("#undo").fadeIn();
		//alert("event :: close");
	}

	function onActivate1(e) {
		//console.log("event :: activate");
	}

	function onDeactivate1(e) {
		//console.log("event :: deactivate");
	}

	function onRefresh1(e) {
		//console.log("event :: refresh");
	}

	function onResize1(e) {
		//console.log("event :: resize");
	}

	function onDragStart1(e) {
		//console.log("event :: dragstart");
	}

	function onDragEnd1(e) {
		//console.log("event :: dragend");
	}

}