<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Response;

class MovieController extends Controller
{
    public function show(Movie $movie): Response
    {
        return inertia('User/Dashboard/Movie/Show', [
            'movie' => $movie
        ]);
    }
}
