<?php
class Connection
{
    function __construct($hostname, $username, $password, $database, $port)
    {
        $this->hostname = $hostname;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;
        $this->port = $port;
        $this->mysqli = null;
    }

    /* GETTERS & SETTERS */

    function getHost()
    {
        return $this->hostname;
    }

    function getUserName()
    {
        return $this->username;
    }

    function getPassword()
    {
        return $this->password;
    }

    function getDatabase()
    {
        return $this->database;
    }

    function getPort()
    {
        return $this->port;
    }

    function getMYSQLI()
    {
        return $this->mysqli;
    }

    function setMYSQLI($mysqli)
    {
        $this->mysqli = $mysqli;
    }

    /* FIN --> GETTERS & SETTERS */

    function connect()
    {
        $connect = new mysqli($this->getHost(), $this->getUserName(), $this->getPassword(), $this->getDatabase(), $this->getPort());
        $this->setMYSQLI($connect);
        return ($this->getMYSQLI());
    }

    function closeCon()
    {
        $this->getMYSQLI()->close();
    }
}
