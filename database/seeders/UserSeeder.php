<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::whereName('admin')->firstOrFail();

        User::create([
            'first_name' => 'Mohammed Elamine',
            'last_name' => 'Houfani',
            'role_id' => $adminRole->id,
            'email' => 'mrg19178@gmail.com',
            'phone_number' => '0656249466',
            'password' => Hash::make('123456789'),
            'status' => 'active',
        ]);
    }
}
