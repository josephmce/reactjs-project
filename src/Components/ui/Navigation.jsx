import { Link } from "react-router-dom";
import Button from "./Button";
export default function Navigation({ children, variant = "default" }) {
    const variantClasses = {
        default: "max-w-6xl mx-auto px-4",
        secondary: "max-w-6xl mx-auto px-4 mt-8"
    };

    return (
        <div className={variantClasses[variant]}>
            <Link to="/"><Button variant="nav_primary">Home</Button></Link>
            <Link to="/products?category=men%27s+clothing&sort=none"><Button variant="nav_secondary">Mens</Button></Link>
            <Link to="/products?category=women%27s+clothing&sort=none"><Button variant="nav_secondary">Womens</Button></Link>
            <Link to="/products?category=jewelery&sort=none"><Button variant="nav_secondary">Accessories</Button></Link>
        </div>
    );
}