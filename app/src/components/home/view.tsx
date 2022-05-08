import React from "react";
import styles from "./styles.module.scss";
import curiosity from "../../images/curiosity.jpg";
import opportunity from "../../images/opportunity.jpg";
import spirit from "../../images/spirit.jpg";

import store from "../../store/store";
import { getRoversInfo } from "../../api/api";

const Home = () => {
  const handleClick = async (rover: string) => {
    store.setRover(rover);
    await getRoversInfo(rover);
    console.log(store.state);
  };

  return (
    <>
      <h1>Please, choose the rover below</h1>
      <div className={styles.content}>
        <div className={styles.rover} onClick={() => handleClick("curiosity")}>
          <img src={curiosity} alt="curiosity" />
          <h2>Curiosity</h2>
        </div>
        <div
          className={styles.rover}
          onClick={() => handleClick("opportunity")}
        >
          <img src={opportunity} alt="opportunity" />
          <h2>Opportunity</h2>
        </div>
        <div className={styles.rover} onClick={() => handleClick("spirit")}>
          <img src={spirit} alt="spirit" />
          <h2>Spirit</h2>
        </div>
      </div>

      <button onClick={() => console.log(store.state)}>Log state</button>
    </>
  );
};

export default Home;
