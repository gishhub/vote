var count = 2;

jQuery(document).ready(function($) {
  $("#add_btn").click(function() {
    var original = $("#choice"+count);
    var cloned = $(original).clone();
    $(original).after(cloned);

    count++;
    $(cloned).val("");
    $(cloned).attr("id", "choice"+count);
    $(cloned).attr("name", "choice"+count);
    $(cloned).attr("placeholder", "Choice"+count);

    if (count == 5) {
      $("#add_btn").attr("disabled", true);
    }
  });

jQuery.validator.addMethod("check_choice", function(value, element, params) {
  if ($(params[0]) != null && $(params[1]) != null) {
    if ($(params[0]).val() == "" && $(params[1]) != "") {
      return false;
    }
  }

  if ($(params[1]) != null && $(params[2]) != null) {
    if ($(params[1]).val() == "" && $(params[2]) != "") {
      return false;
    }
  }
});

  
  $("#question_form").validate({
    rules: {
      username: {
        required: true
      },
      password: {
        required: true
      },
      title: {
        required: true
      },
      description: {
        required: true
      },
      choice1: {
        required: true
      },
      choice2: {
        required: true
      },
      choice3: {
        "check_choice1": ["#choice3", "#choice4"]
      },
      choice4: {
        "check_choice2": ["#choice4", "#choice5"]
      }
    },
    messages: {
      username: {
        required: "ニックネームは入力必須項目です"
      },
      password: {
        required: "パスワードは入力必須項目です"
      },
      title: {
        required: "質問のタイトルは入力必須項目です"
      },
      description: {
        required: "質問の詳細は入力必須項目です"
      },
      choice1: {
        required: "選択肢は最低2つ入力してください"
      },
      choice2: {
        required: "選択肢は最低2つ入力してください"
      },
      choice3: {
        "check_choice1": "選択肢は詰めて入力してください"
      },
      choice4: {
        "check_choice2": "選択肢は詰めて入力してください"
      }
    },
    errorClass: "alert-error",
    errorElement: "alert"
  });
});

jQuery.validator.addMethod("check_choice1", function(value, element, params) {
  if ($(params[0]).val() == "" && $(params[1]) != "") {
    return false;
  }

  return true;
});

jQuery.validator.addMethod("check_choice2", function(value, element, params) {
  if ($(params[0]).val() == "" && $(params[1]) != "") {
    return false;
  }

  return true;
});