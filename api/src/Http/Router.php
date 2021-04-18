<?php

declare(strict_types=1);

namespace Http;

class Router
{
  private static array $routes = [];

  public static function add(string $route, string $method, ActionInterface $action)
  {
    array_push(self::$routes, [
      'route' => $route,
      'method' => $method,
      'action' => $action
    ]);
  }

  public static function run()
  {
    $request = new Request();
    $path = $request->getPath();
    $method = $request->getMethod();

    $response = new Response();
    $found = false;

    foreach(self::$routes as $route)
    {
      if($route['route'] === $path && $route['method'] === $method) {
        $action = $route['action'];
        $action($request, $response);
        $found = true;
      }

      if($route['route'] === '*' && $route['method'] === $method) {
        $action = $route['action'];
        $action($request, $response);
        $found = true;
      }
    }

    if(!$found) {
      $response(404);
    }
  }
}
