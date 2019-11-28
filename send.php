<?php
	$data = $_POST[sms];
    $array = json_decode($data, true);

    $name = $array['name'];
    $email = $array['email'];

    $subject = "Заявка с сайта Lets.Trade";

    $text = "
    <html>
    <head>
    	<title>'$subject'</title>
    </head>
    <body>
    	<p>Имя: '$name'</p>	
    	<p>Email: '$email'</p>	
    </body>
    </html>";

    $to = "moskvichovoleg@gmail.com"; 
    $from = "hello@lets.trade.com"; 

    $headers = "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: $from";

    mail($to, $subject, $text, $headers);

    header('Access-Control-Allow-Origin: *');
    echo $_SERVER['REMOTE_ADDR'];
?>



