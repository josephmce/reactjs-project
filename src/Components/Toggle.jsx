// Import the useState hook from React for managing component state
import { useState } from "react";
// Import the Button component from the Button module
import Button from './Button'

// Export a default functional component called Toggle
export default function Toggle() {
    // Declare a state variable 'isOn' (boolean) and a setter function 'setIsOn', initialized to false
    const [isOn, setIsOn] = useState(false);

    // Return the JSX to render
    return (
        // Container div with Tailwind CSS spacing and margin classes
        <div className="space-y-4 mt-2">
            {/* Button that toggles the 'isOn' state when clicked */}
            <Button onClick={() => setIsOn(!isOn)} variant="primary">
                Toggle
            </Button>
            <p className="text-lg font-semibold text-gray-800">Status: {isOn ? "ON" : "OFF"}</p>
        </div>
    );
}
