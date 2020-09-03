$(document).ready(function() {
    $('#nome, #mensagem, #email').characterCounter();
});

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});
