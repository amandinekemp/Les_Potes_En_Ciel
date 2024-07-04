<?php

// src/Services/MailLogger.php
namespace App\Services;

class MailLogger
{
    private $adminEmail;

    public function __construct($adminEmail)
    {
        $this->adminEmail = $adminEmail;
    }

    public function sendMail()
    {
        /* ... */ 
    }
}
