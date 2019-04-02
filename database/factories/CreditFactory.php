<?php

use Faker\Generator as Faker;

$factory->define(App\credit::class, function (Faker $faker) {
    return [
        'name'  => $faker->title,
        'value' => $faker->value
    ];
});
