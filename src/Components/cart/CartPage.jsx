import { useSelector } from "react-redux"; // Import useSelector hook to access Redux store state
import { Link } from "react-router-dom"; // Import Link component for navigation between routes, this allows us to create links that navigate to different pages without reloading the entire app. The reason we need it in this page is because we have a "Proceed to Checkout" button that should take the user to the checkout page when clicked. By using Link, we can navigate to the checkout page without causing a full page reload, which provides a smoother user experience.
import Button from "../ui/Button";

export default function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  const products = useSelector(state => state.products.items);
    //map() is an array method in JavaScript.
    /*
    Loops through every item in an array
    Runs a function for
    Returns a new array*/
    //ci is the current item in the cartItems array that we are processing in the map function. We use it to find the corresponding product details from the products array based on the productId, and then we create a new object that combines the product details with the quantity from the cart item. This allows us to have all the necessary information about each item in the cart, including its name, price, and quantity, which we can then use to display the cart contents and calculate totals.
  const cartDetails = cartItems.map(ci => { //"ci => {" means: "For each cart item, run this function."
    const product = products.find(p => p.id === ci.productId); //find() is an array method that searches an array and returns the first item that matches.
    return { ...product, quantity: ci.quantity }; //...product contains all the properties of the product object, and then we add a new property called quantity that comes from the cart item (ci.quantity). This way, we create a new object that has all the details of the product along with how many of that product are in the cart.
  });

  const total = cartDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Your Cart</h2>
      {cartDetails.map(item => (
        <div key={item.id} className="flex justify-between border p-2 rounded">
          <span>{item.name} x {item.quantity}</span>
          <span>£{(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="text-right font-bold">Total: £{total.toFixed(2)}</div>
      <Link to="/checkout">
        <Button>
          Proceed to Checkout
        </Button>
      </Link>
        <Link to="/">
        <Button className="ml-2" variant="secondary">
          Back to Products
        </Button>
      </Link>
    </div>
  );
}