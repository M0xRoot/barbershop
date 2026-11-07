<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role = Role::create(
            [
                'name' => 'admin',
                'guard_name' => 'web',
            ],
            [
                "name" => "owner",
                "guard_name" => "mobile",
            ],
            [
                "name" => "user",
                "",
            ]
        );
    }
}
