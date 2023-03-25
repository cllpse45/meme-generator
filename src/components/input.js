import React from "react";
import TextField from '@mui/material/TextField';

export default Input(props){
    
// MUI den aldığım hazır yapıyı kendime göre özelleştirebilirim.
// MUI'den aldığımız textfield, number ve password'ü Input componenti içerisinde topladık.
// app.js içerisinde Input çağırarak sadece burada belirlediğim props.type üzerinden istediğimi çağırabilirim.

    function body(){

        if(props.type === "text"){

return(
    <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Hello World"
  />
)
        }

        if(props.type === "number"){
           return(
            <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
           ) 
        }

        if(props.type === "passsword"){
            return(

                <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
            )
        }


    }
    
    return(
        <>
        {body()}
        </>
    )
}