import React, { useEffect, useState } from "react";

const ChangeReturn = ({ change }) => {
  // const [notes , setNotes] = useState({})
  const [noOf2000, set2000] = useState();
  const [noOf500, set500] = useState();
  const [noOf100, set100] = useState();
  const [noOf50, set50] = useState();
  const [noOf20, set20] = useState();
  const [noOf10, set10] = useState();
  const [noOf1, set1] = useState();

  useEffect(() => {
    console.log(change);
    if (change >= 2000) {
      set2000(Math.floor(change / 2000));
      change = change % 2000;
      console.log(noOf2000);
    }else{
      set2000()
    }
    if (change >= 500) {
      set500(Math.floor(change / 500));
      change = change % 500;
    }else{
      set500()
    }
    if (change >= 100) {
      set100(Math.floor(change / 100));
      change = change % 100;
    }else{
      set100()
    }
    if (change >= 50) {
      set50(Math.floor(change / 50));
      change = change % 50;
    }else{
      set50()
    }
    if (change >= 20) {
      set20(Math.floor(change / 20));
      change = change % 20;
    }else{
      set20()
    }
    if (change >= 10) {
      set10(Math.floor(change / 10));
      change = change % 10;
    }else{
      set10()
    }
    if (change < 10) {
      set1(parseInt(change));
    }else{
      set1()
    }
  }, [change, noOf2000, noOf500, noOf100, noOf50, noOf20, noOf10, noOf1]);
  console.log(noOf2000, noOf500, noOf100, noOf50, noOf20, noOf10, noOf1);

  return (
    <div>
      {change > 0 && (
        <div className="container">
          <div className="returnAmount">
            <br />
            <h3>
              Amount to be returned: <strong>{change} Rs.</strong>
            </h3>
            <br />
          </div>

          <table id="tables">
            <tr>
              <th>Note</th>
              <th>2000</th>
              <th>500</th>
              <th>100</th>
              <th>50</th>
              <th>20</th>
              <th>10</th>
              <th>1</th>
            </tr>
            <tr>
              <th>No.of Notes</th>
              <th>{noOf2000}</th>
              <th>{noOf500}</th>
              <th>{noOf100}</th>
              <th>{noOf50}</th>
              <th>{noOf20}</th>
              <th>{noOf10}</th>
              <th>{noOf1}</th>
            </tr>
          </table>
        </div>
      )}
      {change < 0 && <h2>Cash is less than bill amount!</h2>}
      {change === 0 && <h2>No Amount should be return!</h2>}
    </div>
  );
};

export default ChangeReturn;
