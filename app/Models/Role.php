<?php

namespace App\Models;

use Illuminate\Console\Attributes\Hidden;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'guard_name'])]
#[Hidden(['created_at', 'updated_at'])]


class Role extends Model
{
    //
}
