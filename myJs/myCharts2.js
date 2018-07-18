// Load google charts

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Jobs', 'Hours per Day'],
  ['Type A', 8],
  ['Type b', 2],
  ['Type C', 2]
  //['Type D', 3],
  //['Gym', 2],
  //['Sleep', 7]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Average Week', 'width':400, 'height':230};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

//google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
      var data = google.visualization.arrayToDataTable([
        ["DOW", "Calls", { role: "style" } ],
        ["Mon", 8.94, "#b87333"],
        ["Tue", 10.49, "silver"],
        ["Wed", 19.30, "gold"],
        ["Thu", 21.45, "color: #e5e4e2"],
		["Fri", 8.94, "#b87333"],
        ["Sat", 10.49, "silver"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Calls per day",
        width: 470,
        height: 250,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }
  
     google.charts.setOnLoadCallback(drawChart3);
function drawChart3() {
      var data = google.visualization.arrayToDataTable([
        ["DOW", "Jobs", { role: "style" } ],
        ["Mon", 8.94, "#b87333"],
        ["Tue", 10.49, "silver"],
        ["Wed", 19.30, "gold"],
        ["Thu", 21.45, "color: #e5e4e2"],
		["Fri", 8.94, "yellow"],
        ["Sat", 10.49, "blue"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Jobs per day",
        width: 470,
        height: 250,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart3_values"));
      chart.draw(view, options);
  } 