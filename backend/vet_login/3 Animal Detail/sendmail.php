<?php
  $to = 'thibaud.maitre.simplon@gmail.com';
  $subject = 'Sujet du message';
  $message = "Bonjour,\n\n
  Nous vous contactons pour vous rappeler l'importance de la vaccination annuelle de votre animal. Le vaccin protège votre animal contre de nombreuses maladies graves et peut lui sauver la vie.\n
  Nous vous invitons à prendre rendez-vous dans notre cabinet pour que nous puissions vacciner votre animal. Si vous avez déjà pris rendez-vous, nous vous remercions de votre confiance et nous nous réjouissons de vous accueillir bientôt.\n\n
  Cordialement,\n\n
  SuperVeto";
  $headers = 'Content-Type: text/plain; charset=utf-8' . "\r\n" .
             'From: thibaudmaitre@gmail.com' . "\r\n" .
             'Reply-To: thibaudmaitre@gmail.com' . "\r\n" .
             'X-Mailer: PHP/' . phpversion();


  if (mail($to, $subject, $message, $headers)) {
      echo "E-mail sent !";
  } else {
      echo "Error sending e-mail";
  }
?>

