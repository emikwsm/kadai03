console.log("はじめてのジャバスクリプト");
console.log("3")
console.log(23+5)
console.log(2000-1800)
console.log("18+5")

// 変数=箱のお話(数字で始めたらダメ、日本語ではじめたらダメ)

var kingaku = 100;
console.log(kingaku, "kingakuno変数");

// 条件に応じて処理を分けること 
// var singou= "あお";

// if(singou ==="あか"){
//     console.log("止まれ");
// }
// else if(singou ==="あお"){
//     console.log("進め");
// }
// else if(singou ==="きいろ"){
//     console.log("注意");
// }

// var point=81
// if (point>80){
//     console.log("素晴らしいおめでとう！")
// }
// else{
//     console.log("もっと頑張りましょう")
// }

// var random = Math.floor(Math.random() * 3+1);
// console.log(random,"ランダムな数字の箱");

// if(random ===1){
//     console.log("大吉");
// }
// else if(random ===2){
//     console.log("中吉");
// }
// else if(random ===3){
//     console.log("小吉");
// }

// jQueryのおまじない 関数=おまじない

$(".aa").on('click', function(){

  var random = Math.floor(Math.random() * 3+1);
console.log(random,"ランダムな数字の箱");

if(random ===1){
    console.log("グー");
    $("h1").html("グー");
    $(".result").html("あいこ");
}
else if(random ===2){
    console.log("チョキ");
    $("h1").html("チョキ");
    $(".result").html("勝ち");
}
else if(random ===3){
    console.log("パー");
    $("h1").html("パー");
    $(".result").html("負け");
}
});

$(".bb").on('click', function(){

    var random = Math.floor(Math.random() * 3+1);
  console.log(random,"ランダムな数字の箱");
  
  if(random ===1){
      console.log("グー");
      $("h1").html("グー");
      $(".result").html("負け");
  }
  else if(random ===2){
      console.log("チョキ");
      $("h1").html("チョキ");
      $(".result").html("あいこ");
  }
  else if(random ===3){
      console.log("パー");
      $("h1").html("パー");
      $(".result").html("勝ち");
  }
  });

  $(".cc").on('click', function(){

    var random = Math.floor(Math.random() * 3+1);
  console.log(random,"ランダムな数字の箱");
  
  if(random ===1){
      console.log("グー");
      $("h1").html("グー");
      $(".result").html("勝ち");
  }
  else if(random ===2){
      console.log("チョキ");
      $("h1").html("チョキ");
      $(".result").html("負け");
  }
  else if(random ===3){
      console.log("パー");
      $("h1").html("パー");
      $(".result").html("あいこ");
  }
  });

  
 

   





