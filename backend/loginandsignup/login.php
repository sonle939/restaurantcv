<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "doan");
$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;
$resault = mysqli_query($con, "SELECT * FROM user where email='" . $email . "' and password='" . $password . "'");
$num = mysqli_num_rows($resault);
$rs = mysqli_fetch_array($resault);
if ($num >= 1) {
   http_response_code(200);
   $outp = "";
   $outp .= '{"email":"' . $rs["email"] . '",';
      $outp .= '"password":"' . $rs["password"] . '",';
   $outp .= '"id":"' . $rs["id"] . '",';
   $outp .= '"fullname":"' . $rs["fullname"] . '",';
   $outp .= '"address":"' . $rs["address"] . '",';
   $outp .= '"mobile":"' . $rs["mobile"] . '",';
   $outp .= '"rank":"' . $rs["rank"] . '",';
   $outp .= '"image":"' . $rs["image"] . '",';
   $outp .= '"Status":"200"}';
   echo $outp;
} else {
   http_response_code(202);
}
