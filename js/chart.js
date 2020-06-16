/* The line graph */

var ctx = document.getElementById('myChart');

let Hourly = [
  750,
  1250,
  1000,
  1500,
  2000,
  1500,
  1750,
  1100,
  1600,
  2200,
  1720,
  2250,
];
let Daily = [
  350,
  1750,
  1700,
  1470,
  1500,
  1800,
  1150,
  1180,
  1900,
  2300,
  1220,
  1250,
];
let Weekly = [
  750,
  1250,
  1900,
  1270,
  1900,
  1100,
  550,
  1980,
  1200,
  1300,
  420,
  950,
];
let Monthly = [
  370,
  1350,
  1900,
  460,
  750,
  1740,
  1740,
  480,
  1300,
  1200,
  430,
  850,
];
let cars = [
  '16-22',
  '23-29',
  '30-5',
  '6-12',
  '20-26',
  '27-3',
  '4-10',
  '11-17',
  '18-24',
  '25-31',
];

let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: cars,
    datasets: [
      {
        label: 'Traffic statistics',
        data: Hourly,
        lineTension: 0,
        backgroundColor: '#dcd6f3',
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    legend: false,
    responsive: true,
  },
});
/* the bar chart */

var ctx = document.getElementById('myBarChart');

var carNo = [50, 80, 180, 120, 250, 220, 120];
var days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: days,
    datasets: [
      {
        label: 'Traffic statistics',
        data: carNo,
        backgroundColor: '#5737c6',
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    legend: false,
    responsive: true,
  },
});

/* Pie chart */

var ctx = document.getElementById('myPieChart');

var amount = [20, 20, 60];
var device = ['Phones', 'Tablet', 'Desktop'];

var myBarChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: device,
    datasets: [
      {
        label: 'Mobile users',
        data: amount,
        backgroundColor: ['#badc58', '#7ed6df', '#5737c6'],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: 'right',
    },
  },
});
