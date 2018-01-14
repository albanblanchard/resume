<?php
    // echo phpinfo();
?>
<?php
$name   = 'al';
$email  = 'teuchio@yahoo.ca';
$message= 'test';

/*
 * Send email to admin
 */
$to     = 'sayhello@albanblanchard.fr';
$subject= '[CV numérique] Nouveau message';

$htmlContent = '
<h4>Message reçu via le formulaire de contact :</h4>
<table cellspacing="0" style="width: 300px; height: 200px;">
    <tr>
        <th>Name:</th><td>'.$name.'</td>
    </tr>
    <tr style="background-color: #e0e0e0;">
        <th>Email:</th><td>'.$email.'</td>
    </tr>
    <tr>
        <th>Message:</th><td>'.$message.'</td>
    </tr>
</table>';
$htmlContentConfirm = 'message envoyé!';

// Set content-type header for sending HTML email
$headers = "MIME-Version: 1.0" . "\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\n";

// Additional headers
$headers .= 'From: Alban<alban@albanblanchard.fr>' . "\n";

// Send email
if(mail($to,$subject,$htmlContent,$headers)){
  $status = 'ok admin';
}else{
  $status = 'error admin';
}
if(mail($email,$subject,$htmlContentConfirm,$headers)){
  $status2 = 'ok sender';
}else{
  $status2 = 'error admin';
}

// Output status
echo $status . ' ' . $status2;
die;
 ?>
