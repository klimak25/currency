import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./converter.css";
import { useState } from "react";

function Converter(props) {
  console.log(props)
  const [result, setResult] = useState("");
  const [typeOfValute, setTypeOfValute] = useState("");

  function handleChange(e) {
    const textValue = e.target.value;
    if (textValue.match(/\d+ usd in rub/)) {
      const result = textValue.match(/\d+ /g);
      console.log(result)
      setResult((result[0] * props.valute).toFixed(2));
      setTypeOfValute("RUB");
    }
    if (textValue.match(/\d+ rub in usd/)) {
      const result = textValue.match(/\d+ /g);
      console.log(result)
      setResult((result[0] / props.valute).toFixed(2));
      setTypeOfValute("USD");
    }
  }

  return (
    <div className="converter">
      <p className="converter__title">Конвертер валют</p>
      <Box
        sx={{
          width: 500,
          maxWidth: "50%",
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <TextField
          fullWidth
          label="Конвертер"
          id="fullWidth"
          onKeyDown={handleChange}
        />
      </Box>
      <div className="converter__result">
        <h3 className="converter__result">
          {result} {typeOfValute}
        </h3>
      </div>
    </div>
  );
}
export default Converter;
