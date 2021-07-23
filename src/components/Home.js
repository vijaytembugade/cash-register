import React, { useState } from "react";
import ChangeReturn from "./ChangeReturn";

function Home() {
  const [amount, setAmount] = useState("");
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [totalAmount, setTotalAmountnt] = useState("");
  const [change, setChnage]= useState("")
  const [empty, setEmpty] = useState(false)


  const handleOnChange = (e) => {
    setAmount(e.target.value);
  };

  const handleNext = () => {
    if (!amount) {
      setEmpty(true)
    }else{
      setFlag(true);
      setEmpty(false)
    }

  };

  const checkAmount=()=>{
    setFlag2(true)
    setEmpty(false)
    let returningValue = totalAmount - amount;
    setChnage(returningValue);
  }

  return (
    <div className="container">
      <div className="heading">
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
      {empty && <h2>PLease, Enter the bill Amount!</h2>}
      </div>
    </div>
  );
}

export default Home;
