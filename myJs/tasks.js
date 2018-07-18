
/*
pass in arraw data to this function
*/
function showTasks() {
	
var str1 = "";
for (var i=0;i<8;++i)
{
str1 += ' <li> ';
str1 += ' <a href="#"> ';
str1 += '   <h5> ';
str1 += ' 	Update Web Site Jobs Openings ';
str1 += ' 	<small class="pull-right">2'+i+'%</small> ';
//str1 += '   </h5> ';
str1 += '   <div class="progress xs"> ';
str1 += ' 	<div class="progress-bar progress-bar-aqua" style="width: 2'+i+'%" role="progressbar" ';
str1 += ' 		 aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> ';
str1 += ' 	  <span class="sr-only">20% Complete</span> ';
str1 += ' 	</div> ';
str1 += '   </div> ';
str1 += '   </h5> ';
str1 += ' </a> ';
str1 += ' </li> ';
};
document.getElementById("appTasks_txt").innerHTML = str1;
document.getElementById("appTasks_cnt").innerHTML = "You have "+i+" Tasks";
document.getElementById("appTasks_cnt2").innerHTML = i;

}