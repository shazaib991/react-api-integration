import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [newData, setNewData] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get("https://foodish-api.herokuapp.com/api/");
    const image = response.data;

    if (image) {
      setData(image);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [newData]);

  return (
    <div className="image-container">
      <div className="image">
        {loading ? <h1>loading</h1> : <img src={data.image} alt="food" />}
      </div>
      <button onClick={() => setNewData((prevState) => !prevState)}>
        random
      </button>
    </div>
  );
}

export default App;
