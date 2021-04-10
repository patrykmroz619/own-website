<?php

declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use Http\Request;
use Http\Response;
use ContactForm\ContactFormHandler;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

header('Access-Control-Allow-Origin: ' . $_ENV['URL']);
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json');

$path = Request::getPath();
$response = new Response();

if($path === '/contact') {
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
    $response(422, ['success' => false, 'data' => $errors]);
  }

  $completed = $contactFormHandler->sendEmail();

  if($completed)
    $response(200, ['success' => true, 'data' => []]);
  else
    $response(500, ['success' => false, 'data' => []]);
}

$response(404, ['success' => false, 'data' => []]);
