<?php

namespace App\Http\Controllers\rest;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\RestModel;

class restController extends Controller
{
    public function dishes(){
        return response()->json(RestModel::get(), 200);
    }

    public function dishById($id){
        return response()->json(RestModel::find($id), 200);
    }

    public function addDish(Request $req){
        $dishes = RestModel::create($req->all());
        return response()->json($dishes, 201);
    }

    public function editDish(Request $req, $id){
        $dishes = RestModel::find($id);
        $dishes->where('id', $id)->update($req->all());
        return response()->json($dishes, 200);
    }

    public function deleteDish($id){
        $dishes = RestModel::find($id);
        $dishes->where('id', $id)->delete();
        return response()->json('', 204);
    }
}
