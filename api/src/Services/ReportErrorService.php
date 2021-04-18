<?php

declare(strict_types=1);

namespace Services;

class ReportErrorService extends AbstractMailService
{
  public function report(array $reportedError)
  {
    $this->sendMail($reportedError);
    $this->logToFile($reportedError);
  }

  private function sendMail(array $reportedError)
  {
    $mail = $this->getConfiguredMail();

    $mail->setFrom($_ENV['EMAIL_FROM'], 'Error');
    $mail->addAddress($_ENV['EMAIL_TO'], $_ENV['NAME']);

    $mail->Subject = 'Error on website!';
    $mail->Body = json_encode($reportedError);

    return $mail->send();
  }

  private function logToFile(array $reportedError)
  {
    $date = date('d-m-Y h-i-s');

    $fileName = __DIR__ . '../../../logs/' . $date . '.txt';

    $logFile = fopen($fileName, 'w');

    fwrite($logFile, json_encode($reportedError));

    fclose($logFile);
  }
}
