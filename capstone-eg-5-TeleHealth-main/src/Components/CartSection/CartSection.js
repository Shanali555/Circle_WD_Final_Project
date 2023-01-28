import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartSectionStyle.css";
import CartItem1 from "../../Images/cart-item1.png";
import CartItem2 from "../../Images/cart-item2.png";
import CartItem3 from "../../Images/cart-item3.png";
import CartItem4 from "../../Images/cart-item4.png";
import { FaRegTrashAlt } from "react-icons/fa";

const JSONDATA = [
  {
    img: CartItem1,
    price: 19.0,
    quantity: 1,
    name: "Anti-virus Mask",
  },
  {
    img: CartItem2,
    price: 29.0,
    quantity: 1,
    name: "Personal Vaporizer",
  },
  {
    img: CartItem3,
    price: 329.0,
    quantity: 1,
    name: "Blood Pressure Monitor",
  },
  {
    img: CartItem4,
    price: 350.0,
    quantity: 1,
    name: "Hand Sanitizer Gel",
  },
];

const CartSection = () => {
  const [Data, setData] = useState(JSONDATA);

  const handleIncrement = (item, i) => {
    const a = Data[i];
    a.quantity = Data[i]?.quantity + 1;
    let data = Data;
    data[i] = a;
    setData([...data]);
  };

  const handledecrement = (item, i) => {
    const a = Data[i];
    a.quantity = Data[i]?.quantity - 1;
    let data = Data;
    data[i] = a;
    setData([...data]);
  };

  return (
    <div id="cart-section">
      <div className="container">
        <div className="cart-container">
          <div className="cart-top">
            <h1>Cart</h1>
            <div className="cart-links">
              <Link to="/">Home</Link>
              <Link to="/Cart">Cart</Link>
            </div>
          </div>
          <div className="cart-item">
            <table>
              <tr>
                <th className="row-title">Image</th>
                <th className="row-title">Product name</th>
                <th className="row-title">Price</th>
                <th className="row-title">Quantity</th>
                <th className="row-title">Total</th>
                <th className="row-title">Trash</th>
              </tr>
              {Data?.length > 0 &&
                Data?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <img src={item?.img} alt="Cart-Img" />
                      </td>
                      <td className="product">{item?.name}</td>
                      <td className="price">Rs. {item?.price}</td>
                      <td>
                        <div className="quantity-box">
                          <button
                            className="dec-btn"
                            onClick={() => handledecrement(item, i)}
                          >
                            -
                          </button>
                          <div className="quantity">{item?.quantity}</div>
                          <button
                            className="inc-btn"
                            onClick={() => handleIncrement(item, i)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="total-price">
                        Rs. {item?.price * item?.quantity}
                      </td>
                      <td>
                        <FaRegTrashAlt className="trash-icon" />
                      </td>
                    </tr>
                  );
                })}
            </table>

            <div className="cart-buttons">
              <div className="coupon-box">
                <input type="text" name="" id="" />
                <button className="coupon-btn">Apply Coupon</button>
              </div>
              <div className="coupon-btn-s">
                <button className="update-btn">Update Cart</button>
              </div>
            </div>
          </div>

          <div className="cart-checkout">
            <h2>Checkout Summary</h2>
            <hr className="dark-line" />
            <div className="summery-row">
              <span>Subtotal</span> <span>Rs. 196.00</span>
            </div>
            <hr className="light-line" />
            <div className="summery-row">
              <span>Shipping</span> <span>Rs. 00.00</span>
            </div>
            <hr className="light-line" />
            <div className="summery-row">
              <span>Total</span> <span>Rs. 196.00</span>
            </div>
            <hr className="light-line" />
            <div className="summery-row">
              <span>Payable Total</span> <span> Rs. 196.00</span>
            </div>
            <button className="proceed-btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
