<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RestModel extends Model
{
    protected $table = "dishes";

    public $timestamps = false;
    
    protected $fillable = [
        'id',
        'title',
        'datetime',
        'description',
        'composition',
        'cost',
        'tags',
        'img'
    ];
}
