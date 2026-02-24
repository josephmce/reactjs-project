import { useState } from "react";

export default function Toggle() {
//isOn is a boolean state variable that determines whether the toggle is on or off. setIsOn is a function that updates the value of isOn. The initial value of isOn is set to false, meaning the toggle starts in the "off" position.
  const [isOn, setIsOn] = useState(false);

return (
    <div className="space-y-4">
        <button onClick={() => setIsOn(!isOn)} className="px-4 py-2 bg-blue-600 text-white rounded">
        Toggle
        </button>
    <p>Status: {isOn ? "ON" : "OFF"}</p>
    </div>
);
}
