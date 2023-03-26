import { Head, useForm, router, usePage } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";

export default function Create({ auth, ziggy, movie }) {
    const { data, setData, processing } = useForm({
        ...movie,
    });

    const { errors } = usePage().props;

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) delete data.thumbnail;

        router.post(route("admin.dashboard.movies.update", movie.slug), {
            _method: "PUT",
            ...data,
        });

        // put(route("admin.dashboard.movies.update", movie.slug), { ...data });
    };

    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Edit Movie</title>
            </Head>
            <h1 className="text-xl">Edit movie: {movie.name}</h1>
            <hr className="mb-4" />
            <form onSubmit={submit}>
                <InputLabel forInput="name">Name</InputLabel>
                <TextInput
                    name="name"
                    id="name"
                    defaultValue={movie.name}
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    isFocused={true}
                    placeholder="Enter the name of the movie"
                    isError={Boolean(errors.name)}
                ></TextInput>
                <InputError message={errors.name} className="mt-2"></InputError>
                <InputError message={errors.slug} className="mt-2"></InputError>

                <InputLabel forInput="category" className="mt-4">
                    Category
                </InputLabel>
                <TextInput
                    name="category"
                    id="category"
                    defaultValue={movie.category}
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the category of the movie"
                    isError={Boolean(errors.category)}
                ></TextInput>
                <InputError
                    message={errors.category}
                    className="mt-2"
                ></InputError>

                <InputLabel forInput="video_url" className="mt-4">
                    Video URL
                </InputLabel>
                <TextInput
                    type="url"
                    name="video_url"
                    defaultValue={movie.video_url}
                    id="video_url"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the video url of the movie"
                    isError={Boolean(errors.video_url)}
                ></TextInput>
                <InputError
                    message={errors.video_url}
                    className="mt-2"
                ></InputError>

                <InputLabel forInput="thumbnail" className="mt-4">
                    Thumbnail
                </InputLabel>
                <img
                    src={`${ziggy.url}/storage/${movie.thumbnail}`}
                    alt={movie.name}
                    className="w-40 "
                />
                <TextInput
                    type="file"
                    name="thumbnail"
                    id="thumbnail"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert the thumbnail of the movie"
                    isError={Boolean(errors.thumbnail)}
                ></TextInput>
                <InputError
                    message={errors.thumbnail}
                    className="mt-2"
                ></InputError>

                <InputLabel forInput="rating" className="mt-4">
                    Rating
                </InputLabel>
                <TextInput
                    type="number"
                    name="rating"
                    defaultValue={movie.rating}
                    id="rating"
                    step="0.1"
                    min="0"
                    max="5"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the rating of the movie"
                    isError={Boolean(errors.rating)}
                ></TextInput>
                <InputError
                    message={errors.rating}
                    className="mt-2"
                ></InputError>

                <div className="flex flex-row mt-4 items-center">
                    <InputLabel forInput="is_featured" className="mr-3 mt-1">
                        Is Featured
                    </InputLabel>
                    <Checkbox
                        name="is_featured"
                        id="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        checked={movie.is_featured}
                    ></Checkbox>
                    <InputError
                        message={errors.is_featured}
                        className="mt-2"
                    ></InputError>
                </div>
                <Button className="mt-4" processing={processing}>
                    Edit
                </Button>
            </form>
        </Authenticated>
    );
}
