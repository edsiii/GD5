// jCom.js
var JCom_obj ;
var JCom_t = "";
var JCom_History = [];
var JCom_i = 0;
ortcClient = RealtimeMessaging.createClient();
ortcClient.setClusterUrl('https://ortc-developers.realtime.co/server/ssl/2.1/');
ortcClient.connect('SkzSPG', 'testToken');

var JCom_x;
ortcClient.onConnected = function(ortc) {
console.log("Connected to " + ortcClient.getUrl());

ortcClient.subscribe('EDS1', true, function(ortc, channel, message) {
	//console.log(message);		
	JCom_obj = JSON.parse(message);
	JCom_History[JCom_i] = JCom_obj;
	//alert(message+" "+JCom_obj.mcmd);
	if (JCom_obj.mto == 'Dean' || JCom_obj.mto == 'ALL' ) {
		switch(JCom_obj.mcmd) {
			case "sMSG":
				// mmsg1
				JCom_x = JCom_obj.mmsg1;
				//localStorage.setItem("JCom_obj", JSON.stringify(JCom_obj));
				mainBar(JCom_x);
				myNotifi1(" In comming messages ","info");
				localStorage.setItem("JCom_obj", message);
				jComWin('Messages','jCom1.html',false);
				//var p = {lat: 38.9822282, lng:  -94.6707917}
				//addMk1(p,'Demo','<p>hello world</p>');
				
				// alert-success
				//document.getElementById("alertSuccess1_data").innerHTML = '<strong>Success!</strong> This alert box could indicate a successful or positive action.'; //JCom_obj.mmsg1;
				//document.getElementById("alertSuccess1").style.visibility = "visible";  //"visible|hidden|collapse|initial|inherit"

			break;
			case "sMAP":
				//OK
				var p = {lat: 38.9822282, lng:  -94.6707917}
				addMk1(p,'Demo','<p>hello world</p>');
			break;
		};			
		//playSound( 'xxx' );
	};		
	JCom_i++;
  });

  var myMessage = {
	foo: "bar"
  };

  //ortcClient.send('EDS1', JSON.stringify(myMessage));
  //document.getElementById("inMsg1").value = "On-Line!";
};
	


function JCom_send() {
	//var myMessage = document.getElementById("msg1").value;
	var myMessage = {
		mto: "Dean",
		mfrom: "Edgar",
		mcmd: "sMSG",
		mid: "0532",
		mparams: "A,B,C",
		mmsg1: "Hello world",
		mmsg2: "This is it",
        foo: document.getElementById("msg1").value
      };
	ortcClient.send('EDS1', JSON.stringify(myMessage));
	//document.getElementById("msg1").value = "";
}