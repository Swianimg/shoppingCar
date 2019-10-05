$(function () {
    $('.myCenter_change').click(function () {
        $('.inpt-contbox').toggle();
    });

    $('.myCenter_change').click(function () {
        $('.contents2').toggle();
    });



    let regphone = /^1[3-9]\d{9}$/; //手机号码
    let regpassword = /^[A-Za-z0-9]{6,16}$/; //密码

    let oinput_b = $('.input_b'); //获取第一个用户名的值
    let opswwo = $('.pswwo');

    let phoneusenam = '';
    let pswa = '';

    oinput_b.blur(function () {
        let iniputval = oinput_b.val().trim();
        phoneusenam = iniputval;
        if (iniputval.length == 0) {
            $('.error').eq(0).html('用户名不能为空');
            $(this).addClass('activess');
        } else if (!regphone.test(iniputval)) {
            $('.error').eq(0).html('用户名不规范');
            $(this).addClass('activess');
        } else {
            $('.error').eq(0).html('');
            $(this).removeClass('activess');
        }

    });

    opswwo.blur(function () {
        let passwval = opswwo.val().trim();
        pswa = passwval;
        if (passwval.length == 0) {
            $('.error').eq(1).html('密码不能为空');
            $(this).addClass('activess');
        } else if (!regpassword.test(passwval)) {
            $('.error').eq(1).html('密码不规范');
            $(this).addClass('activess');
        } else {
            $('.error').eq(1).html('');
            $(this).removeClass('activess');
        }

    });

    //登录
    $('#logobtn').click(function () {
        //点击的时候发送网络请求
        if (phoneusenam.length == 0 && pswa.length == 0) {
            alert('内容为空');
            return;
        } else {
            $.ajax({
                type: "post",
                url: "../server/logo.php",
                dataType: "json",
                data: {
                    phoneusenam: phoneusenam,
                    pswa: pswa
                },
                success: (str) => {
                     var config = $.cookie('phoneusenam') //读取cookie,声明一个变量
                    if (config) {
                        alert('你已登录');
                   } else if (str.status == 'error') {
                        alert('用户名不存在，请注册！')
                        window.location.href = 'http://127.0.0.1/code/foluolunsaxiaozhen/reghtml/reg.html';
                    } else if (str.status == 'error') {
                        alert('用户密码错误')
                    } else {
                        alert('登录成功');
                        oinput_b.val('');
                        opswwo.val('');
                        $.cookie('phoneusenam', phoneusenam, {
                           path: '/',
                            expires: new Date().setMilliseconds(60 * 60 * 24 * 1000),
                        }); //存cookie
                        window.location.href = 'http://127.0.0.1/code/foluolunsaxiaozhen/html/';
                    }
                }
            });
        }





    })







})