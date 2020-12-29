// const modal = document.querySelector(".modal");
// const previews = document.querySelectorAll(".gallery img");
// const original = document.querySelector(".full-img");
// const imgText = document.querySelector(".caption");

// previews.forEach((preview)  => { 
//   previews.addEventListener("click",() =>{
// modal.classList.add("open");
// original.classList.add("open");
//Dynamic change text and image
// const originalsrc = preview.getAttribute("data-original");
// originalsrc = './full/${originalSrc}';
// const altText = previews.alt;
// HTMLTableCaptionElement.textContent = altText;
//   });
// });
//   modal.addEventListener("click" , (e) =>{
//   if(e.target.classList.contains("modal")){
//       modal.classList.remove("open");
//       original.classList.remove("open");
//     }

// });

$(document).ready(function(){
  $(".img1").click(function(){
    $(".design").toggle();
    $(".text-click").toggle();
  })

  $(".img2").click(function(){
    $(".dev").toggle();
    $(".text-click2").toggle();
  })

  $(".img3").click(function(){
    $(".product").toggle();
    $(".text-click3").toggle();
  })
});


 