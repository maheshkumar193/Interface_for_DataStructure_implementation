import React from "react";
import Card from "./Card";
import dataStructures from "./DataStructures";

function CreateCard(card) {
  return <Card name={card.name} img={card.imgURL} codeLink={card.codeLink} />;
}

function App() {
  return (
    <div>
      <center>
        <h1 className="heading">Data Structures</h1>
      </center>
      <div >
        <h2 className="special">Trees</h2>
        <div className={"square1"}>{CreateCard(dataStructures[0])}</div>
        <div className={"square1"}>{CreateCard(dataStructures[1])}</div>
        <div className={"square1"}>{CreateCard(dataStructures[2])}</div>
      </div>
      <div >
        <h2 className="special">Heaps</h2>
        <div className={"square2"}>{CreateCard(dataStructures[3])}</div>
        <div className={"square2"}>{CreateCard(dataStructures[4])}</div>
      </div>
      <div >
        <h2 className="special">Queue</h2>
        <div className={"square1"}>{CreateCard(dataStructures[5])}</div>
        <div className={"square1"}>{CreateCard(dataStructures[6])}</div>
        <div className={"square1"}>{CreateCard(dataStructures[7])}</div>
      </div>
      <div >
        <h2 className="special">Stack</h2>
        <div className={"square2"}>{CreateCard(dataStructures[8])}</div>
        <div className={"square2"}>{CreateCard(dataStructures[9])}</div>
      </div>
      <div >
        <h2 className="special">STL</h2>
        <div className={"square2"}>{CreateCard(dataStructures[10])}</div>
        <div className={"square2"}>{CreateCard(dataStructures[11])}</div>
      </div>
    </div>
  );
}

export default App;
