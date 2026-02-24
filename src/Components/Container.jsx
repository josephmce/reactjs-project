export default function Container({ children, variant = "default" }) {
    const variantClasses = {
        default: "max-w-6xl mx-auto px-4",
        secondary: "max-w-6xl mx-auto px-4 mt-8"
    };

    return (
        <div className={variantClasses[variant]}>
            {children}
        </div>
    );
}