// set-version.js

var lastCommitTime = '2016-10-03T00:00:00';
var version = moment(lastCommitTime, 'YYYY-MM-DDTh:mm:ss').utcOffset(8).fromNow();

$('#version')
    .append(
        $('<i>')
        .addClass('fa fa-refresh')
    )
    .append(' Updated ')
    .append(version);
