import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Fees.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; // adjust path if needed

function Fees() {
  const { state } = useLocation();
  const [painting, setPainting] = useState(null);
  const [size, setSize] = useState("");
  const [frame, setFrame] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  const handleConfirmPurchase = async () => {
  if (!painting) {
    alert("No painting selected!");
    return;
  }

  try {
    await addDoc(collection(db, "orders"), {
      painting: painting.title,
      price: painting.price,
      size: size || "small",
      frame: frame || "none",
      quantity,
      total,
      timestamp: serverTimestamp()
    });
    alert("Order placed successfully!");
    // Optional: clear selections
    setSize("");
    setFrame("");
    setQuantity(1);
  } catch (err) {
    console.error("Error saving order:", err);
    alert("Failed to place order. Try again.");
  }
};


  // Load selected painting when page loads
  useEffect(() => {
    if (state?.painting) {
      setPainting(state.painting);
    } else {
      const saved = localStorage.getItem("selectedPainting");
      if (saved) setPainting(JSON.parse(saved));
    }
  }, [state])

  // dynamic calculation
useEffect(() => {
    if (!painting) return;

    let sizePrice = size === "medium" ? 50 : size === "large" ? 100 : 0;
    let framePrice = frame === "classic" ? 40 : frame === "modern" ? 60 : 0;

    let shipping = 20;
    let handling = 10;

    const bill = (painting.price + sizePrice + framePrice + shipping + handling) * quantity;
    setTotal(bill);
  }, [painting, size, frame, quantity]);

  return (
    <div>
      <div id="header">
        <div className="container">

<main className="fees-container">
  <h2>Complete Your Purchase</h2>

  {!painting ? (
    <p>No painting selected. Go back to Paintings page.</p>
  ) : (
    <div className="fees-flexbox">
      <form className="purchase-form" onSubmit={(e) => e.preventDefault()}>
        <label>Selected Painting:</label>
        <input type="text" value={painting?.title || ""} disabled />

        <label>Select Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">-- Select Size --</option>
          <option value="small">Small – Base</option>
          <option value="medium">Medium – +$50</option>
          <option value="large">Large – +$100</option>
        </select>

        <label>Frame Option:</label>
        <select value={frame} onChange={(e) => setFrame(e.target.value)}>
          <option value="">-- Select Frame --</option>
          <option value="none">No Frame</option>
          <option value="classic">Classic Wooden (+$40)</option>
          <option value="modern">Modern Frame (+$60)</option>
        </select>

        <label>Quantity:</label>
        <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />

        <h3>Total Bill: ${total}</h3>
        <button type="button" className="btn" onClick={handleConfirmPurchase}>
          Confirm Purchase
        </button>
      </form>

      <section className="fees-info">
        <h3>Fee Breakdown</h3>
        <ul>
          <li>Base Price: ${painting?.price || 0}</li>
          <li>Size Adjustment: {size === "medium" ? "$50" : size === "large" ? "$100" : "$0"}</li>
          <li>Frame Price: {frame === "classic" ? "$40" : frame === "modern" ? "$60" : "$0"}</li>
          <li>Shipping: $20</li>
          <li>Handling: $10</li>
          <li><strong>Total: ${total}</strong></li>
        </ul>
      </section>
    </div>
  )}
</main>


        </div>
      </div>
      <footer>
      <div className="copyright">
        <p>
          Copyright © Art-Gallery. Made with{" "}
          <i className="fa fa-heart" style={{ color: "#bf00bf" }}></i> by Ayesha,
          Zuha and Areeba
        </p>
      </div>
      </footer>
    </div>
    
  );
}

export default Fees;
