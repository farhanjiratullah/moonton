<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;

class StoreMovieRequest extends FormRequest
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
            'name' => 'required|string|unique:movies,name',
            'slug' => 'required|string',
            'category' => 'required|string',
            'video_url' => 'required|url',
            'thumbnail' => 'required|image',
            'rating' => 'required|decimal:1|min:0|max:5',
            'is_featured' => 'required|boolean',
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'slug' => str($this->name)->slug()->toString()
        ]);
    }
}
