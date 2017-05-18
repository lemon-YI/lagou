/**
 * Created by 懿懿 on 2017/5/16.
 */
$(document).ready(function () {
    $(".green").on("focus",function () {
        $(this).css({border:"1px solid #00b38a"});
    });
    $(".green").on("blur",function () {
        $(this).css({border:"0"});
    });

    $("#tab1").on("click",function () {
        $("#li_phone").css({display:"block"});
        $("#li_email").css({display:"none"});
        $(this).css({color:"#00b38a"})
        $("#tab2").css({color:"#666666"})
    })
    $("#tab2").on("click",function () {
        $("#li_phone").css({display:"none"});
        $("#li_email").css({display:"block"});
        $(this).css({color:"#00b38a"});
        $("#tab1").css({color:"#666666"});
    });

    $("#btn_border_word").on("click",function () {
        $(this).css({border:"1px solid #00b38a"});
        $("#btn_border_person").css({border:"1px solid #cccccc"});
    });


    $("#btn_border_person").on("click",function () {
        $(this).css({border:"1px solid #00b38a"});
        $("#btn_border_word").css({border:"1px solid #cccccc"});
    });

    $("#btn_border_3").on("click",function () {
        $(this).css({border:"1px solid #00b38a"});
        $("#btn_border_4").css({border:"1px solid #cccccc"});
    });

    $("#btn_border_4").on("click",function () {
        $(this).css({border:"1px solid #00b38a"});
        $("#btn_border_3").css({border:"1px solid #cccccc"});
    });

    $('#username').on('blur',yanZUsername);
    $('#password').on('blur',yanZPassword);
    $('#EmailUsername').on('blur',EmailUsername);
    $('#emailPassword').on('blur',EmailPassword);


    $('#PhoneBtn').on('click',function () {
        console.log(1)
        if(yanZUsername() && yanZPassword()){
            alert("合法");
        }else{
            alert("不合法");
        }
    })

    $('#EmailBtn').on('click',function () {
        if(EmailUsername() && EmailPassword){
            alert('OK');
        }else{
            alert('NO')
        }
    })

});

function yanZUsername() {
    console.log("正在验证账号--------------------------");
    var username = $('#username').val();
    var phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if(phoneReg.test(username)){
        $('#username').css("border","none");
        $('#usernameError').html('');
        return true
    }else{
        $('#username').css('border','1px solid #ff0000');
        $('#usernameError').html('请输入正确的手机号码');
        return false
    }
}
function yanZPassword() {
    console.log("正在验证密码--------------------------");
    var password = $('#password').val();
    if(password.length < 6 ||  password.length > 15){
        $('#password').css('border','1px solid #ff0000');
        $('#passwordError').html('密码长度不符合要求');
        return false;
    }
    var b=/^[a-zA-Z\d]\w{6,15}[a-zA-Z\d]$/;
    if(b.test(password)){
        $('#password').css('border','none');
        $('#passwordError').html();
        return true;
    }else{
        $('#password').css('border','1px solid #ff0000');
        $('#passwordError').html('密码有非法字符');
        return false
    }

}
function EmailUsername() {
    var emailUsername = $('#EmailUsername').val();
    var mailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(mailReg.test(emailUsername)){
        $('#EmailUsername').css('border','none');
        $('#EmailUsernameError').html('');
        return true
    }else{
        $('#EmailUsername').css('border','1px solid #ff000');
        $('#EmailUsernameError').html('你输入的邮箱有误');
        return false
    }
}
function EmailPassword() {
    var emailPassword = $('#emailPassword').val();
    if(emailPassword.length < 6 || emailPassword.length > 15){
        $('#emailPassword').css('border','1px solid #ff000');
        $('#EmailUsernameError').html('密码长度不符合');
        return false;
    }
    var b=/^[a-zA-Z\d]\w{6,15}[a-zA-Z\d]$/;
    if (b.test(emailPassword)){
        $('#emailPassword').css('border','none');
        $('#EmailUsernameError').html('');
        return true
    }else{
        $('#emailPassword').css('border','1px solid #ff0000');
        $('#EmailUsernameError').html('密码有非法字符');
        return false;
    }
}