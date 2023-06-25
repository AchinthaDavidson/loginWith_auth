import { Box, Button, FormControl, Input  } from "@mui/material";
import { makeStyles } from "@mui/styles";

const userStyle=makeStyles({
    root:{
      width:'50%',
      margin:  '0 auto',
      borderRadius:'10px',
      background:'gray',
      height:'50vh',
      padding:'20px',
      display:'flex',
      flexDirection:"column",
      
    }
    
})

export function Register(){
    const style=userStyle()
    return(
        <Box className={style.root}>
            <FormControl variant="outlined">
                <Input placeholder='first name'/>
            </FormControl>
            <FormControl>
                <Input placeholder='lastname name'/>
            </FormControl>
            <FormControl>
                <Input placeholder='Email'/>
            </FormControl>
            <FormControl>
                <Input type="password" placeholder='password'/>
            </FormControl>
        <Button>Register</Button>
       </Box>
    
    )
}