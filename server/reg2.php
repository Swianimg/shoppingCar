<?php
header("Content-type:text/html;charset=utf-8");//编码
//设置参数，建立连接
$servername = 'localhost';//主机名，链接的是wamp里面的数据库，因为安装在本地，所以写localhost,上线后可能改成ip
$username = 'root';//默认登陆数据库的用户名
$password = '';//wamp默认没有密码，phpstudy密码为root 
$dbname = 'aolaigouxuanxiangka';//你要连接的数据库名称

//建立连接
$conn = new mysqli($servername,$username,$password,$dbname);
//判断是否成功
// var_dump($conn);
//js调取属性和方法： arr.lenght  arr.push()
//php调取属性和方法：$conn->属性名   $conn->方法名()
if($conn->connect_error) {
    //有数据返回，就证明失败了
    die("连接失败: " . $conn->connect_error);
}else {
    // echo '连接成功';
}

//接收参数
$phoneusenam = isset($_REQUEST['phoneusenam'])?$_REQUEST['phoneusenam']:'';
$pswa = isset($_REQUEST['pswa'])?$_REQUEST['pswa']:'';
$pswb = isset($_REQUEST['pswb'])?$_REQUEST['pswb']:'';
//查询语句
$sql = "INSERT INTO `reglists` (phoneusenam,pswa,pswb) VALUES($phoneusenam,$pswa,$pswb)";
//执行语句
$res =$conn->query($sql);
var_dump($res);
?>