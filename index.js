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
      ? { title: "Chart", width: 418, height: 350 }
      : {
          title: "Chart representation",
          width: 650,
          height: 550,
          colors: [
            "#000",
            "#e0440e",
            "#f3b49f",
            "#000",
            "#e6693e",
            "#000",
            "#e6693e",
            "#f6c7b6",
            // "#000",
            // "#ec8f6e",
          ],
          is3D: true,
        };

  const chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

const currentDate = document.getElementById("current-year");
const [, , year] = new Date().toLocaleDateString("en-US").split("/");
currentDate.innerText = year;
