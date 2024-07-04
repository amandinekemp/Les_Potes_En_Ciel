<?php
// src/EventSubscriber/SummaryMailSubscriber
namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\PostResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class SummaryMailSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            // 'kernel.terminate'
            KernelEvents::TERMINATE => [
                ['sendProductPaidMail', 0],
            ]
        ];
    }

    public function sendProductPaidMail(PostResponseEvent $event)
    {
        // envoi de l'email
    }
}
?>
