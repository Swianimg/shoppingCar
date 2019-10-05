<?php
 header("Content-type:text/html;charset=utf-8");//编码
//设置参数，建立连接
$servername = 'localhost';//主机名，链接的是wamp里面的数据库，因为安装在本地，所以写localhost,上线后可能改成ip
$username = 'root';//默认登陆数据库的用户名
$password = '';//wamp默认没有密码，phpstudy密码为root 
$dbname = 'aolaigouxuanxiangka';//你要连接的数据库名称

//建立连接
$conn = new mysqli($servername,$username,$password,$dbname);//连接数据库

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

//查询语句
$sql = "SELECT * FROM reglists WHERE phoneusenam = '$phoneusenam'";
//执行语句
$result =$conn->query($sql);//查询用户名
// print_r(mysqli_num_rows($res));
$data = array('status'=>'','msg'=>'','data'=>'');
$resa = mysqli_fetch_array($result);//密码结果集
// print_r($resa['pswa']);
// echo();
if(mysqli_num_rows($result) == 0){//判断用户名是否存在，如果存在就登录成功
$data['status'] = 'error';
 $data['msg'] = '该用户名不存在，请注册！';
} 
else 
if( $resa['pswa']!= $pswa){//另外判断输入的密码与数据库的密码是否正确，如果正确登录成功，否则失败
    $data['status'] = 'error';
 $data['msg'] = '密码不正确，登录失败！';
}
else{
        $data['status'] = 'success';
 $data['msg'] = '登录成功！';
}

echo json_encode($data,true);
// ?>