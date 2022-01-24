var today = new Date().toLocaleDateString();
var momentToday = moment(today).format("dddd, MMMM Do YYYY");
$("#currentDay").text(momentToday);
var input = $(".form-control");
$(".btn").on('click', store);
var arr = [];
function store(){
$(".form-control").each(function(){
    arr.push(input.val())
    })
    console.log(arr);
}