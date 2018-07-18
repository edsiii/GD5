// main menu functions

function OnLineHelp(){
	// open window
	var t = "Help";
	var c = capPath+"a1/index.html";
	var sz = [];
	sz = getWindowSize();
	var w = sz[0] - 280;
	
	var myHelpWindow1 = $("#windowLarge");
	if (!myHelpWindow1.data('kendoWindow')) {
		myHelpWindow1.kendoWindow({
			width: w,
			height: "650px",
			draggable: true,
			resizable: false,
			actions: ["Refresh", "Close"],
			title: t,
			content: c,
			close: onClose,
			refresh: onRefresh,
			deactivate: onDeactivate,
			open: onOpen
		});
	} else {
        myHelpWindow1.data('kendoWindow').open();
		myHelpWindow1.data("kendoWindow").center();
		// myHelpWindow1.data("kendoWindow").refresh();
    };
	
	function onClose(e) {
		//alert("Closing");
	};
	function onOpen(e) {
		//alert("Opening");
	};
	function onRefresh(e) {
		//kendoConsole.log("event :: refresh");
	}
	function onDeactivate(e) {
		//kendoConsole.log("event :: refresh");
	}
	//alert(w);
}

function getWindowSize(){
 var d= document, root= d.documentElement, body= d.body;
 var wid= window.innerWidth || root.clientWidth || body.clientWidth, 
 hi= window.innerHeight || root.clientHeight || body.clientHeight ;
 return [wid,hi]
}
