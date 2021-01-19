import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

function Taps(props) {
  const [splitter8, setSplitter8] = useState(0);
  const [splitter4, setSplitter4] = useState(0);
  const [splitter2, setSplitter2] = useState(0);

  return (
   
    
      <Container maxWidth="sm" align="center"  >
        <h1> Splitter 1/64 </h1>

        <form align="center"
          noValidate
          autoComplete="off"
          onReset={() => {
       setSplitter8(0)
       setSplitter4(0)
       setSplitter2(0)
          }}
        >
          <TextField
            onInput={(event) => setSplitter8(event.target.value)}
            id="splitter8"
            placeholder="Splitter 1/8"
            label="Splitter 1/8"
            variant="outlined"
            type="number"
            fullWidth
            margin="normal"
          />

          <TextField 
             onInput={(event) => setSplitter4(event.target.value)}
            id="splitter4"
            placeholder="Splitter 1/4"
            label="Splitter 1/4"
            variant="outlined"
            type="number"
            margin="normal"
            fullWidth
          />

          <TextField
            onInput={(event) => setSplitter2(event.target.value)}
            id="splitter2"
            placeholder="Splitter 1/2"
            label="Splitter 1/2"
            variant="outlined"
            type="number"
            margin="normal"
            fullWidth
          />

          <h1>
            {splitter8 > 0 && splitter4 === 0 && splitter2 === 0
              ? `Splitter 1/2: ${Math.ceil(splitter8 / 8)}`
              : ``}
          </h1>
          <h2>
            {splitter8 > 0 && splitter4 === 0 && splitter2 === 0
              ? `Splitter 1/4: ${Math.ceil(splitter8 / 4)}`
              : ``}
          </h2>
          <h3>
            {splitter8 > 0 && splitter4 === 0 && splitter2 === 0
              ? `Primeiro Splitter 1/8: ${Math.ceil(splitter8 / 4) * 4 - 3}`
              : ``}
          </h3>
          <h3>
            {splitter8 > 0 && splitter4 === 0 && splitter2 === 0
              ? `Segundo Splitter 1/8: ${Math.ceil(splitter8 / 4) * 4 - 2}`
              : ``}
          </h3>
          <h3>
            {splitter8 > 0 && splitter4 === 0 && splitter2 === 0
              ? `Terceiro Splitter 1/8: ${Math.ceil(splitter8 / 4) * 4 - 1}`
              : ``}
          </h3>
          <h3>
            {splitter8 > 0 && splitter4 === 0 && splitter2 === 0
              ? `Quarto Splitter 1/8: ${Math.ceil(splitter8 / 4) * 4}`
              : ``}
          </h3>

          <h1>
            {splitter4 > 0 && splitter2 === 0 && splitter8 === 0
              ? `Splitter 1/2: ${Math.ceil(splitter4 / 2)}`
              : ``}
          </h1>
          <h3>
            {splitter4 > 0 && splitter2 === 0 && splitter8 === 0
              ? `Primeiro Splitter 1/8: ${splitter4 * 4 - 3}`
              : ``}
          </h3>
          <h3>
            {splitter4 > 0 && splitter2 === 0 && splitter8 === 0
              ? `Segundo Splitter 1/8: ${splitter4 * 4 - 2}`
              : ``}
          </h3>
          <h3>
            {splitter4 > 0 && splitter2 === 0 && splitter8 === 0
              ? `Terceiro Splitter 1/8: ${splitter4 * 4 - 1}`
              : ``}
          </h3>
          <h3>
            {splitter4 > 0 && splitter2 === 0 && splitter8 === 0
              ? `Quarto Splitter 1/8: ${splitter4 * 4}`
              : ``}
          </h3>

          <h1>
            {splitter2 > 0 && splitter4 === 0 && splitter8 === 0
              ? `Primeiro Splitter 1/4: ${splitter2 * 2 - 1}`
              : ``}
          </h1>
          <h3>
            {splitter2 > 0 && splitter4 === 0 && splitter8 === 0
              ? `Primeiro Splitter 1/8: ${(splitter2 * 2 - 1) * 4 - 3}`
              : ``}
          </h3>
          <h3>
            {splitter2 > 0 && splitter4 === 0 && splitter8 === 0
              ? `Segundo Splitter 1/8: ${(splitter2 * 2 - 1) * 4 - 2}`
              : ``}
          </h3>
          <h3>
            {splitter2 > 0 && splitter4 === 0 && splitter8 === 0
              ? `Terceiro Splitter 1/8: ${(splitter2 * 2 - 1) * 4 - 1}`
              : ``}
          </h3>
          <h3>
            {splitter2 > 0 && splitter4 === 0 && splitter8 === 0
              ? `Quarto Splitter 1/8: ${(splitter2 * 2 - 1) * 4}`
              : ``}
          </h3>
          <h1>
            {splitter2 > 0 && splitter4 === 0 && splitter8 === 0
              ? `Segundo Splitter 1/4: ${splitter2 * 2}`
              : ``}
          </h1>
          <h3>
            {splitter2 > 0 && splitter4 === 0 && splitter8 === 0
              ? `Primeiro Splitter 1/8: ${splitter2 * 2 * 4 - 3}`
              : ``}
          </h3>
          <h3>
            {splitter2 > 0 && splitter4 === 0 && splitter8 === 0
              ? `Segundo Splitter 1/8: ${splitter2 * 2 * 4 - 2}`
              : ``}
          </h3>
          <h3>
            {splitter2 > 0 && splitter4 === 0 && splitter8 === 0
              ? `Terceiro Splitter 1/8: ${splitter2 * 2 * 4 - 1}`
              : ``}
          </h3>
          <h3>
            {splitter2 > 0 && splitter4 === 0 && splitter8 === 0
              ? `Quarto Splitter 1/8: ${splitter2 * 2 * 4}`
              : ``}
          </h3>
          <Button  type="reset" variant="contained" color="primary"   margin="normal">
            Limpar
          </Button>
        </form>

        <footer   margin="2px"> Desenvolvido por Thiago Patricio da Silva </footer>
      </Container>
  
  );
}

export default Taps;
