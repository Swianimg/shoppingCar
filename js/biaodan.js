  $(function () {
      //图形验证码插件
      var captcha = new Captcha();
      captcha.draw(document.querySelector('#captcha'), r => {
          console.log('验证码是', r);
          imagcodeTest = r;
          //模拟触发点击事件
          $('#yz').trigger('blur'); //图形码自动验证
      });
      //图形验证码
      var imagcodeTest = ''; //定义一个字符串空的值
      let regphone = /^1[3-9]\d{9}$/; //手机号码
      let regpassword = /^[A-Za-z0-9]{6,16}$/; //密码  
      //获取节点并定义一个新的变量
      let ophonename = $('.phonename'); //手机号码
      let opaswordval = $('.pwdA'); //密码
      let opwdBval = $('.pwdB'); //确认密码
      let oyanzhengma = $('.yanzhengma'); //验证码
      let omesyanzhengma = $('.mesyanzhengma'); //短信验证码
      let nums; //声明随机数

      //定义一个新的变量来储存输入框的值
      let phoneusenam = '';
      let pswa = '';
      let pswb = '';


      //手机号码验证
      ophonename.blur(function () {
          let phonenameval = $.trim(ophonename.val());
          phoneusenam = phonenameval
          if (phonenameval.length == 0) {
              $('.prompt').eq(0).html('手机号码不能为空！');
              $(this).addClass('forr_error');
          } else if (!regphone.test(phonenameval)) {
              $('.prompt').eq(0).html('手机号码不规范！');
              $(this).addClass('forr_error');
          } else {
              $('.prompt').eq(0).html('');
              $(this).removeClass('forr_error');
          }
      });

      //密码验证
      let passText = ''; //定义一个值
      opaswordval.blur(function () {
          let paswordval = $.trim(opaswordval.val());
          pswa = paswordval;
          passText = paswordval;
          if (paswordval.length == 0) {
              $('.prompt').eq(1).html('密码不能为空！');
              $(this).addClass('forr_error');
          } else if (!regpassword.test(paswordval)) {
              $('.prompt').eq(1).html('密码不规范！');
              $(this).addClass('forr_error');
          } else {
              $('.prompt').eq(1).html('');
              $(this).removeClass('forr_error');
          }
      });

      //确认密码
      opwdBval.blur(function () {
          let pwdBval = $.trim(opwdBval.val());
          pswb = pwdBval;
          if (pwdBval.length == 0) {
              $('.prompt').eq(2).html('密码不能为空！');
              $(this).addClass('forr_error');
          } else if (pwdBval != passText) {
              $('.prompt').eq(2).html('密码不一致！');
              $(this).addClass('forr_error');
          } else {
              $('.prompt').eq(2).html('');
              $(this).removeClass('forr_error');
          }
      });

      //验证图形码
      oyanzhengma.blur(function () {
          let yanzhengmas = $.trim(oyanzhengma.val());
          //   yanzhengmaSS = yanzhengmas
          if (yanzhengmas.length == 0) {
              $('.prompt').eq(3).html('验证码不能为空！');
              $(this).addClass('forr_error');
          } else if (yanzhengmas.toLocaleLowerCase() != imagcodeTest.toLocaleLowerCase()) {
              $('.prompt').eq(3).html('验证码不一致！');
              $(this).addClass('forr_error');
          } else {
              $('.prompt').eq(3).html('');
              $(this).removeClass('forr_error');
          }
      })
      //短信验证码验证
      var num = 60; //这是短信时间为60秒
      $('.btn').click(() => {
          ophonename.trigger('blur'); //自动触发验证手机号码
          let flag = $('.phonename').hasClass('forr_error') //判断手机号码是否有误
          if (flag) { //如果有误就报错,不在执行下面的代码
              alert('手机号码不正确,请检查！')
              return;
          } else { //否则执行下面的代码
              function getRandom(min, max) { //验证码随机数
                  return parseInt(Math.random() * (max - min + 1)) + min
              }
              nums = getRandom(1000, 9999); //随机数

              let timers = setInterval(() => {
                  if (num < 0) {
                      $('.btn').val('请重新获取验证码');
                      $('.btn').attr("disabled", false);
                      clearInterval(timers);
                  } else {
                      $('.btn').val(num + '秒后从新获取验证码');
                      $('.btn').attr("disabled", true);
                      num--;
                  }

              }, 1000)

              function formatterDateTime() {

                  var date = new Date()
                  var month = date.getMonth() + 1
                  var datetime = date.getFullYear() +
                      "" // "年"
                      +
                      (month >= 10 ? month : "0" + month) +
                      "" // "月"
                      +
                      (date.getDate() < 10 ? "0" + date.getDate() : date
                          .getDate()) +
                      "" +
                      (date.getHours() < 10 ? "0" + date.getHours() : date
                          .getHours()) +
                      "" +
                      (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                          .getMinutes()) +
                      "" +
                      (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                          .getSeconds());
                  return datetime;
              }
              $.ajax({

                  type: 'post',
                  url: 'http://route.showapi.com/28-1',
                  dataType: 'json',
                  data: {
                      "showapi_timestamp": formatterDateTime(),
                      "showapi_appid": '100963', //这里需要改成自己的appid
                      "showapi_sign": '5327fb0bc71848fe8502aabe2bc6726f', //这里需要改成自己的应用的密钥secret
                      "mobile": ophonename.val().trim(),
                      "content": `{\"name\":\"牛二\",\"code\":\"${nums}\",\"minute\":\"3\",\"comName\":\"复仇者联盟公司\"}`,
                      "tNum": "T150606060601",
                      "big_msg": ""
                  },
                  error: function (XmlHttpRequest, textStatus, errorThrown) {
                      alert("操作失败!");
                  },
                  success: function (result) {
                      console.log(result) //console变量在ie低版本下不能用
                      alert(result.showapi_res_code)
                  }

              });
          }

      })
      //短信验证码验证
      omesyanzhengma.blur(function () {
          let mesyanzhengmaval = omesyanzhengma.val();
          MesyanzhengmaS = mesyanzhengmaval
          if (mesyanzhengmaval.length == 0) {
              $('.prompt').eq(4).html('短信验证码不能为空！');
              $(this).addClass('forr_error');
          } else if (mesyanzhengmaval != nums) {
              $('.prompt').eq(4).html('短信验证码不正确！');
              $(this).addClass('forr_error');
          } else {
              $('.prompt').eq(4).html('');
              $(this).removeClass('forr_error');
          }
      });

      // 点击注册
      //0-1获取点击按钮并且设置点击事件
      //0-2并且判断用户的协议是否打上勾
      $('.regbtn').click(function () {
          let ischeck = $('#icheck').is(':checked');
          if (!ischeck) {
              alert('请把奥莱够会员协议打上勾呗！')
          }
          if ($('.forr_error').length == 0 && phoneusenam.length != 0 && pswa.length != 0 && pswb.length != 0) {
              $.ajax({
                  type: "post",
                  url: "../server/reg.php",
                  data: {
                      phoneusenam: phoneusenam,
                      pswa: pswa,
                      pswb: pswb
                  },
                  dataType: "json",
                  success: function (response) {
                      if (response.status == 'success') {
                          //如果成功跳转页面
                          alert('注册成功');
                          ophonename.val(''); //手机号码
                          opaswordval.val(''); //密码
                          opwdBval.val('');
                          oyanzhengma.val('');
                          omesyanzhengma.val('');
                          window.location.href = 'http://127.0.0.1/code/foluolunsaxiaozhen/logo/logo.html';
                      } else {
                          alert('注册失败！');
                      }

                  }
              });
          }

      })
  })