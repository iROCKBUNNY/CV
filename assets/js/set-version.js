// set-version.js

var lastCommitTime = '2016-10-11T03:47:05';
var version = moment(lastCommitTime, 'YYYY-MM-DDTh:mm:ss').utcOffset(8).fromNow();

$('#version')
    .append(
        $('<i>')
        .addClass('fa fa-refresh fa-spin fa-fw')
    )
    .append(' Updated ')
    .append(version);
