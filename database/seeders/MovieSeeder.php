<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Batman in Love',
                'slug' => 'the-batman-in-love',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
                'thumbnail' => 'assets/thumbnails/featured-1.png',
                'rating' => 4.5,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Despicable Me 2',
                'slug' => 'despicable-me-2',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
                'thumbnail' => 'assets/thumbnails/featured-2.png',
                'rating' => 4.2,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Trains Dragons II',
                'slug' => 'trains-dragons-ii',
                'category' => 'Love',
                'video_url' => 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
                'thumbnail' => 'assets/thumbnails/featured-3.png',
                'rating' => 4.9,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Meong Golden',
                'slug' => 'meong-golden',
                'category' => 'Horror',
                'video_url' => 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
                'thumbnail' => 'assets/thumbnails/browse-1.png',
                'rating' => 4.5,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Strange',
                'slug' => 'strange',
                'category' => 'Adventure',
                'video_url' => 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
                'thumbnail' => 'assets/thumbnails/browse-2.png',
                'rating' => 4.5,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Fornite',
                'slug' => 'fornite',
                'category' => 'Horror',
                'video_url' => 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
                'thumbnail' => 'assets/thumbnails/browse-3.png',
                'rating' => 4.5,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'King\'s Queen',
                'slug' => 'king-s-queen',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
                'thumbnail' => 'assets/thumbnails/browse-4.png',
                'rating' => 4.5,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Morbius',
                'slug' => 'morbius',
                'category' => 'Horror',
                'video_url' => 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
                'thumbnail' => 'assets/thumbnails/browse-5.png',
                'rating' => 4.5,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Movie::insert($movies);
    }
}
