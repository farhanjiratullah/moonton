import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

export default function Dashboard({ auth, ziggy, movies, featured_movies }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <>
            <Head title="Dashboard">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <Authenticated auth={auth}>
                {/* <!-- Featured --> */}
                <div className="mb-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity
                        className={"gap-[30px]"}
                        elementType={"div"}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        reloadOnUpdate
                        static
                    >
                        {/* <!-- Movie Thumbnail --> */}
                        {featured_movies.map((featured_movie) => {
                            return (
                                <FeaturedMovie
                                    key={featured_movie.id}
                                    slug={featured_movie.slug}
                                    name={featured_movie.name}
                                    category={featured_movie.category}
                                    thumbnail={`${ziggy.url}/storage/${featured_movie.thumbnail}`}
                                    rating={featured_movie.rating}
                                ></FeaturedMovie>
                            );
                        })}
                    </Flickity>
                </div>
                {/* <!-- /Featured --> */}

                {/* <!-- Browse --> */}
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity
                        className={"gap-[30px]"}
                        elementType={"div"}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        reloadOnUpdate
                        static
                    >
                        {movies.map((movie) => {
                            return (
                                <MovieCard
                                    key={movie.id}
                                    slug={movie.slug}
                                    name={movie.name}
                                    category={movie.category}
                                    thumbnail={`${ziggy.url}/storage/${movie.thumbnail}`}
                                ></MovieCard>
                            );
                        })}
                    </Flickity>
                </div>
                {/* <!-- /Continue Watching --> */}
            </Authenticated>
        </>
    );
}
