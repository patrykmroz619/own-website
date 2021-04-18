<?php

declare(strict_types=1);

namespace Actions;

use ContactForm\ContactFormHandler;
use Http\ActionInterface as HttpActionInterface;
use Http\Request;
use Http\Response;

class MailAction implements HttpActionInterface
{
  public function __invoke(Request $request, Response $response)
  {
    $requestBody = $request->getBody();

    $formData = [
      'name' => $requestBody['name'] ?? null,
      'email' => $requestBody['email'] ?? null,
      'subject' => $requestBody['subject'] ?? null,
      'content' => $requestBody['content'] ?? null
    ];

    $contactFormHandler = new ContactFormHandler($formData);

    $errors = $contactFormHandler->validate();

    if($errors) {
      $response->withData(['success' => false, 'data' => $errors]);
      $response(422);
    }

    $completed = $contactFormHandler->sendEmail();

    if($completed) {
      $response->withData(['success' => true, 'data' => []]);
      $response(200);
    } else {
      $response->withData(['success' => false, 'data' => []]);
      $response(500);
    }
  }
}
