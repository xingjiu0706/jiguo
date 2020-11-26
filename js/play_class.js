// 点击效果
$('.nav').find('a').on('click',function(){
    $('.nav').find('a').removeClass('light')
    $(this).addClass('light')
})