<?php
$name= $_post['name'];
$email =$_Post['email'];
$phone= $_Post['phone'];
$website = $_Post['website'];
$message= $_Post['message'];
if(!empty($email) && !empty($message)){
    if(filter_var($email,FILTER_VALIDATE_EMAIL)){
        $reciever="codingnepalweb@gmail.com";
        $subject="from: $name <$email>";
        $body="Name: $name\nEmail: $email \nphone: $phone\nwebsite: $website\n\nmessage: $message\n\nRegards,\n$name";
        $sender="From: $email";
        if(mail($reciever,$subject,$body,$sender)){
            echo"Your message has been sent!";

        }else{
            echo"Sorry, failed to send your message!";
        }

    }else{
        echo" Enter a valid Email address!";
    }
}else{
    echo"Email and password field is required!";
}
?>