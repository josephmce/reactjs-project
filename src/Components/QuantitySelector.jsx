import { useState } from "react";
import Button from './Button'

// Export the QuantitySelector component as the default export
export default function QuantitySelector() {
    // Initialize quantity state with a starting value of 1
    const [quantity, setQuantity] = useState(1);

    // Function to increase quantity by 1
    const increase = () => {
        setQuantity(q => q + 1);
    };

    // Function to decrease quantity, but only if it's greater than 1
    const decrease = () => {
        if(quantity > 1) {
            setQuantity(q => q - 1);
        }
    };

    // Render the quantity selector UI
    return (
        // Container div with flexbox layout and spacing
        <div className="flex items-center space-x-4 mt-4">
            {/* Decrease button that triggers the decrease function */}
            <Button size="sm" onClick={decrease}>
                -
            </Button>
            {/* Display the current quantity value */}
            <span className="text-lg font-semibold text-gray-800">{quantity}</span>
            {/* Increase button that triggers the increase function */}
            <Button size="sm" onClick={increase}>
                +
            </Button>
        </div>
    );
}