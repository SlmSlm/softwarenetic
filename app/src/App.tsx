import React from "react";
import "./App.css";
import { getPhotos, result } from "./api/api";
import { useState } from "react";
import Home from "./components/home/view";

function App() {
  const [photos, setPhotos] = useState<Array<string>>();
  let [page, setPages] = useState<number>(1);
  let [rover, setRover] = useState<string>("");

  const handleClick = async (rover: string) => {
    setRover(rover);

    let array: Array<string> = [];
    await getPhotos(rover, page);
    result.map((i: string) => {
      array.push(i);
      setPhotos(array);
    });
  };

  const showMore = () => {
    setPages((page += 1));
    handleClick(rover);
  };

  return (
    <div className="App">
      {/* <div className="App-header"> */}
      {/* <button onClick={() => handleClick("curiosity")}>Curiosity</button>
      <button onClick={() => handleClick("opportunity")}>Opportunity</button>
      <button onClick={() => handleClick("spirit")}>Spirit</button>
      <br />
      <div>
        {photos?.map((url, index) => {
          return (
            <>
              {index}
              <img
                src={url}
                alt=""
                style={{ width: "300px", height: "300px" }}
                key={index}
              />
            </>
          );
        })}
        <button onClick={() => showMore()}>Show more</button>
      </div> */}
      <Home />
      {/* </div> */}
    </div>
  );
}

export default App;
