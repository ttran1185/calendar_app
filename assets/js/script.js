const m = moment();

var words;
var hourInfo;


console.log(m.format("MMM Do YYYY"));

$("#currentDay").text(m.format("MMM Do YYYY"));


$(document).ready( function() {
    colorChange ();
    renderText ();
});

function colorChange () {
    
    var realTime = moment().hours();

    console.log("Current Time " + realTime);
    

    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        console.log(timeTest);
        
        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

$(".saveBtn").click(function() {
    words = $(this).siblings(".input").val();
    console.log(words);
    hourInfo = $(this).siblings(".hour").text();
    console.log(hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(words));
    
    colorChange ();
    renderText ();
})

function renderText () {
    var saveWords8 = JSON.parse(localStorage.getItem("8:00 AM"));
    $("#8").val("");
    $("#8").val(saveWords8);
    
    var saveWords9 = JSON.parse(localStorage.getItem("9:00 AM"));
    $("#9").val("");
    $("#9").val(saveWords9);
    
    var saveWords10 = JSON.parse(localStorage.getItem("10:00 AM"));
    $("#10").val("");
    $("#10").val(saveWords10);
    
    var saveWords11 = JSON.parse(localStorage.getItem("11:00 AM"));
    $("#11").val("");
    $("#11").val(saveWords11);
    
    var saveWords12 = JSON.parse(localStorage.getItem("12:00 PM"));
    $("#12").val("");
    $("#12").val(saveWords12);

    var saveWords1 = JSON.parse(localStorage.getItem("1:00 PM"));
    $("#1").val("");
    $("#1").val(saveWords1);

    var saveWords2 = JSON.parse(localStorage.getItem("2:00 PM"));
    $("#2").val("");
    $("#2").val(saveWords2);

    var saveWords3 = JSON.parse(localStorage.getItem("3:00 PM"));
    $("#3").val("");
    $("#3").val(saveWords3);

}

