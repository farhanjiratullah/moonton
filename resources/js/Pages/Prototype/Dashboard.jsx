import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

export default function Dashboard() {
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
            <Authenticated>
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
                        {[1, 2, 3, 4].map((i) => {
                            return (
                                <FeaturedMovie
                                    key={i}
                                    slug="the-batman-in-love"
                                    name={`The Batman in Love ${i}`}
                                    category="Comedy"
                                    thumbnail="/images/featured-1.png"
                                    rating={i + 1}
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
                        {[1, 2, 3, 4, 5, 6].map((i) => {
                            return (
                                <MovieCard
                                    key={i}
                                    slug="meong-golden"
                                    name={`Meong Golden ${i}`}
                                    category="Horror"
                                    thumbnail="/images/browse-1.png"
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
