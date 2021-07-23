import React, { useState } from "react";
import ChangeReturn from "./ChangeReturn";

function Home() {
  const [amount, setAmount] = useState("");
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [totalAmount, setTotalAmountnt] = useState("");
  const [change, setChnage]= useState("")


  const handleOnChange = (e) => {
    setAmount(e.target.value);
  };

  const handleNext = () => {
    if (amount !== undefined || amount !== null || amount !== "") setFlag(true);
    else {
      console.log("hello");
    }
  };

  const checkAmount=()=>{
    setFlag2(true)
    let returningValue = totalAmount - amount;
    setChnage(returningValue);
  }

  return (
    <div className="container">
      <div class="heading">
        <h2>Cash Register Manager</h2>
        <p>Enter the bill amount and cash given by the customer and know minimum number of notes to return</p>
      </div>
      <div>
        <p className = "title">Bill Amount</p>
      <input className="amount" value={amount} onChange={handleOnChange} type="number" />
      {!flag && <button onClick={handleNext}>Next</button>}
      </div>


      <div>
      {flag && (
      <div className="totalAmount">
        <p className="title">Cash Given</p>
        <input
        className="totalAmountInput"
          value={totalAmount}
          onChange={(e) => setTotalAmountnt(e.target.value)}
          type="number"
        />
        <button onClick={checkAmount}>Check</button>
        </div>
      )
      }
      </div>

      <div>
      {flag2 && <ChangeReturn change={change}/>}
      </div>
    </div>
  );
}

export default Home;
