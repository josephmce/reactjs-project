/**
 * Product Component
 * Displays a product with quantity selection, add to cart functionality,
 * and delivery information in an accordion.
 */

import { useState } from "react";
import QuantitySelector from "../QuantitySelector";
import Accordion from "../Accordion";
import Button from "../Button";
import Container from "../Container";

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
            
            {/* Component for selecting product quantity */}
            <QuantitySelector 
                quantity={quantity}
                setQuantity={setQuantity}
            />

            {/* Primary button that adds items to cart on click */}
            <Button 
                variant="primary" 
                size="lg"
                onClick={handleAddToCart}
                
            >
                Add {quantity} to Cart
            </Button>

            {/* Accordion component displaying delivery information */}
            <Accordion title="Delivery Information">
                Ships in 2-3 working days.
            </Accordion>

        </Container>
    );
}
