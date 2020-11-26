// 点击样式
$('.nav').find('a').on('click',function(){
    $('.nav').find('a').removeClass('light')
    $(this).addClass('light')
})
// 数据请求
function aj(){

  if(window.XMLHttpRequest){
    var ajax_ = new XMLHttpRequest();
  }
  else{
    var ajax_ = new ActiveXObject('Microsoft.XMLHTTP');
  }
    ajax_.open('get', 'http://192.168.1.64:3000/guid/hot', true);
    ajax_.send();
    ajax_.onreadystatechange = function () {
      if (ajax_.readyState == 4 && ajax_.status == 200){
        var data = ajax_.responseText;
        /* 4.数据 */
        data = JSON.parse(data);
        console.log(data);
  


        var dot_tem = doT.template(document.getElementById('list_template').innerText);
        list.innerHTML = dot_tem(data);
  
        $('.more #xia').show()
        $('.more #yuan').hide()

      }
  }
}
aj();
//点击加载更多
$('.more').on('click',function(){
  $('#xia').hide();
  $('#yuan').show();
  var lis = $('#lis').html()
  lis += $('#list').html()
  $('#lis').html(lis);
  aj()
})
