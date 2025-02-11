import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Checkout() {
  const { isLoggedIn } = useSelector((state) => state.user);

  if (!isLoggedIn)
    return <Navigate to="/login" state={{ from: "/checkout" }} />;

  return (
    <div className="container">
      <h1 className="page-title">Checkout</h1>
      <form className="grid grid-cols-2 gap-4">
        <div>
          <label className="label-style" htmlFor="name">
            Name
          </label>
          <input
            className="input-style"
            type="text"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="label-style" htmlFor="address">
            Address
          </label>
          <input
            className="input-style"
            type="text"
            id="address"
            placeholder="Enter your address"
          />
        </div>
        <div className="col-span-2">
          <button className="button-style" type="submit">
            Confirm Purchase
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
