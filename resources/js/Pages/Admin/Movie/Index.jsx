import { Link, Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flash_message }) {
    return (
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
                <FlashMessage message={flash_message.message}></FlashMessage>
            )}
        </Authenticated>
    );
}
