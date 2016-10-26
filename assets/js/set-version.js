// set-version.js

$.getJSON('https://api.github.com/repos/iROCKBUNNY/about-qutong', function(data) {
    $('#version')
        .append(
            $('<i>')
            .addClass('fa fa-refresh fa-spin fa-fw')
        )
        .append(' Updated ' + moment(data.pushed_at, 'YYYY-MM-DDTh:mm:ssZ').fromNow());
});