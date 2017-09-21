//check off todos by clicking
$("ul").on("click","li",function() {
  $(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click","span",function(event) {
    $(this).parent().remove();
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13 ){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></<span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle("slow","linear");
});
