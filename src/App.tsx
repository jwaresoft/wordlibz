import { useEffect } from "react";
import { getRandomArticleData } from "@/lib/wikipedia";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRandomArticleData();
      console.log(data);
    };

    fetchData();
  });

  return (
    <>
      <h1>Wordlibz!</h1>
    </>
  );
}

export default App;
