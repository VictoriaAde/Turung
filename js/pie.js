// chart representation

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ["Token", "Percent"],
    ["Founders and Advisors", 14],
    ["Marketing and R$D", 25],
    ["Reserve", 10],
    ["Network", 10],
    ["Operation", 10],
    ["Liquidity", 20],
    ["Staking", 10],
    ["Community and Daopad sales", 1],
  ]);

  const options =
    window.innerWidth < 506
      ? {
          title: "",
          width: 418,
          height: 350,
          fontName: "Montserrat",
          legend: {
            position: "top",
            maxLines: 4,
            alignment: "start",
            fontSize: 17,
            textStyle: {
              color: "#979797",
            },
          },
          chartArea: { left: 0, top: 140, width: "80%", height: "80%" },
          titleTextStyle: {
            color: "#979797",
            fontName: "Montserrat",
            fontSize: 17,
          },
          backgroundColor: {
            fill: "#000000",
            fillOpacity: 0.1,
          },
        }
      : {
          title: "",
          width: 500,
          height: 500,
          hAxis: {
            textStyle: { color: "#979797" },
          },
          chartArea: { left: 0, top: 100, width: "70%", height: "70%" },
          backgroundColor: {
            fill: "#000000",
            fillOpacity: 0.1,
          },
          // colors: [
          //   "#e0440e",
          //   "#f3b49f",
          //   "#e6693e",
          //   "#e0440e",
          //   "#e6693e",
          //   "#f6c7b6",
          //   "#ec8f6e",
          //   "#e0440e",
          // ],
          is3D: true,
          vAxis: {
            textStyle: {
              color: "#979797",
            },
          },
          legend: {
            position: "top",
            maxLines: 3,
            alignment: "start",
            textStyle: {
              color: "#979797",
            },
            fontSize: 17,
          },
          titleTextStyle: {
            color: "#979797",
            fontName: "Montserrat",
            fontSize: 17,
          },
          fontName: "Montserrat",
        };

  const chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}
