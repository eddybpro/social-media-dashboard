import { data } from "./data";
import { overviewData } from "./overviewData";
import Card from "./components/Card";
import "./App.css";
import OverviewCard from "./components/OverviewCard";
import { useEffect, useState } from "react";

function App() {
  const saved = JSON.parse(localStorage.getItem("theme"));
  const darkThemeMq =
    saved ?? window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkTheme, setIsDarkTheme] = useState(darkThemeMq);

  const handleChange = (e) => {
    setIsDarkTheme(e.target.checked);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);
  return (
    <main className={isDarkTheme ? "dark" : ""}>
      <div className="Header">
        <div>
          <h1 className="HeaderTitle">social media dashboard</h1>
          <p className="HeaderPara">total followers: 32,004</p>
        </div>
        <label htmlFor="check">
          dark mode
          <input
            type="checkbox"
            name="check"
            id="check"
            className="check"
            checked={isDarkTheme}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="FirstWrapper">
        {data.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </div>
      <h2 className="Title">overview - today</h2>
      <div className="SecondWrapper">
        {overviewData.map((el, i) => (
          <OverviewCard key={i} {...el} />
        ))}
      </div>
    </main>
  );
}

export default App;
