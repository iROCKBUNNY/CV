// common.js

$(document).ready(function () {
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
    if ($(window).width() >= 768) {
        $('.cv-section').visibility({
            once: false,
            offset: 1,
            onTopPassed: function () {
                $('.ui.following.menu .item.active').removeClass('active');
                $(`.ui.following.menu .item[href$=${$(this).attr('id')}]`).addClass('active');
            },
            onBottomPassedReverse: function () {
                $('.ui.following.menu .item.active').removeClass('active');
                $(`.ui.following.menu .item[href$=${$(this).attr('id')}]`).addClass('active');
            }
        });
    };
});

// version
dayjs.extend(dayjs_plugin_relativeTime);
function updateVersion(timestamp) {
    $('#version').text(dayjs(timestamp).fromNow());
};
var updateAt = $('meta[name=updated_at]').attr('content');
updateVersion(updateAt);
$('#version-icon').addClass('green');
setInterval(function () {
    updateVersion(updateAt);
}, 15000);

$('.ui.dropdown').dropdown();

if ($(window).width() >= 768) {
    $('.ui.sticky').sticky();
};