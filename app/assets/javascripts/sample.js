var nickname = '  (ニックネームを入力して下さい)';
var mail = '  (メールアドレスを入力して下さい)';
var password = '  (パスワードを入力して下さい)';
var family_name_kanji = '  (姓を入力して下さい)';
var first_name_kanji = '  (名を入力して下さい)';
var family_name_kana = '  (姓カナを入力して下さい)';
var first_name_kana = '  (名カナを入力して下さい)';
var year = '  (生年月日を入力して下さい)';
var post = '  (郵便番号を入力して下さい)';
var address = '  (都道府県を入力して下さい)';
var city = '  (市町村を入力して下さい)';
var number = '  (番地を入力して下さい)';

document.getElementsByClassName("new__main__middle").oninput = function() {
  var nicknameCheck = document.getElementsByClassName("new__main__middle").nicknamae.value;
  var mailCheck = document.getElementsByClassName("new__main__middle").email.value;
  var passwordCheck = document.getElementsByClassName("new__main__middle").password.value;
  var family_name_kanjiCheck = document.getElementsByClassName("new__main__middle").family_name_kanji.value;
  var first_name_kanjiCheck = document.getElementsByClassName("new__main__middle").first_name_kanji.value;
  var family_name_kanaCheck = document.getElementsByClassName("new__main__middle").family_name_kana.value;
  var first_name_kanaCheck = document.getElementsByClassName("new__main__middle").first_name_kana.value;
  var yearCheck = document.getElementsByClassName("new__main__middle").year.value;

  var NC = jg(nicknameCheck);
  var MC = jg(mailCheck);
  var PC = jg(passwordCheck);
  var FAC = jg(family_name_kanjiCheck);
  var FIC = jg(first_name_kanjiCheck);
  var faC = jg(family_name_kanaCheck);
  var fiC = jg(first_name_kanaCheck);
  var YC = jg(yearCheck);

  var flag = true;

  if( !NC ){
    document.getElementById('nickname-error').textContent = nickname;
    flag = false;
  } else {
    document.getElementById('nickname-error').textContent = "";
  }
  if( !MC ){
    document.getElementById('mail-error').textContent = mail;
    flag = false;
  } else {
    document.getElementById('mail-error').textContent = "";
  }
  if( !PC ){
    document.getElementById('password-error').textContent = password;
    flag = false;
  } else {
    document.getElementById('password-error').textContent = "";
  }
  if( !FAC ){
    document.getElementById('family_name_kanji-error').textContent = family_name_kanji;
    flag = false;
  } else {
    document.getElementById('family_name_kanji-error').textContent = "";
  }
  if( !FIC ){
    document.getElementById('first_name_kanji-error').textContent = first_name_kanji;
    flag = false;
  } else {
    document.getElementById('first_name_kanji-error').textContent = "";
  }
  if( !faC ){
    document.getElementById('family_name_kana-error').textContent = family_name_kana;
    flag = false;
  } else {
    document.getElementById('family_name_kana-error').textContent = "";
  }
  if( !fiC ){
    document.getElementById('first_name_kana-error').textContent = first_name_kana;
    flag = false;
  } else {
    document.getElementById('first_name_kana-error').textContent = "";
  }
  if( !YC ){
    document.getElementById('year-error').textContent = year;
    flag = false;
  } else {
    document.getElementById('year-error').textContent = "";
  }
  return flag;
}
function jg(mn) {
  var mn;
   if ( mn.length != 0 ) {
     mn = true;
     return mn;
   } else {
     mn = false;
     return mn;
   }
  }

  document.getElementsByClassName("send-new__main__middle").oninput = function() {


  }
