var hour = 0;
var min = 0;
var sec = 0;
var ms = 0;
var timer = null;
var count = 0;
//点击第一个按钮
$('.bnt button:eq(0)').click(function () {
    if (!timer) {
        alert("The Timer Tracker hasn't started!");
        return;
    }
    count++;
    var right1 = "<span class='right'>" + $('#showtime').text() + "</span>";
    var insertStr = "<div><span class='left'>Record" + count + "</span>" + right1 + "</div>";
    $("#record").prepend($(insertStr));
});
//点击第二个按钮
$('.bnt button:eq(1)').click(function () {
    clearInterval(timer);
    timer = setInterval(show, 10)
});
$(".bnt button:eq(2)").click(function () {
    clearInterval(timer);
});
$(".bnt button:eq(3)").click(function () {
    clearInterval(timer);
    min = 0;
    sec = 0;
    ms = 0;
    count = 0;
    $('#showtime span:eq(0)').html('00');
    $('#showtime span:eq(2)').html('00');
    $('#showtime span:eq(4)').html('00');
    $('#record').html('');
});
//生成时间
function show() {
    ms++;
    if (sec == 60) {
        min++;
        sec = 0;
    }
    if (ms == 100) {
        sec++;
        ms = 0;
    }
    var msStr = ms;
    if (ms < 10) {
        msStr = "0" + ms;
    }
    var secStr = sec;
    if (sec < 10) {
        secStr = "0" + sec;
    }
    var minStr = min;
    if (min < 10) {
        minStr = "0" + min;
    }
    $('#showtime span:eq(0)').html(minStr);
    $('#showtime span:eq(2)').html(secStr);
    $('#showtime span:eq(4)').html(msStr);
}