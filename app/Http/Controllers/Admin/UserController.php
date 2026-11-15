<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\Auth\UserResource;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function user(Request $request)
    {
        return new UserResource($request->user());
    }
}
