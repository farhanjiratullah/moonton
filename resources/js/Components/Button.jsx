import PropTypes from "prop-types";
import "../../css/button.css";
import { twMerge } from "tailwind-merge";

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    processing: PropTypes.bool,
    children: PropTypes.node,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
};

export default function Button({
    type = "submit",
    className = "",
    processing,
    children,
    onClick,
    variant = "primary",
}) {
    const classes = twMerge(
        `rounded-2xl py-[13px] text-center w-full btn-${variant} ${
            processing && "opacity-30"
        } ${className}`
    );

    return (
        <button
            type={type}
            onClick={onClick}
            className={classes}
            disabled={processing}
        >
            {children}
        </button>
    );
}
