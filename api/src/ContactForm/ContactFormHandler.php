<?php

declare(strict_types=1);

namespace ContactForm;

class ContactFormHandler extends AbstractContactFormHandler
{
  private array $formData;

  public function __construct(array $formData)
  {
    parent::__construct();
    $this->formData = $formData;
  }

  public function validate(): ?array
  {
    $errors = FormDataValidator::validate($this->formData);

    if(empty($errors))
      return null;

    return $errors;
  }

  public function sendEmail(): bool
  {
    $mail = $this->getConfiguredMail();
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    $senderData = $this->getSenterData();

    $mail->setFrom($_ENV['EMAIL_FROM'], $senderData);
    $mail->addReplyTo($this->formData['email'], $this->formData['name']);
    $mail->addAddress($_ENV['EMAIL_TO'], $_ENV['NAME']);

    $mail->Subject = $this->getSubjectMessage();
    $mail->Body = $this->getBodyMessage();

    return $mail->send();
  }

  private function getSenterData(): string
  {
    $name = $this->formData['name'];
    $email = $this->formData['email'];

    return $name . ' | ' . $email;
  }

  private function getSubjectMessage(): string
  {
    $prefix = 'patrykmroz.pl - ';

    return $prefix . $this->formData['subject'];
  }

  private function getBodyMessage(): string
  {
    $message = $this->formData['content'];
    $suffix = "\n\nOd: " . $this->getSenterData();

    return $message . $suffix;
  }
}
