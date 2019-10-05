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
$order8 = isset($_GET['order8'])?$_GET['order8']:'ASC';
$ipages = isset($_GET['ipages'])?$_GET['ipages']:'';
$num = isset($_GET['num'])?$_GET['num']:'';

//查询语句
$index = ($ipages - 1) * $num;//分页公式，页数从零开始的，同时有长度
$sql = "SELECT*FROM liebiao";//总数
$sql2 = "SELECT*FROM liebiao ORDER BY prices $order8";//升序
$sql3 = "SELECT * FROM lisonav LIMIT $index,$num";//分页
$sql4 = "SELECT*FROM liebiao ORDER BY prices ASC LIMIT 40";//升序的数量

//执行语句

$res = $conn->query($sql);
$res2 =$conn->query($sql2); 
$res3 = $conn->query($sql3);
$res4 = $conn->query($sql4);

//提取数据
 $arr = $res4->fetch_all(MYSQLI_ASSOC);
 $res3 = ceil($res2->num_rows/40);//向上取整
     $data = array(
        'total' => $res2->num_rows,
        'data' => $arr,
        'ipages' => $ipages,//原本页码
        'num' => $num,
        'ipag'=>$res3,//升序之后多少页
    );
    echo json_encode($data,true);

?>