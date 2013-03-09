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
  
  $("#question_form").validate({
    rules: {
      nickname: {
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
      }
    },
    messages: {
      nickname: {
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
      }
    },
    errorClass: "alert-error",
    errorElement: "alert"
  });
});
