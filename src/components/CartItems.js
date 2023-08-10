import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItems() {
  const { cartItems, decrementQuantity, incrementQuantity, removeProduct } =
    useContext(CartContext);
  return (
    <table className="w-full py-10">
      <thead>
        <tr>
          <th className="w-[250px] text-xl">Product</th>
          <th className="w-[250px] text-xl">Price</th>
          <th className="w-[250px] text-xl">Quantity</th>
          <th className="w-[250px] text-xl">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((product) => (
          <tr key={product.id}>
            <td>
              <img
                className="h-[100px] mx-auto"
                src={product.image}
                alt={product.title}
              />
            </td>
            <td className="text-xl font-bold text-center">${product.price}</td>
            <td className="text-xl font-bold text-center">
              <div className="flex w-[300px] mx-auto justify-center items-center gap-2">
                <button
                  onClick={() => decrementQuantity(product)}
                  className="flex-1 text-xl font-bold bg-[#ddd] rounded"
                >
                  -
                </button>
                <span className="px-4 p-2 bg-[#f89cab] font-bold text-xl rounded">
                  {product.quantity}
                </span>
                <button
                  onClick={() => incrementQuantity(product)}
                  className="flex-1 text-xl font-bold bg-[#ddd] rounded"
                >
                  +
                </button>
              </div>
            </td>
            <td className="text-xl font-bold text-center">
              <div className="flex justify-between items-center gap-5 mt-4">
                <div className="totla-card-price flex-1 font-semibold text-2xl">
                  Totla :{" "}
                  <span className="font-bold">
                    ${product.price * product.quantity}
                  </span>
                </div>
                <button
                  onClick={() => removeProduct(product)}
                  className="p-2 text-sm font-semibold text-white bg-red-600 border-red-600 border-2 hover:bg-transparent hover:text-red-600 rounded"
                >
                  Remove
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartItems;
