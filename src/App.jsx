import axios from "./util/axios.customzie";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const fetchHelloWorld = async () => {
      try {
        const response = await axios.get(`/v1/api/`);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHelloWorld();
  }, []);
  return (
  <>
  hello 
  </>
  );
}

export default App;
