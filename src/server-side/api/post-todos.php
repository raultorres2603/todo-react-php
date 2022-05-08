<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
require_once('./components/Connection.class.php');
require_once('./components/Todo.class.php');
require_once('./components/User.class.php');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$connection = new Connection("localhost", "root", "root", "todo-db", "8889");
$sql = "INSERT INTO todo (title,completed,user) VALUES ('" . $data["title"] . "', '" . $data["completed"] . "', '" . $data["userId"] . "')";
$res = $connection->query($sql);
echo ("OK");
