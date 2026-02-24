// Import the useState hook from React (note: this import can be removed since it's not used)
import { useState } from "react";
// Import the Button component
import Button from './Button';

/*
We want Product to own the state, and QuantitySelector to just modify it via props.
###✅ Key Points
##Product owns the state → this is called “lifting state up”.
##QuantitySelector receives quantity and setQuantity via props → it no longer has its own state.
##Now when you click +/-, Product’s state updates → React re-renders the Add {quantity} to Cart button → number updates correctly.
*/


// Export a QuantitySelector component that accepts quantity and setQuantity as props
export default function QuantitySelector({ quantity, setQuantity }) {
    // Define a function to increment the quantity by 1
    const increase = () => setQuantity(prev => prev + 1);
    // Define a function to decrement the quantity by 1, with a minimum of 1
    const decrease = () => setQuantity(prev => Math.max(prev - 1, 1));

    // Return the JSX for the quantity selector UI
    return (
        <div className="flex items-center space-x-4 mt-4">
            {/* Button to decrease quantity */}
            <Button size="sm" onClick={decrease}>-</Button>
            {/* Display the current quantity value */}
            <span className="text-lg font-semibold text-white">{quantity}</span>
            {/* Button to increase quantity */}
            <Button size="sm" onClick={increase}>+</Button>
        </div>
    );
}