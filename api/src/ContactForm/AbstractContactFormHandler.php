<?php

declare(strict_types=1);

namespace ContactForm;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

abstract class AbstractContactFormHandler
{
  private PHPMailer $mail;

  public function __construct()
  {
    $this->mail = new PHPMailer();
    $this->configureSMTP();
  }

  protected function getConfiguredMail(): PHPMailer
  {
    return $this->mail;
  }

  private function configureSMTP(): void
  {
    $this->mail->isSMTP();
    $this->mail->SMTPDebug = SMTP::DEBUG_OFF;
    $this->mail->Host = $_ENV['SMTP_HOST'];
    $this->mail->Port = $_ENV['SMTP_PORT'];
    $this->mail->SMTPAuth = true;
    $this->mail->Username = $_ENV['SMTP_USERNAME'];
    $this->mail->Password = $_ENV['SMTP_PASSWORD'];
  }
}
