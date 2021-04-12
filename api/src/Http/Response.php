<?php

declare(strict_types=1);

namespace Http;

class Response
{
  private ?array $data = null;

  public function __invoke(int $statusCode): void
  {
    http_response_code($statusCode);

    if($this->data) {
      echo json_encode($this->data);
    }
    exit();
  }

  public function withData(array $data): void
  {
    $this->data = $data;
  }
}
