<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index() {
        $movies = Movie::all();

        return inertia('User/Dashboard/Index', [
            'movies' => $movies,
            'featured_movies' => $movies->filter(fn($movie) => $movie->is_featured),
        ]);
    }
}
