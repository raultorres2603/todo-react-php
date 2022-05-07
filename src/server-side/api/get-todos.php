<?php
header('Access-Control-Allow-Origin: *');
require_once('./components/Connection.class.php');
require_once('./components/Todo.class.php');
require_once('./components/User.class.php');

$connection = new Connection("localhost", "root", "root", "todo-db", "8889");
//Query a ejecutar
$query = "SELECT idTodo, title, completed, user, idUser, name, username, password, street, city, zipcode, country FROM todo INNER JOIN user ON user.idUser = todo.user";
//Variable con los resultados
$resUsers = $connection->query($query);
//Array con resultados
$todos = [];

while ($row = mysqli_fetch_assoc($resUsers)) {
    $user = new User($row["idUser"], $row["name"], $row["username"], $row["password"], $row["street"], $row["city"], $row["zipcode"], $row["country"]);
    $todo = new Todo($row["idTodo"], $row["title"], $row["completed"], $user);
    $todos[] = $todo;
}

echo (json_encode($todos));
