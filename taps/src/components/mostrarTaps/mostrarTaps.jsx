import React, {useState} from "react";

import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';


import Container from '@material-ui/core/Container';



function Taps(props) {
   const [splitter8,setSplitter8] = useState ("");
   const [splitter4,setSplitter4] = useState ("");
   const [splitter2,setSplitter2] = useState ("");


  return (
   
<React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        
        <h1>Splitter 1/64</h1>
     
      <form noValidate autoComplete="off"  onSubmit={(event)=>{
        event.preventDefault();
        document.location.reload(true)
        
       }}>
      
    
      <TextField  onChange={(event)=>setSplitter8(event.target.value)} id="splitter8" label="Splitter 1/8" variant="outlined"  type="number"   fullWidth/>
      
      <TextField onChange={(event)=>setSplitter4(event.target.value)} id="splitter4" label="Splitter 1/4" variant="outlined"   type="number"  fullWidth />
     
      <TextField onChange={(event)=>setSplitter2(event.target.value)} id="splitter2" label="Splitter 1/2" variant="outlined"   type="number"   fullWidth/>
      
      
      <h1>{splitter8>0&&splitter4==0&&splitter2==0? `Splitter 1/2: ${Math.ceil(splitter8/8)}`:``}</h1>
      <h2>{splitter8>0&&splitter4==0&&splitter2==0? `Splitter 1/4: ${Math.ceil(splitter8/4)}`:``}</h2>
      <h3>{splitter8>0&&splitter4==0&&splitter2==0? `Primeiro Splitter 1/8: ${Math.ceil(splitter8/4)*4-3}`:``}</h3>
      <h3>{splitter8>0&&splitter4==0&&splitter2==0? `Segundo Splitter 1/8: ${Math.ceil(splitter8/4)*4-2}`:``}</h3>
      <h3>{splitter8>0&&splitter4==0&&splitter2==0? `Terceiro Splitter 1/8: ${Math.ceil(splitter8/4)*4-1}`:``}</h3>
      <h3>{splitter8>0&&splitter4==0&&splitter2==0? `Quarto Splitter 1/8: ${Math.ceil(splitter8/4)*4}`:``}</h3>
      
      <h1>{splitter4>0&&splitter2==0&&splitter8==0? `Splitter 1/2: ${Math.ceil(splitter4/2)}`:``}</h1>
      <h3>{splitter4>0&&splitter2==0&&splitter8==0? `Primeiro Splitter 1/8: ${splitter4*4-3}`:``}</h3>
      <h3>{splitter4>0&&splitter2==0&&splitter8==0? `Segundo Splitter 1/8: ${splitter4*4-2}`:``}</h3>
      <h3>{splitter4>0&&splitter2==0&&splitter8==0? `Terceiro Splitter 1/8: ${splitter4*4-1}`:``}</h3>
      <h3>{splitter4>0&&splitter2==0&&splitter8==0? `Quarto Splitter 1/8: ${splitter4*4}`:``}</h3>
      
      
      <h1>{splitter2>0&&splitter4==0&&splitter8==0? `Primeiro Splitter 1/2: ${splitter2*2-1}`:``}</h1>
      <h1>{splitter2>0&&splitter4==0&&splitter8==0? `Segundo Splitter 1/2: ${splitter2*2}`:``}</h1>
      <h2>{splitter2>0&&splitter4==0&&splitter8==0? `Primeiro Splitter 1/4: ${splitter2*4-1}`:``}</h2>
      <h3>{splitter2>0&&splitter4==0&&splitter8==0? `Primeiro Splitter 1/8: ${(splitter2*8-1)-3}`:``}</h3>
      <h3>{splitter2>0&&splitter4==0&&splitter8==0? `Segundo Splitter 1/8: ${(splitter2*8-1)-2}`:``}</h3>
      <h3>{splitter2>0&&splitter4==0&&splitter8==0? `Terceiro Splitter 1/8: ${(splitter2*8-1)-1}`:``}</h3>
      <h3>{splitter2>0&&splitter4==0&&splitter8==0? `Quarto Splitter 1/8: ${splitter2*8-1}`:``}</h3>
      <h2>{splitter2>0&&splitter4==0&&splitter8==0? `Segundo Splitter 1/4: ${splitter2*4}`:``}</h2>
      <h3>{splitter2>0&&splitter4==0&&splitter8==0? `Primeiro Splitter 1/8: ${splitter2*8-3}`:``}</h3>
      <h3>{splitter2>0&&splitter4==0&&splitter8==0? `Segundo Splitter 1/8: ${splitter2*8-2}`:``}</h3>
      <h3>{splitter2>0&&splitter4==0&&splitter8==0? `Terceiro Splitter 1/8: ${splitter2*8-1}`:``}</h3>
      <h3>{splitter2>0&&splitter4==0&&splitter8==0? `Quarto Splitter 1/8: ${splitter2*8}`:``}</h3>
      <Button type="submit" variant="contained" color="primary" >Limpar</Button>
    </form>


    <foote> Desenvolvido por Thiago Patricio da Silva </foote>

   
  
      
      </Container>
    </React.Fragment>

    

    

   
  );


}



export default Taps;
