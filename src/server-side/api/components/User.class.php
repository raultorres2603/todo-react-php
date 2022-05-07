<?php
class User
{
    function __construct($id, $name, $username, $password, $street, $city, $zipcode, $country)
    {
        $this->id = $id;
        $this->name = $name;
        $this->username = $username;
        $this->password = $password;
        $this->street = $street;
        $this->city = $city;
        $this->zipcode = $zipcode;
        $this->country = $country;
    }

    function getID()
    {
        return $this->id;
    }

    function getName()
    {
        return $this->name;
    }

    function getUserName()
    {
        return $this->username;
    }

    function getPassword()
    {
        return $this->password;
    }

    function getStreet()
    {
        return $this->street;
    }

    function getCity()
    {
        return $this->city;
    }

    function getZipCode()
    {
        return $this->zipcode;
    }

    function getCountry()
    {
        return $this->country;
    }
}
