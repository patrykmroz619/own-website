<?php

declare(strict_types=1);

namespace Actions;

use Http\ActionInterface;
use Http\Request;
use Http\Response;
use Services\ReportErrorService;

class ReportErrorAction implements ActionInterface
{
  public function __invoke(Request $request, Response $response)
  {
    $requestBody = $request->getBody();

    $reportErrorService = new ReportErrorService();
    $reportErrorService->report($requestBody);

    $response(200);
  }
}
