setInterval(function(){
    $('#input').val($("#currentword").text()+' ');
    var keyup=jQuery.Event('keyup');
    keyup.which=32;$('#input').trigger(keyup);
}, pa
