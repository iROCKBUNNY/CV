// common.js

$(document).ready(function () {
    if ($(window).width() >= 768) {
        $('.cv-section').visibility({
            once: false,
            onTopPassed: function () {
                $('.ui.following.menu .item.active').removeClass('active');
                $('.ui.following.menu .item[href$=' + $(this).attr('id') + ']').addClass('active');
            },
            onBottomPassedReverse: function () {
                $('.ui.following.menu .item.active').removeClass('active');
                $('.ui.following.menu .item[href$=' + $(this).attr('id') + ']').addClass('active');
            }
        });
    } else {
        $('.ui.sidebar').sidebar('attach events', '.toc.item');
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