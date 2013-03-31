jQuery(document).ready(function($) {  
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
      text: {
        required: true
      },
      choice1: {
        required: true
      },
      choice2: {
        required: true
      },
      choice4: {
        "check_choice1": ["#choice3", "#choice4"]
      },
      choice5: {
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
      text: {
        required: "質問の詳細は入力必須項目です"
      },
      choice1: {
        required: "選択肢は最低2つ入力してください"
      },
      choice2: {
        required: "選択肢は最低2つ入力してください"
      },
      choice4: {
        "check_choice1": "選択肢は詰めて入力してください"
      },
      choice5: {
        "check_choice2": "選択肢は詰めて入力してください"
      }
    },
    errorClass: "alert-error",
    errorElement: "alert"
  });
});

jQuery.validator.addMethod("check_choice1", function(value, element, params) {
  if ($(params[0]).val() == "" && $(params[1]).val() != "") {
    return false;
  }

  return true;
});

jQuery.validator.addMethod("check_choice2", function(value, element, params) {
  if ($(params[0]).val() == "" && $(params[1]).val() != "") {
    return false;
  }

  return true;
});