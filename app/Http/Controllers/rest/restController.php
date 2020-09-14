<?php

namespace App\Http\Controllers\rest;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\RestModel;
use Validator;

class restController extends Controller
{
    public function dishes(){
        return response()->json(['status code' => 200,'status text' => 'List dishes','Dishes' => RestModel::get()], 200);
    }

    public function dishById($id){
        $dishes = RestModel::find($id);
        if(is_null($dishes)){
            return response()->json(['status code' => 404, 'status text' => 'Dish not found', 'body'=>'message: Dish not found'], 404);
        }
        return response()->json(['status code'=>200, 'status text:'=>'View dish', 'Dish'=>RestModel::find($id)], 200);
    }

    public function addDish(Request $req){
        $rules = [
            'title' => 'required|min:2',
            'description' => 'required|min:2',
            'composition' => 'required|min:2',
            'cost' => 'required|min:2',
            'tags' => 'required|min:2',
            'img' => 'required|min:2'
        ];
        $validator = Validator::make($req->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $dishes = RestModel::create($req->all());
        return response()->json($dishes, 201);
    }

    public function editDish(Request $req, $id){
       /* $rules = [
            'title' => 'required|min:2',
            'description' => 'required|min:2',
            'composition' => 'required|min:2',
            'cost' => 'required|min:2',
            'tags' => 'required|min:2',
            'img' => 'required|min:2'
        ];
        $validator = Validator::make($req->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }*/
        $dishes = RestModel::find($id);
        if(is_null($dishes)){
            return response()->json(['status code' => 400, 'status text' => 'Editing error', 'body'=>'status: false, Dish not found'], 404);
        }
        $dishes->where('id', $id)->update($req->all());
        return response()->json(['status code'=>201, 'status text:'=>'View dish', 'Dish'=>$dishes], 200);
    }

    public function deleteDish($id){
        $dishes = RestModel::find($id);
        if(is_null($dishes)){
            return response()->json(['status code' => 404, 'status text' => 'Dish not found', 'body'=>'message: Dish not found'], 404);
        }
        $dishes->where('id', $id)->delete();
        return response()->json(['status code' => 201,'status text' => "Successful delete", 'body'=>'message: Dish not found'], 201);
    }
}