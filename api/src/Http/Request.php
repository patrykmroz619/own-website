<?php

declare(strict_types=1);

namespace Http;

class Request
{
  public static function getBody(): array
  {
    $bodyJSON = file_get_contents('php://input');

    return json_decode($bodyJSON, true);
  }

  public static function getPath(): string
  {
    $defaultPath = '/';

    $parsedUrl = parse_url($_SERVER['REQUEST_URI']);

    return $parsedUrl['path'] ?? $defaultPath;
  }
}
