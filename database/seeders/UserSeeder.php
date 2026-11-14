<?php

namespace Database\Seeders;

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
        User::create([
            'first_name' => 'Mohammed Elamine',
            'last_name' => 'Houfani',
            'email' => 'mrg19178@gmail.com',
            'phone_number' => '0656249466',
            'password' => Hash::make('123456789'),
        ]);
    }
}
