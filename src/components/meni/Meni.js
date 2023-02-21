// import axios from "axios";
import React from "react";
// import { useQuery } from "react-query";

import { data } from "../../mockData/data";
import MeinElement from "../meniElement/MeniElement";

// const getData = async () => {
//   const response = await axios.get(
//     `C:\Users\PositiveAnja\projekti\Moja-Klopica\src\mockData\data.js`
//   );
//   return response;
// };

const Meni = ({ colorRed }) => {
  // const { data } = useQuery("meni", () => getData());
  // console.log(data, "data Meni  after fetch");

  return (
    <div className="meni-box">
      <div className={colorRed ? "meniNavBar-red" : "meniNavBar"}>
        <button className="meniNavBar-element">pon</button>
        <button className="meniNavBar-element">uto</button>
        <button className="meniNavBar-element">sre</button>
        <button className="meniNavBar-element">cet</button>
        <button className="meniNavBar-element">pet</button>
        <button className="meniNavBar-element">sub</button>
      </div>
      <div className={colorRed ? "meni-red" : "meni"}>
        {data.map((item) => (
          <MeinElement key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Meni;
