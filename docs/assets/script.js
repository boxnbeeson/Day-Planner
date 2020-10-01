$(document).ready(function () {
  // listen for save button clicks

  $(".saveBtn").on("click", function () {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save the value in localStorage as time
    localStorage.setItem(time, JSON.stringify(value));
  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        console.log("past");
      };
      // if the current hour is greater than the block hour
      // then add class "past"
      if (blockHour < currentHour) {
        $(this).addClass("past");
      }
      // if they are equal
      // then remove class "past" and add class "present"
      else if (blockHour == currentHour) {
        $(this).removeClass("past").addClass("present");
      }
      // else
      // remove class "past", remove class "present", add class "future"
      else if (blockHour > currentHour) {
        $(this).removeClass("past").removeClass("present").addClass("future");
      }
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  // which means execute hourUpdater function every 15 seconds
  $(function () {
    setInterval(hourUpdater, 15000);
  });
  // load any saved data from localStorage
  $("#hr9").text(JSON.parse(localStorage.getItem("hour-9")));
  $("#hr10").text(JSON.parse(localStorage.getItem("hour-10")));
  $("#hr11").text(JSON.parse(localStorage.getItem("hour-11")));
  $("#hr12").text(JSON.parse(localStorage.getItem("hour-12")));
  $("#hr13").text(JSON.parse(localStorage.getItem("hour-13")));
  $("#hr14").text(JSON.parse(localStorage.getItem("hour-14")));
  $("#hr15").text(JSON.parse(localStorage.getItem("hour-15")));
  $("#hr16").text(JSON.parse(localStorage.getItem("hour-16")));
  $("#hr17").text(JSON.parse(localStorage.getItem("hour-17")));
  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
