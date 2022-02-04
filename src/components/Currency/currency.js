import { useState, useEffect } from "react";
import "./currency.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Currency(props) {
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    if (props.language === "ru") {
      setCurrency("RUB");
    } else {
      setCurrency("USD");
    }
  }, [props.language]);

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <div className="currency">
      <p className="currency__title">Курсы валют</p>
      <Box
        sx={{
          width: 500,
          maxWidth: "50%",
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label="Currency"
            onChange={handleChange}
          >
            <MenuItem value={"RUB"}>RUB</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className="currency__container">
        {currency === "RUB" ? (
          <>
            <h3>1 EUR = {props.eurRub} RUB</h3>
            <h3>1 USD = {props.usdRub} RUB</h3>
          </>
        ) : (
          <>
            <h3>1 EUR = {props.usdEur} USD</h3>
            <h3>1 RUB = {(1 / props.usdRub).toFixed(4)} USD</h3>
          </>
        )}
      </div>
    </div>
  );
}
export default Currency;
