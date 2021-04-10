<?php

declare(strict_types=1);

namespace Http;

class Response
{
  public function __invoke(int $statusCode, array $body): void
  {
    http_response_code($statusCode);

    echo json_encode($body);
    exit();
  }
}
