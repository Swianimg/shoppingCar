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

//接收数据
$order= isset($_POST['order'])?$_POST['order']:'';

//查询语句
$sql = "SELECT*FROM algxuanxiangka";

//执行语句

$res = $conn->query($sql);

//提取数据
$arr = $res->fetch_all(MYSQLI_ASSOC);
if($arr){
    $data = array(//传整个数据包括总页数，个数，页数，还有数据
        // 'total'=>$res2->num_rows,
        'data'=>$arr,
        // 'ipage'=>$ipage,
        // 'num'=>$num,
        // "returnCode" => '0000'
    );    
    echo json_encode($data,true);
};






?>