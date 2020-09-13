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

    public function restById($id){
        return response()->json(RestModel::find($id), 200);
    }

    public function addRest(Request $req){
        $rest = RestModel::create($req->all());
        return response()->json($rest, 201);
    }
}
