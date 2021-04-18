<?php

declare(strict_types=1);

namespace Actions;

use Http\ActionInterface;
use Http\Request;
use Http\Response;

class PreflightAction implements ActionInterface
{
  public function __invoke(Request $request, Response $response)
  {
    $response(200);
  }
}
