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
      ? { title: "Chart", width: 418, height: 350 }
      : {
          title: "Chart representation",
          width: 650,
          height: 550,
          hAxis: {
            textStyle: { color: "#FFF" },
          },
          backgroundColor: {
            fill: "#09233E",
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
              color: "#ffffff",
            },
          },
          legend: {
            textStyle: {
              color: "#ffffff",
            },
          },
          titleTextStyle: {
            color: "#ffffff",
          },
        };

  const chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

const currentDate = document.getElementById("current-year");
const [, , year] = new Date().toLocaleDateString("en-US").split("/");
currentDate.innerText = year;
//

// Read More

const moreBtn = document.querySelector(".more-btn");
moreBtn.addEventListener("click", changeClass);

// const moreBtn = document.querySelector(
//   forEach((more) => {
//     more.addEventListener("click", changeClass);
//   })
// );

function changeClass() {
  const moreStepThree = document.getElementById("more-three");
  const moreStepSix = document.getElementById("more-six");
  // moreText.classList.toggle("show");

  // const buttonText = moreText.classList.contains("show")
  //   ? "read less"
  //   : "read more";

  // step three
  if (moreStepThree.classList.contains("show")) {
    moreBtn.innerHTML = "read more";
    moreStepThree.classList.remove("show");
  } else {
    moreBtn.innerHTML = "read less";
    moreStepThree.classList.add("show");
  }
  //step six
  if (moreStepSix.classList.contains("show")) {
    moreBtn.innerHTML = "read more";
    moreStepSix.classList.remove("show");
  } else {
    moreBtn.innerHTML = "read less";
    moreStepSix.classList.add("show");
  }
  // moreBtn.forEach((btnText) => {
  //   btnText.innerHTML = buttonText;
  // });
}
