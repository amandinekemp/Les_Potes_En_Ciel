<?php

/** Subscribe to event handler to format exception responses in JSON **/
namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\KernelEvents;

class ExceptionSubscriber implements EventSubscriberInterface
{
  public function onKernelException(ExceptionEvent $event): void
  {
    $exception = $event->getThrowable();

    if ($exception instanceof HttpException) {
      $data = [
        'status' => $exception->getStatusCode(),
        'message' => $exception->getMessage()
      ];

      $event->setResponse(new JsonResponse($data));
    } else {
      $data = [
        'status' => 500, // Status doesn't exist because it's not an HTTP exception, so we default to 500.
        'message' => $exception->getMessage()
      ];

      $event->setResponse(new JsonResponse($data));
    }
  }

  public static function getSubscribedEvents(): array
  {
    return [
      KernelEvents::EXCEPTION => 'onKernelException',
    ];
  }
}
