import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Converter from "../Converter/converter";
import Currency from "../Currency/currency";
import * as Api from "../../utils/Api";
import * as CbrApi from "../../utils/CbrApi";

function App() {
  const [valuteUsd, setValuteUsd] = useState("");
  const [valuteEUR, setValuteEUR] = useState("");
  const [valuteUsdEur, setValuteUsdEur] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    Promise.all([Api.getCurrency(), CbrApi.getCurrency()])
      .then(([data, dataCbr]) => {
        setValuteUsd(data.quotes.USDRUB);
        setValuteEUR(dataCbr.Valute.EUR.Value);
        setValuteUsdEur((data.quotes.USDEUR).toFixed(4));
      })
      .catch((res) => console.log(res.message));
  }, []);

  useEffect(() => {
    setLanguage(navigator.language);
  }, []);

  return (

    <div className="App">
            <Routes>
        <Route exact path="/" element={<Converter valute={valuteUsd} />} />
        <Route
          path="/currency"
          element={
            <Currency
              usdRub={valuteUsd}
              eurRub={valuteEUR}
              usdEur={valuteUsdEur}
              language={language}
            />
          }
        />
      </Routes>
      <Navigation />
    </div>

  );
}

export default App;
