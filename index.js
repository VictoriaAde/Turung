google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Token", "Percent"],
    ["Founders and Advisors", 14],
    ["Marketing and R$D", 25],
    ["Reserve", 10],
    ["Network", 10],
    ["Operation", 10],
    ["Liquidity", 20],
    ["Staking", 15],
    ["Community and Daopad sales", 1],
  ]);

  var options = { title: "Chart", width: 650, height: 550 };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

const currentDate = document.getElementById("current-year");
const [, , year] = new Date().toLocaleDateString("en-US").split("/");
currentDate.innerText = year;
