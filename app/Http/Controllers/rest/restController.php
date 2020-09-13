<?php

namespace App\Http\Controllers\rest;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\RestModel;

class restController extends Controller
{
    public function rest(){
        return response()->json(RestModel::get(), 200);
    }
}
