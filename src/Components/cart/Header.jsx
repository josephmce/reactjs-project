import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";

export default function Header() {
  const cartItems = useSelector(state => state.cart.items); //takes this input → returns this output, so: state goes in → state.cart.items comes out
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex justify-between p-4">
    <Link to="/">
    <h1 className="text-xl font-bold cursor-pointer text-white no-underline">JM</h1>
    </Link>
    <Navigation/>
      <Link to="/cart" className="relative">
        <span className="text-[40px]">🛒</span>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 text-s">
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  );
}