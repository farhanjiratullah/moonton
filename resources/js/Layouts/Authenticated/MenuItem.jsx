import { Link } from "@inertiajs/react";

export default function MenuItem({
    link,
    isActive,
    method = "get",
    icon,
    text,
}) {
    return (
        <Link
            href={link ? route(link) : null}
            className={`side-link ${isActive && "active"}`}
            method={method}
            as="button"
        >
            {icon}
            {text}
        </Link>
    );
}
