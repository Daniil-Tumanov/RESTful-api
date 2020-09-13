<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RestModel extends Model
{
    protected $table = "dishes";

    protected $fillable = [
        'id',
        'title',
        'datetime',
        'description',
        'composotion',
        'cost',
        'tags',
        'img'
    ];
}
