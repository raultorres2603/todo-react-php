<?php
class Todo
{
    function __construct($id, $title, $completed, $user)
    {
        $this->id = $id;
        $this->title = $title;
        $this->completed = $completed;
        $this->user = $user;
    }

    function getID()
    {
        return $this->id;
    }

    function getTitle()
    {
        return $this->title;
    }

    function getCompleted()
    {
        return $this->completed;
    }

    function getUser()
    {
        return $this->user;
    }
}
