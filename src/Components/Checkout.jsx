import { useState } from "react";
import Button from "./Button";

export default function Checkout() {
    //Creating a variable to hold the form data and a function to update it, using the useState hook. The initial state is an object with empty strings for each form field.
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: ""
    });

    const [errors, setErrors] = useState({}); // State to hold validation errors

    //Function to handle changes in the form fields. It updates the formData state with the new values entered by the user.
    //Handle input changes
    const handleChange = (e) => {
    // Destructuring the name and value from the event target (the input field that triggered the change)
        const { name, value } = e.target;
    // Updating the formData state by spreading the previous state and updating the specific field that changed
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isNameValid = formData.name.trim().length > 0;
const isEmailValid = emailRegex.test(formData.email);
const isAddressValid = formData.address.trim().length > 0;

const isFormValid = isNameValid && isEmailValid && isAddressValid;
    //Handle submit
    //Function to handle form submission. It prevents the default form submission behavior, performs validation checks on the form data, and updates the errors state if there are any validation issues. If there are no errors, it logs the form data to the console (simulating a successful form submission).
    // (e) is the event object that is passed to the handleSubmit function when the form is submitted. e.preventDefault() is called to prevent the default behavior of the form submission, which would typically cause a page reload. This allows us to handle the form submission in our own way without refreshing the page.
    const handleSubmit = (e) => { 
        e.preventDefault();
        
        const newErrors = {};
        // Simple validation checks for empty fields
        // .trim() is used to remove any leading or trailing whitespace from the input values before checking if they are empty. If a field is empty, an error message is added to the newErrors object with the corresponding field name as the key.
        if (!formData.name.trim()){
            newErrors.name = "Name is required";
        }
        //!form
        if (!formData.email.trim()){
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.address.trim()){
            newErrors.address = "Address is required";
        }
        setErrors(newErrors);
        // If no errors → submit
        if (Object.keys(newErrors).length === 0) {
        console.log("Form submitted:", formData);
        } else if (Object.keys(newErrors).length > 0) {
            console.log("Validation errors:", newErrors);
            
        }
    };

return ( 
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* //Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full border-grey-300 rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>

      {/* //Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      {/* //Address */}
      <div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </div>

      <Button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={!isFormValid}
         variant={isFormValid ? "primary" : "disabled"}
      >
        { isFormValid ? "Complete Order" : "Please fill out all fields"}
      </Button>
    </form>
  );
}