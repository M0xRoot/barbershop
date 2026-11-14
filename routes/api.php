<?php

use illuminate\support\facades\Route;

$apis = [
    'admin',
    'owner',
    'client',
];

foreach ($apis as $api) {
    Route::prefix($api)
        ->name("{$api}.")
         ->group(__DIR__ . "/api/{$api}.php");
}
