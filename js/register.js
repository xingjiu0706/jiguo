yanzheng.addEventListener('click',click_close);

function click_close(){
    yanzheng.removeEventListener('click',click_close)
    var a_time=60;
    function asd(){
        a_time--;
        yanzheng.innerHTML=a_time;
        if(a_time==0){
        clearInterval(timer);
	    }
    }
    var timer = setInterval(asd,1000);
    setTimeout(click_begin,60000);
}
function click_begin(){
    yanzheng.innerHTML = '获取验证码';
    yanzheng.addEventListener('click',click_close);
}

$('#but').on('click',function(){
    $.ajax({
        url:'http://192.168.1.64:3000/users/register',
        type:'post',
        data:{
            phone:$('#tel').val(),
            code:$('#check').val(),
            username:$('#user').val(),
            password:$('#pass').val()
        },
        success:function(data){
            console.log(data)
            // alert(data.msg)
            if(data.status == 200 ){
                window.open('./index.html');
            }
        },
        dataType:'json',
    })
})
// $('input').on('focus',function(){
//     $(this).val('')
// })
// 正则验证
tel.onblur = function(){
    var reg = /^[1][34578]\d{9}/g;
    if(tel.value==''){
        tel.style.borderColor = 'red';
        return false;
    }
    else if(!reg.test(tel.value)){
        tel.style.borderColor = 'red';
        return false;
    }
    else{
        tel.style.borderColor = 'black';
        return true;
    }
}
user.onblur = function(){
    var reg = /[0-9a-z]{4,8}/ig;
    if(user.value==''){
        user.style.borderColor = 'red';
        return false;
    }
    else if(!reg.test(user.value)){
        user.style.borderColor = 'red';
        return false;
    }
    else{
        user.style.borderColor = 'black';
        return true;
    }
}
pass.onblur = function(){
    var reg = /[0-9a-z]{6,12}/ig;
    if(pass.value==''){
        pass.style.borderColor = 'red';
        return false;
    }
    else if(!reg.test(pass.value)){
        pass.style.borderColor = 'red';
        return false;
    }
    else{
        pass.style.borderColor = 'black';
        return true;
    }
}
repass.onblur = function(){
    if(pass.value!=repass.value){
        repass.style.borderColor = 'red';
    }
    else{
        repass.style.borderColor = 'black';
    }
}
