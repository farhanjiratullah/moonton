<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response 
    {
        $movies = Movie::all();

        return inertia('User/Dashboard/Index', [
            'movies' => $movies,
            'featured_movies' => $movies->filter(fn($movie) => $movie->is_featured),
        ]);
    }
}
