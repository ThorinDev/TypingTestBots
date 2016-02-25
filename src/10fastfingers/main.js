var numberOfWordsPerMinute = 400;

$( "#inputfield" ).keyup(function() { $("#inputfield").val( $(".highlight").text() )});
for (i=1; i <=numberOfWordsPerMinute; i++) {
  var e = $.Event("keyup");
  e.which = e.charCode = e.keyCode = 32;
  $("#inputfield").trigger(e);
}
