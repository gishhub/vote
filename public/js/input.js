var count = 1;

jQuery(document).ready(function($) {
  $("#add_btn").click(function() {
    var original = $("#choice"+count);
    var cloned = $(original).clone();
    $(original).after(cloned);

    count++;
    $(cloned).attr("id", "choice"+count);
    $(cloned).attr("name", "choice"+count);
    $(cloned).attr("value", "");
    $(cloned).attr("placeholder", "Choice"+count);

    if (count == 5) {
      $("#add_btn").attr("disabled", true);
    }
  });
});
