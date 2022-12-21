<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
$data = json_decode(file_get_contents("php://input"));
function msg($message, $extra = [])
{
    return array_merge([
        'message' => $message
    ], $extra);
}
$returnData = [];
$fullname = $data->fullname;
$email = $data->email;
$password = $data->password;
$address = $data->address;
$mobile = $data->mobile;
$rank = $data->rank;
$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "doan");


if ($fullname && $email && $password && $address && $mobile && $rank) {
    $sql = "insert into user(
    fullname,
    email,
    password,   
    address,
    mobile,
    rank
 ) values(
    '$fullname',
    '$email',
    '$password',
    '$address',
    '$mobile',
    '$rank'
 )";
    $resault = mysqli_query($con, $sql);
    if ($resault) {
        $reponse['data'] = array(
            'status' => 'valid'
        );
        echo json_decode($reponse);
    } else {
        $reponse['data'] = array(
            'status' => 'invalid'
        );
        echo json_decode($reponse);
    }
}
