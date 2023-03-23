<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMovieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'nullable|string',
            'slug' => 'nullable|string|unique:movies,slug,' . $this->movie->id,
            'category' => 'nullable|string',
            'video_url' => 'nullable|url',
            'thumbnail' => 'nullable|image',
            'rating' => 'nullable|decimal:1|min:0|max:5',
            'is_featured' => 'boolean',
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'name' => is_null($this->name) ? $this->movie->name : $this->name,
            'slug' => str($this->name)->slug()->toString(),
            'category' => is_null($this->category) ? $this->movie->category : $this->category,
            'video_url' => is_null($this->video_url) ? $this->movie->video_url : $this->video_url,
            'rating' => is_null($this->rating) ? $this->movie->rating : $this->rating,
            'is_featured' => $this->is_featured == 1 ? true : false
        ]);
    }
}
