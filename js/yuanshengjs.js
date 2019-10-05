 //渲染
 window.onload = function () {

     function creats() {
         let ohotHands = document.getElementById('hotHands');
         let orders = '';
         ajax({
             type: 'post',
             url: '../server/algliebiaoimg.php',
             data: {
                 orders: orders,
             },
             success: str => {
                 let arrs = JSON.parse(str);
                 let htmls = arrs.data.map((items) => {
                     return `<a href="###">
                                <img src="${items.imgs}" alt="">
                            </a>`;

                 }).join('');
                 ohotHands.innerHTML = htmls;
             }
         });

     }
     creats();

     function init() {
         let ohotv3_ul = document.getElementsByClassName('hotv3_ul')[0];
         let orderi = '';
         ajax({
             type: 'get',
             url: '../server/socks.php',
             data: {
                 orderi: orderi
             },
             success: str => {
                 let arrsa = JSON.parse(str);
                 let htmlsa = arrsa.data.map((item) => {
                     return ` <li class="hotv3_li">
                        <div class="hotv3-rtlia">
                            <a href="###">
                                <img src="${item.imgs}" alt="">
                            </a>
                        </div>
                        <div class="hotv3-rtlib">
                            <div class="hotv3-rtlib-tit">
                                <a href="">${item.title}</a>
                            </div>
                            <div class="hotv3-rtlib-val">${item.prices}</div>
                            <div class="hotv3-rtlib-btn">
                                <a href="###">${item.btns}</a>
                            </div>
                        </div>
                    </li>`;

                 }).join('');
                 ohotv3_ul.innerHTML = htmlsa;
             }
         })

     }
     init();

     //   let num = 40; //数量
     let ipage = ''; //页码
     function creas(num, ipages) { //数据渲染,分页
         ipage = ipages;
         ajax({
             type: 'get',
             url: '../server/List of goods.php',
             data: {
                 num: num,
                 ipages: ipages,
             },
             success: str => {
                 let arrsa = JSON.parse(str);
                 icreant(arrsa);
                 window.local.setLocal('arrs', JSON.stringify(arrsa)); //存值
             }
         })
         return;
     }
     creas(40, 1);
     //点击页面进行翻页
     let opagebtnul = document.getElementsByClassName('pagebtnul')[0];
     // 是否点击排序
     let isSort = false;
     opagebtnul.onclick = function (ev) {
         let pageindex = ev.target.innerHTML ? ev.target.innerHTML : ''; //判断页码是否有值
         //   if(isSort){
         //       ipage = pageindex;
         //      sort()
         //   }else{
         creas(40, pageindex);

         //   }
     }


     function icreant(arrsa) {

         let htmlsa = arrsa.data.map((item, i) => {
             return `<li  data-id="${item.id}"  class="afs" boxsei = ${i}>
                        <div class="imgs">
                            <img style="margin-left:10px;" src="${item.picture}" alt="">
                        </div>
                        <div class="prices">
                            <span class="pric">${item.prices}</span>
                            <span class="delpric"><del>${item.delprices}</del></span>
                        </div>
                       <div class="p3">
                            <a href="###">
                                <p>${item.title} </p>
                            </a>
                        </div>
                        <a class="buy">添加到购物车</a>
                    </li>`;
         }).join('');
         let oprosnavi_ul = document.getElementsByClassName('prosnavi_ul')[0];
         oprosnavi_ul.innerHTML = htmlsa;
         let total = Math.ceil(arrsa.total / arrsa.num); //公式
         let opagebtnul = document.getElementsByClassName('pagebtnul')[0];
         let spanrbtn = ''; //新建一个空的字符串
         for (var i = 0; i < total; i++) { //拼接页码数
             spanrbtn += `<li class="s_selec02">
                          <a>${i+1}</a>
                      </li>`;
         }
         opagebtnul.innerHTML = spanrbtn;
         fn();
         cres();
         addcar();
         return opagebtnul;
     }

     function cres() {
         let s_selec02 = document.getElementsByClassName('s_selec02');
         for (var i = 0; i < s_selec02.length; i++) {
             s_selec02[i].onclick = function () {
                 for (var j = 0; j < s_selec02.length; j++) {
                     s_selec02[j].classList.remove('actec');
                 }
                 this.classList.add('actec')
             }
         }
     }

     function creal() {
         let left = document.getElementsByClassName('left')[0];
         let order6 = '';
         ajax({
             type: 'get',
             url: '../server/shopofgoods2.php',
             data: {
                 order6: order6
             },
             success: str => {
                 let arrsf = JSON.parse(str);
                 let htmlsatr = arrsf.data.map(function (item) {
                     return `
            <div class="imgsbox">
                <img width="140px" height="140px" src="${item.picture}" alt="">
            </div>
            <p class="titlesa">
                ${item.title}
            </p>
            <span class="prias">${item.prices}</span>`;

                 }).join('');
                 let sea_box = document.getElementsByClassName('sea_box')[0];
                 sea_box.innerHTML = htmlsatr;
             }
         })
     }
     creal();

     function inst() {
         let sea_box2 = document.getElementsByClassName('sea_box2')[0];
         let order7 = '';
         ajax({
             type: 'get',
             url: '../server/shopofgoods3.php',
             data: {
                 order7: order7
             },
             success: str => {
                 let arrsg = JSON.parse(str);
                 let htmao = arrsg.data.map(function (item) {
                     return `<div class="imgsbox2">
                <img width="140px" height="140px" src="${item.picture}" alt="">
            </div>
            <p class="titlesa2">
               ${item.title} 
            </p>
            <span class="prias2">${item.prices}</span>`;
                 }).join('');
                 sea_box2.innerHTML = htmao;

             }
         })

     }
     inst();

     // 升序
     let ascending = document.getElementsByClassName('ascending')[0];

     ascending.onclick = sort; //封装一个升序的函数函数

     function sort() {
         isSort = true;
         order8 = 'ASC';
         ajax({
             type: 'get',
             url: '../server/ascending.php',
             data: {
                 order8: order8,
                 ipages: ipage,
                 num: 40,
             },
             success: str => {
                 let arrsae = JSON.parse(str);
                 icreant(arrsae);
                 window.local.setLocal('arrs', JSON.stringify(arrsae)); //存值
             }
         })

     }

     //降序
     let Descending_order = document.getElementsByClassName('Descending_order')[0];
     Descending_order.onclick = function () {
         order9 = 'DESC';
         ajax({
             type: 'get',
             url: '../server/Descending.php',
             data: {
                 order9: order9,
                 ipages: ipage,
                 num: 40,
             },
             success: str => {
                 let arrsla = JSON.parse(str);
                 icreant(arrsla)
                 window.local.setLocal('arrs', JSON.stringify(arrsla)); //存值
             }
         })

     }

     //详情页的跳转功能
     function fn() { //事件委托
         let imgsq = document.getElementsByClassName('imgs');
         for (let i = 0; i < imgsq.length; i++) {
             imgsq[i].index = i;
             imgsq[i].onclick = function () {
                 var qusoa = query(imgsq[i].index); //
                 //  console.log(oli[i].index);
                 window.location.href = 'http://127.0.0.1/code/foluolunsaxiaozhen/Details%20page/Details%20pagesa.html?' + qusoa;
             }
         }
     }

     function query(o) { //封装一个把对象转换成字符串的方法
         var querystring = '';
         querystring += `index=${o}`; //拼接成字符串
         return querystring.slice(0);
     }

     // ----------------------------------------------------------------

     //购物车传id过去
     //  点击产品添加到购物车
     //初始化标签
     var a = window.local.setLocal('arrs'); //获本地数据
     var obj = a && a.data || [] //判断数据
     itemdata = obj
     let afs = document.getElementsByClassName('afs'); //列表页所有li标签
     let rel_contbox = document.getElementsByClassName('rel-contbox')[0];
     let itemlist = []; //新建一个空的数组

     getCarList().then(res => { //新建一个方法
         const jsP = res && JSON.parse(res) || {}; //判断是否有值
         const defList = shoppingCarList(jsP.data); //声明一个变量为defList然后调用shoppingCarList这个方法
         rel_contbox.innerHTML = defList; //渲染到Ul标签里面
         toTal(jsP); //调用total方法 
         number(jsP);


         //删除标签
         function DelList() {
             let cart_item = document.getElementsByClassName('cart-item-cont'); //每一个li
             for (let i = 0; i < cart_item.length; i++) {
                 cart_item[i].onclick = function (ev) {
                     console.log(ev);
                     let goodid = ev.currentTarget.dataset.id
                     ajax({
                         type: 'get',
                         url: '../server/Dellist.php',
                         data: {
                             goodid: goodid,
                         },
                         success: str => {
                             if (str) {
                                 alert('你确定要删除我么？');
                                 window.location.reload();
                             }
                         }
                     })
                 }
             }
         }
         DelList();
     })


     function toTal(jsP) { //封装一个方法,传数据
         let Acombined = document.getElementsByClassName('A-combined')[0];
         let totallist = jsP.data; //获取总价
         let totalString = 0; //新建一个字符串为零的计算器
         totallist.map(function (item) {
             totalString += Number(item.total); //拼接并赋值
         });
         Acombined.innerHTML = '合计￥:' + totalString + '元'; //渲染节点
         return totalString; //返回字符串
     }

     function number(jsP) { //渲染数量
         let number_of = document.getElementsByClassName('number-of')[0];
         let nums = jsP.data; //拿数据
         let numstring = 0; //定义一个计算器
         nums.map(function (item) { //遍历循环拼接
             numstring += Number(item.num);
         })
         number_of.innerHTML = numstring;
         return numstring;

     }

     function getCarList() { //初始化渲染，避免刷新后数据不见了
         return new Promise((resolve, rejects) => {
             ajax({
                 type: 'get',
                 url: '../server/getCarList.php',
                 data: {},
                 success: res => { //成功就走这个分支
                     resolve(res);
                 },
                 error: err => { //失败就走这个分支
                     rejects(err);
                 }
             })
         })
     }

     function shoppingCarList(data) {
         //遍历数据然后渲染
         let html = data && data.length > 0 && data.map(function (ele) {
             return `<li data-id ="${ele.goodid}" class="cart-item-cont">
                      <input type="checkbox" class = "samllcheck">
                      <img width="93px" height="80px" src="${ele.picture}" alt="">
                      <a class="">${ele.title}</a>
                      <p>￥${ele.prices}</p>
                      <div class="delsbtn">删除</div>
                      ${ele.num && `<p>数量： ${ele.num}</p>` || '' }
                      <p class="total-price">总价￥： ${ele.total}</p>
                  </li>`;
         }).join('');
         check();
         return html
     }

     function addcar() { //添加购物车
         for (let i = 0; i < afs.length; i++) {
             afs[i].onclick = function (ev) {
                 let rel_contbox = document.getElementsByClassName('rel-contbox')[0]; //获取右边li标签
                 if (ev.target.className == 'buy') {
                     let data = a.data[i]; //点击对应的数据
                     itemlist.push(data); //把对应的数据添加到新的数组里面
                     var b = window.local.setLocal('data'); //获取数据
                     //遍历数据然后渲染
                     let html = shoppingCarList(b) //调用已经拼接好的结构的方法刷新数据

                     rel_contbox.innerHTML = html; //渲染数据到ul标签
                 }
                 const data = a.data[i] //获取指定的参数包括id、内容、相片、价格
                 let prices = data.prices.replace('¥', ''); //把货币符号换成空的，不然的话插入不到数据表上
                 let goodid = data.id;
                 let title = data.title;
                 let picture = data.picture;
                 ajax({
                     type: 'get',
                     url: '../server/addcar.php',
                     data: { //传参数
                         goodid: goodid,
                         prices: prices,
                         title: title,
                         picture: picture,
                     },
                     success: str => {
                         getCarList().then(res => {
                             const jsP = res && JSON.parse(res) || {}; //判断传进来的数据
                             const defList = shoppingCarList(jsP.data) //调用方法
                             rel_contbox.innerHTML = defList; //渲染数据
                             toTal(jsP) //一样调用方法更新数据
                         })
                     }
                 })

             }

         }
     }

     function check() {
         let ochecks = document.getElementsByClassName('checks')[0];
         let smacheck = document.getElementsByClassName('samllcheck');
         let The_selected = document.getElementsByClassName('The_selected')[0];
         ochecks.onclick = function () {
            for (var i = 0; i < smacheck.length; i++) {
                let fag = smacheck[i].checked = true;
            }
        }
        The_selected.onclick = function () {
            for (var i = 0; i < smacheck.length; i++) {
                let fag = smacheck[i].checked = false;

            }
        }

     }



     let Settlement = document.getElementsByClassName('Settlement-button')[0];
     Settlement.onclick = function () { //点击的时候添加并跳转到结算页面
         window.location.href = 'http://127.0.0.1/code/foluolunsaxiaozhen/shoppingcar/shoppingcar.html####';
     }

















 }