
/*
<ul class="chat">

	<li class="left clearfix"><span class="chat-img pull-left">
		<img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" />
	</span>
		<div class="chat-body clearfix">
			<div class="header">
				<strong class="primary-font">Jack Sparrow</strong> <small class="pull-right text-muted">
					<span class="glyphicon glyphicon-time"></span>12 mins ago</small>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
				dolor, quis ullamcorper ligula sodales.
			</p>
		</div>
	</li>
	
	<li class="right clearfix"><span class="chat-img pull-right">
		<img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" />
	</span>
		<div class="chat-body clearfix">
			<div class="header">
				<small class=" text-muted"><span class="glyphicon glyphicon-time"></span>13 mins ago</small>
				<strong class="pull-right primary-font">Bhaumik Patel</strong>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
				dolor, quis ullamcorper ligula sodales.
			</p>
		</div>
	</li>
	
	<li class="left clearfix"><span class="chat-img pull-left">
		<img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" />
	</span>
		<div class="chat-body clearfix">
			<div class="header">
				<strong class="primary-font">Jack Sparrow</strong> <small class="pull-right text-muted">
					<span class="glyphicon glyphicon-time"></span>14 mins ago</small>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
				dolor, quis ullamcorper ligula sodales.
			</p>
		</div>
	</li>
	<li class="right clearfix"><span class="chat-img pull-right">
		<img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" />
	</span>
		<div class="chat-body clearfix">
			<div class="header">
				<small class=" text-muted"><span class="glyphicon glyphicon-time"></span>15 mins ago</small>
				<strong class="pull-right primary-font">Bhaumik Patel</strong>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
				dolor, quis ullamcorper ligula sodales.
			</p>
		</div>
	</li>
	
</ul>
*/

function initMessages() {
	// get data then call loads
	
}
function updateMessStatus() {
	// chatBoxStatus
	// chatBoxSubTitle
	var str0 =  "<p>Updated: " + dateTime1('s')+"</p>";
	document.getElementById("chatBoxSubTitle").innerHTML = str0;
	
	var str1 = "&nbsp;&nbsp;&nbsp;Messages Status: ABCD";
	document.getElementById("chatBoxStatus").innerHTML = str1;
}
function loadMessagesL() {
var str1 = "";
// left
str1 += '<li class="left clearfix"><span class="chat-img pull-left"> ';
str1 += '		<img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" /> ';
str1 += '	</span> ';
str1 += '		<div class="chat-body clearfix"> ';
str1 += '			<div class="header"> ';
str1 += '				<strong class="primary-font">Jack Sparrow</strong> <small class="pull-right text-muted"> ';
str1 += '					<span class="glyphicon glyphicon-time"></span>'+dateTime1('t')+'</small> ';
str1 += '			</div> ';
str1 += '			<p> ';
str1 += '				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare ';
str1 += '				dolor, quis ullamcorper ligula sodales. ';
str1 += '			</p> ';
str1 += '		</div> ';
str1 += '	</li> ';
	
document.getElementById("chatBox").innerHTML += str1;
updateMessStatus();
}

function loadMessagesR() {
var str1 = "";
// right
str1 += '<li class="right clearfix"><span class="chat-img pull-right"> ';
str1 += '		<img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" /> ';
str1 += '	</span> ';
str1 += '		<div class="chat-body clearfix"> ';
str1 += '			<div class="header"> ';
str1 += '				<small class=" text-muted"><span class="glyphicon glyphicon-time"></span>'+dateTime1('t')+'</small> ';
str1 += '				<strong class="pull-right primary-font">Bhaumik Patel</strong> ';
str1 += '			</div> ';
str1 += '			<p> ';
str1 += '				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare ';
str1 += '				dolor, quis ullamcorper ligula sodales. ';
str1 += '			</p> ';
str1 += '		</div> ';
str1 += '	</li> ';

document.getElementById("chatBox").innerHTML += str1;
updateMessStatus();
	
}


