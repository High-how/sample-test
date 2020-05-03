$(function () {

  $.extend($.validator.messages, {
    email: "メールアドレスを入力してください",
  });

  // メソッドの定義
  var methods = {
    email: function (value, element) { // メールアドレスの正規表現
      return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(value);
    },
    password: function (value, element) { 
      return this.optional(element) || /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i.test(value);
    },
    family_name_kanji:function (value, element) { 
      return this.optional(element) || /^[^\x01-\x7E]$/i.test(value);
    },
    first_name_kanji:function (value, element) { 
      return this.optional(element) || /^[^\x01-\x7E]$/i.test(value);
    },
    family_name_kana:function (value, element) { 
      return this.optional(element) || /^[^\x01-\x7E]$/i.test(value);
    },
    first_name_kana:function (value, element) { 
      return this.optional(element) || /^[^\x01-\x7E]$/i.test(value);
    },
  }

  $.each(methods, function (key) {
    $.validator.addMethod(key, this);
  });

  $("new__main__middle").validate({
    rules : {
      nickname: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true, 
        rangelength: [7, 128],
        password: true
      },
      pass: {
        required: true,
        password: true,
        equalTo: "#password"
      },
      family_name_kanji: {
        required: true,
        family_name_kanji: true
      },
      first_name_kanji: {
        required: true,
        first_name_kanji: true
      },
      family_name_kana: {
        required: true,
        family_name_kana: true
      },
      first_name_kana: {
        required: true,
        first_name_kana: true
      },
      year: {
        required: true
      },
      month: {
        required: true
      },
      day: {
        required: true
      },
    },

    messages: {
      nickname: {
        required: "ニックネームを入力してください"
      },
      email: {
        required: "メールアドレスを入力してください",
        email: "フォーマットが不適切です"
      },
      password: {
        required: "パスワードを入力してください", 
        rangelength: "7文字以上128文字以下で入力してください",
        password: "英字と数字両方を含むパスワードを設定してください"
      },
      pass: {
        required: "パスワードを入力してください",
        password: "パスワードが正しくありません",
      },
      family_name_kanji: {
        required: "姓を入力してください",
        family_name_kanji: "全角で入力してください"
      },
      first_name_kanji: {
        required: "名を入力してください",
        first_name_kanji: "全角で入力してください"
      },
      family_name_kana: {
        required: "姓カナを入力してください",
        family_name_kana: "全角で入力してください"
      },
      first_name_kana: {
        required: "名カナを入力してください",
        first_name_kana: "全角で入力してください"
      },
      year: {
        required: "生年月日を入力してください"
      },
      month: {
        required: "生年月日を入力してください"
      },
      day: {
        required: "生年月日を入力してください"
      },
    },

    errorClass: "error",
    errorElement: "p",
    validClass: "valid",
  })

  $("#nickname, #email, #password, #pass, #family_name_kanji, #first_name_kanji, #family_name_kana, #first_name_kana, #year, #month, #day").blur(function () {
    $(this).valid();
  });
});