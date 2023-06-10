<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Instantiate PHPMailer
  $mail = new PHPMailer(true);

  try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'BravtaDevs@gmail.com'; // Replace with your SMTP username
    $mail->Password = 'DedSec2023Bravta'; // Replace with your SMTP password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587; // Replace with your SMTP port
 
    // Recipients
    $mail->setFrom('BravtaDevs@gmail.com', 'Bravta'); // Replace with your email address and name
    $mail->addAddress('BravtaDevs@gmail.com', 'Bravta'); // Replace with recipient email address and name

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "<h3>New message from $name ($email)</h3><p>$message</p>";

    // Send the email
    $mail->send();
    echo '<div class="sent-message">Your message has been sent. Thank you!</div>';
  } catch (Exception $e) {
    echo '<div class="error-message">An error occurred. Please try again later.</div>';
  }
}
?>

