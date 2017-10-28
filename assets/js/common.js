// common.js

$(document).ready(function () {
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
    if ($(window).width() >= 768) {
        $('.cv-section').visibility({
            once: false,
            onOnScreen: function () {
                $('.ui.following.menu .item[href$=' + $(this).attr('id') + ']').addClass('active');
            },
            onOffScreen: function () {
                $('.ui.following.menu .item[href$=' + $(this).attr('id') + ']').removeClass('active');
            }
        });
    };
});

// version
function updateVersion(timestamp) {
    $('#version').text(moment(timestamp).fromNow());
};
var updateAt = $('meta[name=updated_at]').attr('content');
updateVersion(updateAt);
setInterval(function () {
    updateVersion(updateAt);
}, 15000);

$('.ui.dropdown').dropdown();

if ($(window).width() >= 768) {
    $('.ui.sticky').sticky();
};