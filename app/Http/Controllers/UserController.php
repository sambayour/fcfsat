<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Contracts\Validation\Validator as ValidationValidator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Mail\WelcomeEmail;
use Illuminate\Support\Facades\Mail;


class UserController extends Controller
{

    public function register(Request $request){
        
        $validation = Validator::make($request->all(),[
            "name"=>"required",
            "email"=>"required|email",
            "password"=>"required",
            "c_password"=>"required|same:password"
        ]);
        
        if($validation->fails()){
            return response()->json(['error'=>$validation->errors()],203); 
        }
        else{
            $user = User::create([
                "name"=>$request->name,
                "email"=>$request->email,
                "password"=>Hash::make($request->password)
            ]);

        //mailable data

        $info = [
                "name"=>$request->name,
                "email"=>$request->email
        ];

            Mail::to($request->email)->send(new WelcomeEmail($info));
            
        }
        return response()->json($user);
    }

    public function login(Request $request){
            $validation = Validator::make($request->all(),[
                "email"=>'required|email',
                "password"=>"required"
            ]);
            if($validation->fails()){
                return response()->json(['error'=>$validation->errors()], 401);
            }
            else{
                if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
                    $user = Auth::user(); 
                    $success['token'] =  $user->createToken('MyApp')-> accessToken; 
                    return response()->json(['success' => $success],200); 
                }
                else{ 
                    return response()->json(['error'=>'Unauthorize'], 401); 
                } 
            }
           
           
        
    
    }

    public function unauthorize(){
        return response()->json(['error'=>'Unauthorised'], 401); 
    }
    public function checkToken(Request $request){
        return response()->json(["tokenisvalid"=>True],200);
    }
    public function logout(Request $request){
        $request->user()->tokens()->delete();
        return response()->json(["logout"=>true],200);
    }

    public function profile(Request $request){
        $uname = Auth::user()->name;
        return response()->json(["username"=>$uname],200);
    }
}
