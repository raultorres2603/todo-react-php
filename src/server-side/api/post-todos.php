<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
require_once('./components/Connection.class.php');
require_once('./components/Todo.class.php');
require_once('./components/User.class.php');

$connection = new Connection("localhost", "root", "root", "todo-db", "8889");
$sql = "INSERT INTO todo (title,completed,user) VALUES ('" . $_POST["title"] . "', '" . $_POST["completed"] . "', '" . $_POST["userId"] . "')";
$res = $connection->query($sql);
if ($connection->insert_id) {
    echo ("OK");
} else {
    echo ("Error");
}
