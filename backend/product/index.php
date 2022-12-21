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
        $sql = "SELECT * FROM product";
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
        $sql = "INSERT INTO product(id, proname,description,price,amount,image,categoryid) 
        VALUES(null, :proname,:description,:price, :amount,:image, :categoryid)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':proname', $user->proname);
        $stmt->bindParam(':description', $user->description);
        $stmt->bindParam(':price', $user->price);
        $stmt->bindParam(':amount', $user->amount);
        $stmt->bindParam(':image', $user->image);
        $stmt->bindParam(':categoryid', $user->categoryid);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

        case "PUT": 
            $user = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE product SET proname= :proname,description = :description,price = :price, amount =:amount,image = :image, categoryid =:categoryid WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $user->id);
            $stmt->bindParam(':proname', $user->proname);
            $stmt->bindParam(':description', $user->description);
            $stmt->bindParam(':price', $user->price);
            $stmt->bindParam(':amount', $user->amount);
            $stmt->bindParam(':image', $user->image);
            $stmt->bindParam(':categoryid', $user->categoryid);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    case "DELETE":
        $sql = "DELETE FROM product WHERE id = :id";
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
