<?php

declare(strict_types=1);

namespace Http;

use Http\Request;
use Http\Response;

interface ActionInterface
{
  public function __invoke(Request $request, Response $response);
}
