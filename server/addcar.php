<?php
header("Content-type:text/html;charset=utf-8"); //编码
//设置参数，建立连接
$servername = 'localhost'; //主机名，链接的是wamp里面的数据库，因为安装在本地，所以写localhost,上线后可能改成ip
$username = 'root'; //默认登陆数据库的用户名
$password = ''; //wamp默认没有密码，phpstudy密码为root 
$dbname = 'aolaigouxuanxiangka'; //你要连接的数据库名称

//建立连接
$conn = new mysqli($servername, $username, $password, $dbname);

//判断是否成功
// var_dump($conn);
//js调取属性和方法： arr.lenght  arr.push()
//php调取属性和方法：$conn->属性名   $conn->方法名()
if ($conn->connect_error) {
    //有数据返回，就证明失败了
    die("连接失败: " . $conn->connect_error);
} else {
    // echo '连接成功';
}

//接收数据
$goodid = isset($_REQUEST['goodid']) ? $_REQUEST['goodid'] : "";
$prices = isset($_REQUEST['prices']) ? $_REQUEST['prices'] : "";
$title = isset($_REQUEST['title']) ? $_REQUEST['title'] : "";
$picture = isset($_REQUEST['picture']) ? $_REQUEST['picture'] : "";

// //查询语句
$sql = "SELECT*FROM `shoppingcar` WHERE goodid  ='$goodid'"; //第一次插入数据,查询表里面是否存在该商品的ID

// //执行语句
$result = $conn->query($sql);
// //查找该商品是否在购物车里面
$row = mysqli_num_rows($result);
if ($row == 0) { //如果在里面更新数据
    $insetsql = "INSERT INTO `shoppingcar` ( carid, goodid,picture,prices,title,num,total )VALUES( NULL,'$goodid','$picture','$prices','$title','$num','$total')";
    $conn->query($insetsql);
    echo $insetsql;
} elseif ($row == 1) { //如果存在就更新购物车
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);//提取数据变成数组
    $num = $data[0]['num'];
    $addNum = $num + 1;
    var_dump($addNum);
    $total = $data[0]['prices'] * $addNum;
    var_dump($total);
    $updatesql = "UPDATE shoppingcar SET num = '$addNum',total='$total'WHERE goodid = '$goodid'";
    mysqli_query($conn, $updatesql);
}
