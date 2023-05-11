<?php

//Connect to Database
$conn = mysqli_connect('localhost', 'u345793309_ajaxtest', 'Rocket8155!', 'u345793309_ajaxtest');

echo 'processing..';

//Check for GET variable
if(isset($_GET['name'])){
    echo 'Get: Your name is '.$_GET['name'];
}



//Check for POST variable
if(isset($_POST['name'])){
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    echo 'POST: Your name is '.$_POST['name'];

    $query = "INSERT INTO users(name) VALUES('$name')";

    if(mysqli_query($conn, $query)){
        echo 'User added...';

    }else {
        echo 'Error: '. mysqli_error($conn);
    }


}