// set-version.js

function updateVersion() {
    $.getJSON('https://api.github.com/repos/iROCKBUNNY/about-qutong', function(data) {
        $('#version').html('<i class="fa fa-refresh fa-spin fa-fw"></i> Updated ' + moment(data.pushed_at).fromNow());
    });
};
updateVersion();
setInterval(updateVersion(), 15000);
