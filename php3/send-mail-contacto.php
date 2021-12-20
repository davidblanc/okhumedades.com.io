<?php

// Variables
$name = trim($_POST['FULL_NAME']);
$email = trim($_POST['EMAIL']);
$phone = trim($_POST['PHONE']);
$message = trim($_POST['COMMENT']);

// Email address validation - works with php 5.2+
function is_email_valid($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}


if( !empty($name) && !empty($phone)) {

	// Avoid Email Injection and Mail Form Script Hijacking
	$pattern = "/(content-type|bcc:|cc:|to:)/i";
	if( preg_match($pattern, $name) || preg_match($pattern, $email) || preg_match($pattern, $message) ) {
		//exit;
	}

	// Email will be send
	$to =  "nandogomezm@gmail.com"; //"nandogomezm@gmail.com"; // Change with your email address
	$sub = "Okhumedades - Contacto Home - From contacto.html"; // You can define email subject
	// HTML Elements for Email Body
	$body = <<<EOD
	<strong>Nombre:</strong> $name <br>
	<strong>Teléfono:</strong> $phone <br>
	<strong>Email:</strong> <a href="mailto:$email?subject=feedback" "email me">$email</a> <br> <br>
	<strong>Comentario:</strong> $message <br>
EOD;
//Must end on first column
	$email2 = "hola@okhumedades.com";
	$headers = "From: $name <$email2>\r\n";
	//$headers .= "Bcc: $email2\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=UTF-8 ' . "\r\n";

	// PHP email sender
	mail($to, $sub, $body, $headers);
	
	$data = array("result" => "success", "msg" => "Tu mensaje fue enviado.");
	//header('Content-Type: application/json');
	header("Location: https://okhumedades.com/gracias-por-contactarnos.html");
	echo json_encode($data);exit;
	
} else {
$data = array("result" => "error", "msg" => "Revise el formulario.");
	header('Content-Type: application/json');
	echo json_encode($data);exit;
}
