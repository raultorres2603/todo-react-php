<?php
header('Access-Control-Allow-Origin: *');
require_once('./components/Connection.class.php');
require_once('./components/Todo.class.php');
require_once('./components/User.class.php');

$connection = new Connection("localhost", "root", "root", "todo-db", "8889");
$sql = "SELECT * FROM user GROUP BY idUser";
$res = $connection->query($sql);
$users = [];
while ($row = mysqli_fetch_assoc($res)) {
    $users[] = new User($row["idUser"], $row["name"], $row["username"], $row["password"], $row["street"], $row["city"], $row["zipcode"], $row["country"]);
}
echo (json_encode($users));
