<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name'])]

class Role extends Model
{
    public function permissions()
    {
        return $this->belongsToMany(Role::class, 'role_has_permissions', 'role_id', 'permission_id');
    }
}
