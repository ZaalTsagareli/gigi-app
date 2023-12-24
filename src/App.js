import Picture from "./components/pic.component";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getPictures = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_limit=4"
      );
      return response.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const pictures = await getPictures();
      console.log(pictures, "xd");
      setData(pictures);
    };

    fetchData();
  }, []); // Provide an empty dependency array

  return (
    <div className="App">
      <div className="picture-container">
        {data &&
          data.map((pic) => {
            return (
              <Picture key={pic.id} title={pic.title} url={pic.url}></Picture>
            );
          })}
      </div>
    </div>
  );
}

export default App;
