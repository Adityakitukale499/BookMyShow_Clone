import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
function CreditCardUi() {
  const [acNumber, setAcNumber] = useState();
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <div key="Payment">
      <div>
        <Cards
          number={acNumber}
          name={name}
          expiry={expiry}
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3 mt-4">
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Card Number"
              required
              onChange={(e)=> setAcNumber(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                onChange={(e)=> setExpiry(e.target.value)}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
              />
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-dark">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreditCardUi;