<?php

return [

    /*
    |--------------------------------------------------------------------------
    | cross-origin resource sharing (cors) configuration
    |--------------------------------------------------------------------------
    |
    | here you may configure your settings for cross-origin resource sharing
    | or "cors". this determines what cross-origin operations may execute
    | in web browsers. you are free to adjust these settings as needed.
    |
    | to learn more: https://developer.mozilla.org/en-us/docs/web/http/cors
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['*'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,

];
