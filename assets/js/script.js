// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
console.log(dayjs().format("dddd, MMM D, YYYY"));

var currentTimeEl = $("#currentDay");
var saveButton = $(".btn")
var descriptionEl = $(".description")
// var timeClass = $(".time-block")
var currentHour = dayjs().hour();
console.log(currentHour);



currentTimeEl.text(dayjs().format("dddd, MMM D, YYYY"))





  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //Get parent id 

saveButton.each(function(){
  $(this).on("click", function(e){
    e.preventDefault();
    var descriptionText = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    
    
    localStorage.setItem(timeBlock, descriptionText)
  })
})

 
  
  
 
 $("#hour-9 .description").val(localStorage.getItem("hour-9"))
 $("#hour-10 .description").val(localStorage.getItem("hour-10"))
 $("#hour-11 .description").val(localStorage.getItem("hour-11"))
 $("#hour-12 .description").val(localStorage.getItem("hour-12"))
 $("#hour-13 .description").val(localStorage.getItem("hour-13"))
 $("#hour-14 .description").val(localStorage.getItem("hour-14"))
 $("#hour-15 .description").val(localStorage.getItem("hour-15"))
 $("#hour-16 .description").val(localStorage.getItem("hour-16"))
 $("#hour-17 .description").val(localStorage.getItem("hour-17"))




  function hourUpdater() {

  
  $(".time-block").each(function(){
    var hour = parseInt($(this).attr("id").split("hour-")[1])
    if (hour === currentHour){
      $(this).addClass("present")
    }else if (hour < currentHour){
      $(this).addClass("past")
    }else {
      $(this).addClass("future")
    }
  }
  )}
 



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
hourUpdater();

