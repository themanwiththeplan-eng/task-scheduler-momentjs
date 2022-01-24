var today = new Date().toLocaleDateString();
var momentToday = moment(today).format("dddd, MMMM Do YYYY");
$("#currentDay").text(momentToday);