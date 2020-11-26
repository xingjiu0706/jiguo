$('.nav').find('a').on('click',function(){
    $('.nav').find('a').removeClass('light')
    $(this).addClass('light')
})
$('.nav_s span').on('click',function(){
    // $('.nav span').removeClass('black')
    // $(this).addClass('black')
    // $('.nav span').removeClass('black')
    // $(this).addClass('black')
})
  // 数据请求
  function aj_pbulic(){
  
    if(window.XMLHttpRequest){
      var ajax_ = new XMLHttpRequest();
    }
    else{
      var ajax_ = new ActiveXObject('Microsoft.XMLHTTP');
    }
      ajax_.open('get', 'http://192.168.1.64:3000/useing/master', true);
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
  aj_pbulic();
  //点击加载更多
  $('.more').on('click',function(){
    $('#xia').hide();
    $('#yuan').show();
    var lis = $('#lis').html()
    lis += $('#list').html()
    $('#lis').html(lis);
    aj_pbulic()
  })

  function ajax_public(){
    if(window.XMLHttpRequest){
      var ajax_ = new XMLHttpRequest();
    }
    else{
      var ajax_ = new ActiveXObject('Microsoft.XMLHTTP');
    }
      ajax_.open('get', 'http://192.168.1.64:3000/useing/public', true);
      ajax_.send();
      ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4 && ajax_.status == 200){
          $('#list').html('');
          var data = ajax_.responseText;
          /* 4.数据 */
          data = JSON.parse(data);
          console.log(data);
          var dot_tem = doT.template(document.getElementById('list_template').innerText);
          list.innerHTML = dot_tem(data);
        }
    }
  }
  function ajax_master(){
    if(window.XMLHttpRequest){
      var ajax_ = new XMLHttpRequest();
    }
    else{
      var ajax_ = new ActiveXObject('Microsoft.XMLHTTP');
    }
      ajax_.open('get', 'http://192.168.1.64:3000/useing/master', true);
      ajax_.send();
      ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4 && ajax_.status == 200){
          $('#list').html('');
          var data = ajax_.responseText;
          /* 4.数据 */
          data = JSON.parse(data);
          console.log(data);
          var dot_tem = doT.template(document.getElementById('list_template').innerText);
          list.innerHTML = dot_tem(data);
        }
    }
  }
$('.all').on('click',function(){
  $('#list').html('<h1>页面加载中</h1>');
  ajax_master()
  $('#more').find('span').html('只有这么多');
})
  $('.applying').on('click',function(){
    $('#list').html('<h1>页面加载中</h1>');
    ajax_master()
    $('#more').find('span').html('只有这么多');
  })
  $('.useing').on('click',function(){
    $('#list').html('<h1>页面加载中</h1>');
    ajax_master()
    $('#more').find('span').html('只有这么多');
  })
  $('.over').on('click',function(){
    $('#list').html('<h1>页面加载中</h1>');
    ajax_master()
    $('#more').find('span').html('只有这么多');
  })