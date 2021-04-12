<?php

declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use Http\Request;
use Http\Response;
use ContactForm\ContactFormHandler;
use Dotenv\Dotenv;

try {
  $dotenv = Dotenv::createImmutable(__DIR__);
  $dotenv->load();

  header('Access-Control-Allow-Origin: ' . $_ENV['URL']);
  header('Access-Control-Allow-Headers: Content-Type');
  header('Access-Control-Allow-Methods: POST');
  header('Content-Type: application/json');

  $path = Request::getPath();
  $method = Request::getMethod();
  $response = new Response();

  if($path === '/contact' && $method === 'POST') {
    $requestBody = Request::getBody();

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

if($method === 'OPTIONS') {
  $response(200);
}

$response(404);

} catch (Throwable $e) {
  $response(500);
}
