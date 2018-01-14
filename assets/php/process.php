<?php
if(isset($_GET['submit']) && !empty($_GET['name']) && !empty($_GET['email']) && (!filter_var($_GET['email'], FILTER_VALIDATE_EMAIL) === false) && !empty($_GET['message'])){

    // Submitted form data
    $name   = $_GET['name'];
    $email  = $_GET['email'];
    $message= $_GET['message'];

    /*
     * Send email to admin
     */
    $to     = 'alban.blanchard@gmail.com';
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

    // Set content-type header for sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= 'From: Contact Form Resume<alban@albanblanchard.fr>' . "\r\n";

    // Send email
    if(mail($to,$subject,$htmlContent,$headers)){
      $status = 'ok';
    }else{
      $status = 'error';
    }

    // Output status
    echo $status;die;
}
