<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BackendController extends Controller
{
    function test(){
        return view('backend.test');
    }

    public function dashboard()
    {
        return view('backend.dashboard');
    }
}
