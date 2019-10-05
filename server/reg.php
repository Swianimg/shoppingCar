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
//接收数据
$phoneusenam = isset($_POST['phoneusenam'])?$_POST['phoneusenam']:'';
$pswa = isset($_POST['pswa'])?$_POST['pswa']:'';
$pswb = isset($_POST['pswb'])?$_POST['pswb']:'';

// $sql = "SELECT * FROM reglist"; //查询手机号码是否在列表里面
//   var_dump(mysqli_query($conn, $sql))  ;//执行语句
//查询语句
// $sql = "SELECT `phoneusenameS` FROM `reglists` WHERE `phoneusenameS` = $phoneusenameS ";//查询手机号码是否在列表里面
// $res = mysqli_query($conn, $sql);//执行语句
// // print_r($res);
// // // $so = mysqli_fetch_row($res);
// // var_dump($sql);
// // if(mysqli_num_rows($res)  == "1"){
// //     $data['data']['msg']='注册失败，该手机已经存在！';
// //     echo json_encode($data,true);
// // }

//   $sql = "INSERT INTO `reglists` (phoneusenameS,passwordAS,passwordBS) VALUES($phoneusenameS,$passwordAS,$passwordBS)" ;
//   mysqli_query($conn,$sql);
//   $data['data']['msg']='恭喜你！注册成功';
//   $data["status"]="success";
//   echo json_encode($data,true);



//  $sql = "SELECT * FROM `reglist`";
// $rew = mysqli_query($conn,$sql);

// $data = array("status"=>"error","data"=>array("msg"=>"注册失败"));
// // print_r(mysqli_num_rows($result));
// if(mysqli_num_rows($rew) == "1"){
//   $data["data"]["msg"] = "注册失败，该用户名已经存在";
//   // print_r(mysqli_num_rows($result));
//   echo json_encode($data,true);
// }else{
//   $sql = "INSERT INTO reglist (phoneusenameS,passwordAS,passwordBS) VALUES('$phoneusenameS','$passwordAS','$passwordBS')";
//   $tese = mysqli_query($conn, $sql);
//   var_dump($sql);
//  if($tese){
//    echo json_encode($data, true);
//    $data["status"] = "success";
//    $data["data"]["msg"] = "恭喜你，注册成功";
//  }else{
//    echo false;
//  };


// }
$sql = "INSERT INTO `reglists` (phoneusenam,pswa,pswb) VALUES('$phoneusenam','$pswa','$pswb')";//插入语句
// $sql2 = "SELECT regusenametext FROM lihos WHERE regusenametext='$regusenametext'";
//执行语句
$res =$conn->query($sql);

// echo mysqli_num_rows($res);
// echo mysqli_num_rows($res) ='1';
//boolean false
//返回JSON数据给前端
$data = array('status'=>'','msg'=>'','data'=>'');
if($res){
    $data['status'] = 'success';
    $data['msg'] = '恭喜你，注册成功!';

}else{
 $data['status'] = 'error';
 $data['msg'] = '注册失败!';
}
echo json_encode($data,true);
?>