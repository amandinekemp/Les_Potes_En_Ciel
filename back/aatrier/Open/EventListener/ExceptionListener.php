<?php
//src/EventLestener/ExceptionListener.php
namespace App\EventListener;

use Some/Events/FooEvent;

class Barlistener
{
    public function doSomething(FooEvent $event)
    {
        // ...
    }
}
