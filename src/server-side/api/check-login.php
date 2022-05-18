<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
require_once('./components/Connection.class.php');
require_once('./components/Connection.class.php');

$user = $_GET["username"];
$pass = $_GET["password"];

$connection = new Connection("localhost", "root", "root", "todo-db", "8889");
$sql = "SELECT username, password FROM user WHERE username = '" . $user . "' AND password = '" . $pass . "'";
$res = $connection->query($sql);

if ($res) {
    $jwt = base64_encode($user . "." . $pass);
    echo ($jwt);
} else {
    echo ("ERROR");
}
