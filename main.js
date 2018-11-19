console.log("main.js ready")
/*==== vars ====*/
var menuBtn = document.getElementById("menu-btn"),
    phoneBtn = document.getElementById("phone-btn");
/*======= ============= =========*/

/*==== events ====*/
function menuEvent(){
  toggleThis(this,'active');
  nextSiblingToggle(menuBtn,'active');
}
function phoneEvent(){
  idToggle('phone','active')
}
/*======= ============= =========*/

/*==== events listeners ====*/
menuBtn.addEventListener("click",menuEvent,false);
phoneBtn.addEventListener("click",phoneEvent,false);
/*======= ============= =========*/

/*======= product detail =========*/
var pBtn = document.getElementsByClassName("product-button");

var details = document.getElementsByClassName("product-detail");


for (var i = 0; i < pBtn.length; i++) {

  pBtn[i].thisIndex = i + 1;

  pBtn[i].addEventListener("click",function(e){

  tagNameToggle('body','active',0);

  tabToggle(e.target.thisIndex,"product-detail"," active");

  })

}
/*======= product close =========*/
closeBtn = document.getElementsByClassName("closeBtn");

function closeProduct(){

  for (var i = 0; i < details.length; i++) {

    details[i].className = "product-detail";

    tagNameToggle('body','active',0);

  }

}

for (var i = 0; i < closeBtn.length; i++) {

  closeBtn[i].addEventListener("click",closeProduct,false);

}
/*======= scroll handlers =========*/
// var checkpoint = document.getElementsByClassName("checkpoint");
//
// window.onscroll = function(){
//   /*=== use first checkpoint if at the very top of the page ===*/
//   var checkpointFirst = document.getElementById("checkpoint-first");
//
//   var checkpointFirstBottom = checkpointFirst.clientHeight;
//
//   if (document.documentElement.scrollTop < checkpointFirstBottom) {
//
//     checkpointFirst.classList = "checkpoint-first active";
//
//   }else{
//
//     checkpointFirst.classList = "checkpoint-first";
//
//   }
//   /*=== ===*/
//   for (var i = 0; i < checkpoint.length; i++) {
//
//     var checkpointHeight = checkpoint[i].offsetTop - (checkpoint[i].clientHeight / 2);
//
//     var checkpointBottom = checkpoint[i].offsetTop + (checkpoint[i].clientHeight / 2);
//
//     if (document.documentElement.scrollTop > checkpointHeight && document.documentElement.scrollTop < checkpointBottom) {
//
//       checkpoint[i].classList = "checkpoint active";
//
//     }else{
//
//       checkpoint[i].classList = "checkpoint";
//
//     }
//
//   }
// }
