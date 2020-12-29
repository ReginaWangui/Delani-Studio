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
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

 