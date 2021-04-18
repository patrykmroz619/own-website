<?php

declare(strict_types=1);

namespace Http;

class Request
{
  public function getBody(): array
  {
    $bodyJSON = file_get_contents('php://input');

    return json_decode($bodyJSON, true) ?? [];
  }

  public function getPath(): string
  {
    $defaultPath = '/';

    $parsedUrl = parse_url($_SERVER['REQUEST_URI']);

    return $parsedUrl['path'] ?? $defaultPath;
  }

  public function getMethod(): string
  {
    return $_SERVER['REQUEST_METHOD'];
  }
}
