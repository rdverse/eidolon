import React from "react";
import 'material-icons/iconfont/material-icons.css';
// import 'materialize-css/js/buttons.js'
// import { FloatingActionButton } from "materialize-css";
import { Button } from "@mui/material";
import { Typography} from "@mui/material";

//styles
import { makeStyles } from "@mui/styles";

// Icons from material ui
import {AccessAlarm} from "@material-ui/icons";
import { AcUnit} from "@material-ui/icons";

const useStyles = makeStyles({
    btn:{
        fontSize:60,
        backgroundColor:"black",
        '&:hover':{backgroundColor:"red"}
    }    
})


const Welcome = ()=>{
    const classes = useStyles();
    return(
        <div style={{backgroundColor:"#202434"}}>
        <Button 
        className={classes.btn}
        variant="contained" 
        > <AccessAlarm color="disabled" fontSize="large"/> hellow</Button>

        <Button 
        onClick = { () => {console.log("This button was clicked")}}
        startIcon={<AccessAlarm />}
        endIcon={<AcUnit />}>
        </Button>
        
        <Typography variant = "body2" 
                    color="secondary"
                    align="center" 
                    noWrap
                    gutterBottom>h1 header</Typography>
        </div>
        );
};

export default Welcome;
{/* <div className="container" style={{textAlign:'center'}}>
    
        <div className="blue black-text lighten-3"><h1>Welcome page</h1></div>

        <a href="https://google.com" className='waves-effect waves-light btn-large'>
        <i className='material-icons left'>insert_chart</i>Read more</a>
        Start the app here
        <i class="large material-icons">insert_chart</i>

        <a href="/" className="btn-floating yellow btn-large"><i className="large material-icons">directions_run</i></a>

    </div> */}
{/* <div className='fixed-action-btn'>
<a href="/" className="btn-floating blue btn-large">
    <i className="large material-icons">
        mode_edit</i></a>
<ul>
<li><a href="#" className="btn-floating red btn-large">
   <i className="large material-icons">
       directions_run</i></a></li>

<li><a href="#" className="btn-floating red btn-large"><i className="large material-icons">directions_run</i></a></li>
<li><a href="#" className="btn-floating red btn-large"><i className="large material-icons">directions_run</i></a></li>
<li><a href="#" className="btn-floating red btn-large"><i className="large material-icons">directions_run</i></a></li>

</ul>

</div> */}