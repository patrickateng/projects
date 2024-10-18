<?php
$_name = $_POST['name'];
$_visitor_email = $_POST['email'];
$_subject = $_POST['subject'];
$_message = $_POST['message'];

$email_from = 'enter@yourwebsiteid(domain_name)_here.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
               "User Email: $visitor_email.\n".
               "Subject: $subject.\n".
               "User Message: $message.\n";

$to = "wheretorecieveinquiry@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");

?>