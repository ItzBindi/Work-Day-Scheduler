// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
console.log(dayjs().format("dddd, MMM D, YYYY"));

var currentTimeEl = $("#currentDay");
var saveButton = $(".btn")
var descriptionEl = $(".description")
var timeClass = $(".time-block")
var currentHour = dayjs().hour();



currentTimeEl.text(dayjs().format("dddd, MMM D, YYYY"))




$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

saveButton.each(function(){
  $(this).on("click", function(e){
    e.preventDefault();
    var descriptionText = $(this).siblings(".description").val();
    console.log("working", descriptionText);
    saveInLocalStorage(descriptionText);
  })
})

 function saveInLocalStorage(descriptionText){
  localStorage.setItem("Work To Do", descriptionText)
  console.log(descriptionText);
 }

timeClass.each(function(){
  var time = $(this)
  var timeId = parseInt(time.attr("id"))

  time.removeClass("past present future")
  
  if (timeId === currentHour){
    time.addClass("present")
  }else if (timeId < currentHour){
    time.addClass("past")
  }else {
    time.addClass("future")
  }
})


  // })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

