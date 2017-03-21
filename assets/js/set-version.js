// set-version.js

var pushedAt = 'loading';
$.getJSON('https://api.github.com/repos/iROCKBUNNY/about-qutong', function(data) {
    pushedAt = data.pushed_at;
});
function updateVersion(timestamp) {
    if (timestamp !== 'loading') {
        $('#version').html('<i class="fa fa-refresh fa-spin fa-fw"></i>Updated ' + moment(timestamp).fromNow());
    };
};
updateVersion(pushedAt);
setInterval(function () {
    updateVersion(pushedAt)
}, 15000);