import React, {useState, useEffect} from "react";
import "./App.scss";
import Content from './components/Content/Content'
import Header from "./components/Header/Header";
import data from './assets/data.json'

function App() {

  const [jobsData, setJobsData] = useState([]);


  useEffect(() => {
    setJobsData(data);
  }, [jobsData])

  return (
    <div className="App">
      <Header />
      <Content jobs={ jobsData}/>
    </div>
  );
}

export default App;
