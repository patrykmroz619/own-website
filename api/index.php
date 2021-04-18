<?php

declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use Actions\MailAction;
use Actions\PreflightAction;
use Actions\ReportErrorAction;
use Http\Response;
use Dotenv\Dotenv;
use Http\Router;

try {
  $dotenv = Dotenv::createImmutable(__DIR__);
  $dotenv->load();

  header('Access-Control-Allow-Origin: ' . $_ENV['URL']);
  header('Access-Control-Allow-Headers: Content-Type');
  header('Access-Control-Allow-Methods: POST');
  header('Content-Type: application/json');

  Router::add('/contact', 'POST', new MailAction);

  Router::add('/report', 'POST', new ReportErrorAction);

  Router::add('*', 'OPTIONS', new PreflightAction);

  Router::run();

} catch (Throwable $e) {
  $response = new Response();
  $response(500);
}
