<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM user";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[4]) && is_numeric($path[4])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO user(id, fullname,email,password, address,mobile,rank) VALUES(null, :fullname,:email,:password, :address,:mobile, :rank)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':fullname', $user->fullname);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':password', $user->password);
        $stmt->bindParam(':address', $user->address);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':rank', $user->rank);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

        case "PUT":
            $user = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE user SET fullname= :fullname,email = :email,password = :password, address =:address,mobile = :mobile, rank =:rank,image=:image WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $user->id);
            $stmt->bindParam(':fullname', $user->fullname);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':password', $user->password);
            $stmt->bindParam(':address', $user->address);
            $stmt->bindParam(':mobile', $user->mobile);
            $stmt->bindParam(':rank', $user->rank);
            $stmt->bindParam(':image', $user->image);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    case "DELETE":
        $sql = "DELETE FROM user WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[4]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
