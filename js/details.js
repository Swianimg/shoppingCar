window.onload = function () { //设置页面加载监听事件
    //渲染详情页
    var a = window.local.setLocal('arrs'); //获取本地数据    
    var obj = a.data; //提取数据
    var n = window.location.search.slice(1).split('=') //获取索引
    var p = obj[n[1]] //通过所有本地数据拼接索引
    console.log(n);
    
    //找节点
    let pic = document.getElementById('pic');
    let data_me_tit = document.getElementsByClassName('data-me-tit')[0];
    let salePrice = document.getElementById('salePrice');
    let del = document.getElementsByTagName('del')[0];
    //渲染节点
    pic.src = p.picture;
    data_me_tit.innerHTML = p.title;
    salePrice.innerHTML = p.prices
    del.innerHTML = p.delprices;

}