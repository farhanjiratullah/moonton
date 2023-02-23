import { Head } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import Flickity from "react-flickity-component";

export default function Test() {
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
                    href="https://unpkg.com/flickity@2.3.0/dist/flickity.min.css"
                />
            </Head>
            <div>
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
                    <FeaturedMovie
                        slug="the-batman-in-love"
                        name={`The Batman in Love`}
                        category="Comedy"
                        thumbnail="/images/featured-1.png"
                        rating={1}
                    ></FeaturedMovie>
                    <FeaturedMovie
                        slug="the-batman-in-love"
                        name={`The Batman in Love`}
                        category="Comedy"
                        thumbnail="/images/featured-1.png"
                        rating={1}
                    ></FeaturedMovie>
                    <FeaturedMovie
                        slug="the-batman-in-love"
                        name={`The Batman in Love`}
                        category="Comedy"
                        thumbnail="/images/featured-1.png"
                        rating={1}
                    ></FeaturedMovie>
                    <FeaturedMovie
                        slug="the-batman-in-love"
                        name={`The Batman in Love`}
                        category="Comedy"
                        thumbnail="/images/featured-1.png"
                        rating={1}
                    ></FeaturedMovie>
                </Flickity>
            </div>
        </>
    );
}
