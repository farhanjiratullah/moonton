import PropTypes from "prop-types";
import "../../css/button.css";

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
    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-2xl py-[13px] text-center w-full btn-${variant} ${
                processing && "opacity-30"
            } ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
