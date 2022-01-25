
var momentToday = moment().format("dddd, MMMM Do YYYY");

var hours = Number(moment().format("hh"));

$("#currentDay").text(momentToday);

$("#btn-one").on('click', function(){
    localStorage.setItem("9AM", $('#nine').val());
})
$("#btn-two").on('click', function(){
    localStorage.setItem("10AM", $('#ten').val());
})
$("#btn-three").on('click', function(){
    localStorage.setItem("11AM", $('#eleven').val());
})
$("#btn-four").on('click', function(){
    localStorage.setItem("12PM", $('#twelve').val());
})
$("#btn-five").on('click', function(){
    localStorage.setItem("1PM", $('#one').val());
})

$("#btn-six").on('click', function(){
    localStorage.setItem("2PM", $('#two').val());
})

$("#btn-seven").on('click', function(){
    localStorage.setItem("3PM", $('#three').val());
})

$("#btn-eight").on('click', function(){
    localStorage.setItem("4PM", $('#four').val());
})

$("#btn-nine").on('click', function(){
    localStorage.setItem("5PM", $('#five').val());
})

$("#nine").val(localStorage.getItem("9AM"));
$("#ten").val(localStorage.getItem("10AM"));
$("#eleven").val(localStorage.getItem("11AM"));
$("#twelve").val(localStorage.getItem("12PM"));
$("#one").val(localStorage.getItem("1PM"));
$("#two").val(localStorage.getItem("2PM"));
$("#three").val(localStorage.getItem("3PM"));
$("#four").val(localStorage.getItem("4PM"));
$("#five").val(localStorage.getItem("5PM"));

$('tr').each(hours, function(index, value){
    if(Number(value.dataset.hour) > hours){
        $(this).next().addClass("future");
    }else if(Number(value.dataset.hour) == hours){
        $(this).next().addClass("present");
    }else{
        $(this).next.addClass("past");
    }
})