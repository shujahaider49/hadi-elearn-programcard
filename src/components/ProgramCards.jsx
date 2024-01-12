import React from "react";
import "../css/card.css";
import { programs } from "../data/data";
import { CiCalendar } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";


const ProgramCards = () => {
  const renderCards = () => {
    return programs.map(({ title, img, mon, cl, hour, instructor, cost }) => (
      <figure key={title} className="card">
        <div>
          <img src={img} alt={`${title} promotional image`} />
        </div>
        <figcaption>
          <section className="adaptive-glass">
            <h3>{title}</h3>
          <div className="monsection">
            <p><CiCalendar className="icon"/>{mon}</p>
            <p><IoDocumentTextOutline className="icon"/>{cl}</p>
            <p><BsClockHistory className="icon"/>{hour}</p>
          </div>

          <div className="name">
            <p>{instructor}</p>
            <p>{cost}</p>
          </div>
          </section>
        </figcaption>
      </figure>
    ));
  };

  return (
    <>
      <div className="container">
        <div>
          <h1 className="head1">Online <span className="headchild">Seekhein</span></h1>
        </div>
        <div className="headcon">
          <h1>Online Kamaian</h1>
        </div>
        <div className="belowheading">
          <h2 className="freecourse">Free Courses by</h2>
          <h1>hadi e learning</h1>
        </div>
      </div>
      <div className="card-container">
        {renderCards()}
      </div>
    </>
  );
};

export default ProgramCards;
