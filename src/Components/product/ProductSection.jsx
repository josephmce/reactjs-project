/**
 * Product Component
 * Displays a product with quantity selection, add to cart functionality,
 * and delivery information in an accordion.
 */

import { useState } from "react";
import QuantitySelector from "../ui/QuantitySelector";
import Accordion from "../ui/Accordion";
import Button from "../ui/Button";
import Container from "../ui/Container";
import ProductGrid from "./ProductGrid";
import Navigation from "../ui/Navigation";
import { Link } from "react-router-dom";

export default function Product() {
    // State hook to manage the quantity of items selected
    const [quantity, setQuantity] = useState(1);

    // Handler function triggered when the add to cart button is clicked
    const handleAddToCart = () => {
        // Log the selected quantity to the console
        console.log("Added:", quantity);
    };

    return (
        // Container div with spacing, border, padding, and rounded corners
        <Container variant="secondary">
           <ProductGrid />
            {/* Accordion component to display delivery information */}
            <Accordion title="Delivery Information">
                <p>We offer free delivery on all orders over £50. Orders under £50 will incur a £5 delivery fee. Delivery times are typically 3-5 business days.</p>
            </Accordion>
        </Container>
    );
}
