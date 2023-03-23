import { Link, Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, ziggy, flash_message, movies }) {
    return (
        <>
            <Authenticated auth={auth}>
                <Head>
                    <title>Movies</title>
                </Head>
                <Link href={route("admin.dashboard.movies.create")}>
                    <Button type="button" className="w-40 mb-8">
                        Insert New Movie
                    </Button>
                </Link>
                {flash_message.message && (
                    <FlashMessage
                        message={flash_message.message}
                    ></FlashMessage>
                )}
                <table className="table-fixed w-full text-center">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>
                                    <img
                                        src={`${ziggy.url}/storage/${movie.thumbnail}`}
                                        alt={movie.name}
                                        className="w-40 rounded"
                                    ></img>
                                </td>
                                <td>{movie.name}</td>
                                <td>{movie.category}</td>
                                <td>{movie.rating.toFixed(1)}</td>
                                <td>
                                    <Link
                                        href={route(
                                            "admin.dashboard.movies.edit",
                                            movie.slug
                                        )}
                                    >
                                        <Button type="button" variant="warning">
                                            Edit
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        href={route(
                                            "admin.dashboard.movies.destroy",
                                            movie.slug
                                        )}
                                    >
                                        <Button type="button" variant="danger">
                                            Delete
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Authenticated>
        </>
    );
}
