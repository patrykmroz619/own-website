<?php

declare(strict_types=1);

namespace ContactForm;

class FormDataValidator
{
  public static function validate(array $formData): array
  {
    $errors = [];

    $nameError = self::validateName($formData['name']);
    if($nameError)
      $errors['name'] = $nameError;

    $emailError = self::validateEmail($formData['email']);
    if($emailError)
      $errors['email'] = $emailError;

    $subjectError = self::validateSubject($formData['subject']);
    if($subjectError)
      $errors['subject'] = $subjectError;

    $contentError = self::validateContent($formData['content']);
    if($contentError)
      $errors['content'] = $contentError;

    return $errors;
  }

  private static function validateName(?string $name): ?string
  {
    if(!$name) {
      return 'The name is required.';
    }

    if(strlen($name) > 30) {
      return 'The name is too long.';
    }

    if(strlen($name) < 2) {
      return 'The name is too short.';
    }

    return null;
  }

  private static function validateEmail(?string $email): ?string
  {
    if(!$email) {
      return 'The e-mail is required.';
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      return 'The e-mail is invalid.';
    }

    return null;
  }

  private static function validateSubject(?string $subject): ?string
  {
    if(!$subject) {
      return 'The subject is required.';
    }

    return null;
  }

  private static function validateContent(?string $subject): ?string
  {
    if(!$subject) {
      return 'The message\'s content is required.';
    }

    return null;
  }
}
