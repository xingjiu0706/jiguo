// var lis = document.getElementsByClassName('num')[0].getElementsByTagName('li');
var banner = document.getElementsByClassName('hot')[0];
var lis = document.getElementsByClassName('uls')[0].getElementsByTagName('li');

var timer = null,
    timer_ = null;
var num = 1;
banner.scrollLeft = lis[0].offsetWidth;

function auto() {
    timer = setInterval(function() {
        clearInterval(timer_);
        num++;
        if (num >= lis.length) {
            num = 1;
            banner.scrollLeft = 0;
        }
        var step = 0;
        var maxstep = 40;
        var start = banner.scrollLeft;
        var end = lis[0].offsetWidth * num;
        var evestep = (end - start) / maxstep;
        timer_ = setInterval(function() {
            step++;
            if (step >= maxstep) {
                step = 0;
                clearInterval(timer_);
            }
            start = start + evestep;
            banner.scrollLeft = start;
        }, 30);
    }, 3000);
}
auto();
//登录
$('#deng').on('click', function() {
    $('.hide').css('display', 'block');
});
$('#cha').on('click', function() {
    $('.hide').css('display', 'none');
});
$('#denglu').on('click', function() {
    $.ajax({
        url:'http://192.168.1.64:3000/users/login',
        type:'post',
        data:{
            username: $('#user').val(),
            password: $('#pass').val()
        },
        success:function(data){
            console.log(data)
            alert(data.msg)
        },
        dataType:'json',
    })
})
// 锚点跳转
window.onscroll = function(){
    if(document.documentElement.scrollTop>300){
        $('#anchor').fadeIn(2000)
    }
    else if(document.documentElement.scrollTop<300){
        $('#anchor').fadeOut(500)
    }
}

anchor.onclick = function(){
    time = setInterval(function(){
        var st = document.documentElement.scrollTop -=20;
        if(st<=0){
            clearInterval(time);
        }
    },10)
}