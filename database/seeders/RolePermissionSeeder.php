<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::whereName('admin')->firstOrFail();

        $permissions = Permission::all();

        $adminRole->permissions()->sync($permissions->modelKeys());
    }
}
