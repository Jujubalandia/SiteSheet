import React , {useState}from 'react';
import './web.css';
import { Button, TextField } from "@material-ui/core";
import { makeStyles, fade } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Tooltip } from '@material-ui/core';


import {
   
  Link,
  
} from "react-router-dom";




import './web.css';
import 'react-toastify/dist/ReactToastify.css';




import WebImage from './website.svg';
import ApiImage from '../api/api.svg';
import  Data from './data';




const styles =  makeStyles((theme) => ({
  palette: {
    primary: '#47ff8c',
    secondary: '#47ff8c' ,
  },
  textField: {
      width: '75%',    
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '7%',
      color: '#47ff8c',
      backgroundColor: '#f0f0f0',
      margiTop: '5%',    
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
    
  },
  
}) );

function WebBulider() {
  const classes = styles();

 
  var [url ,setUrl ] = useState(null);
  var [apiUrl , setApiUrl] = useState(null);
  var [chooseTemplate ,setChooseTemplate] = useState(true);
  const [templateUrl,settemplateUrl] = useState('');

  var changeTemplateUrl = (text) => {
    settemplateUrl(text);
    setChooseTemplate(!chooseTemplate); 
    console.log(templateUrl);
  }


  const getUrl = (e)  => {
    var data =  e.target.value;
    setUrl(data);
   
  }


  

  const checkUrl = () => {
   if(url == null)
   {
    toast.warn('please enter url');

   }else{

    var yo = url.slice(0,39);

    if(yo ==='https://docs.google.com/spreadsheets/d/')
    {
      toast('Website is ready');
      console.log(yo);
      var i = 40;
      while(url[i] !== '/')
      {
        i++;
      }
      var uniqueID = url.slice(39,i);
      var temp = 'https://sitesheet.vercel.app/' + templateUrl +"/" + uniqueID  ;
      setApiUrl(temp);




     }else{
     toast.error('Please enter URL properly.');
     }
    }

  }

 const   copyCodeToClipboard = () => {
    
  navigator.clipboard.writeText(apiUrl)
    toast('Copied');

  }


  return (
  <div>
   {chooseTemplate && <div className="web-intro">
       <div className="web-intro-heading"> 
       <h1 className="web-h1-yo">  SiteSheet</h1> <br/> 
        
       <span className="web-text-h2">Convert your google sheet into website</span>
        <br/>
        <ul  className="web-ul">
          <li>Make sure your data is according to the format</li>
          <li> Publish your google sheet to web </li>
          <li> Choose your favorite template</li>
          <li> Enter you google sheet url</li>
          <li> Get Link to your site in a snap.</li>         
         </ul>
        </div>   
       <img src={WebImage} className="web-img" /> 
     </div>

  } 
    {chooseTemplate && <div className="web-choose-template">
      <div className="web-choose-temp">
       <h3 className="web-intro-dis"> Choose your next website from these templates.</h3>
      </div>
      <div className="web-choose-grid"> 
       
       
       {
         Data.map(x => 
          <div className="web-preview-card"  >
          <Tooltip title="Visit">
            <Link to={x.link} target="_blank">
            <img src={x.src} height="300"   className="img-preview-card"/>
            </Link>
            </Tooltip>
            <div className="card-text">
             <h2>{x.name} </h2>
             <h3  className="web-card-text-dis">{x.dis}</h3>
            
           <Button style={{
               
               borderRadius: 25,
               backgroundColor: "#47ff8c",
               color: "#787c7a",
               textDecoration: false,
               marginRight: 5,
   
               
       
           }}
           onClick={
            ()=> (changeTemplateUrl(x.urlSlag))
           }
           
            ><h3 className="intro-button-text">Use this</h3></Button> 
          
           <a href={x.exelLink} target="_blank">
           <Button
            style={{
               
               borderRadius: 25,
               backgroundColor: "#787c7a",
               color:"#47ff8c",
               borderWidth: 5,
               borderColor: "#787c7a",
               textDecoration: false,
               marginRight: 3,
   
               
       
           }}
           ><h3 className="intro-button-text">See format file</h3></Button> 
           </a>
            </div>
   
          </div>
          
          )
       }
      </div>

    </div>}
    {
      !chooseTemplate && 
      <div className="api-back">
      <div className="api-details">
      <h1 className="api-heading">Convert your Google sheet into a Website</h1>
      <div className="api-dis">
       
        { !apiUrl && <> <span className="api-dis-text"> Make sure you have publised you google sheet to web ,then share your google sheet url.</span> 
   
    
   <TextField 
    label="Enter Url"
    variant="outlined"
    fullWidth
    onChange={getUrl}
    style={{
      color: '#47ff8c',

    }}
    className={classes.textField}



   >
     </TextField>
   <Button 
   style={{            
    backgroundColor: "#787c7a",
    color:"#47ff8c",     
    borderColor: "#787c7a",
    textDecoration: false,
    marginLeft: '1%',
  
     

}}
   onClick={checkUrl} > <div className="api-button-text">GO</div></Button>
  </>
}  <div>
   <ToastContainer />

  </div>
  { apiUrl &&<> 
    <span className="api-dis-text"> This is your website url share it with your friends.</span> 
  <TextField    
    variant="outlined"
    fullWidth
    defaultValue={apiUrl}
    style={{
      color: '#47ff8c',

    }}
    className={classes.textField}



   />
  
  <Button 
   style={{            
    backgroundColor: "#787c7a",
    color:"#47ff8c",     
    borderColor: "#787c7a",
    textDecoration: false,
    marginLeft: '1%',
  
     

}}
   onClick={copyCodeToClipboard} > <div className="api-button-text"> <FileCopyIcon /> </div></Button>
   </>}
   </div>
    </div>

    <img src={ApiImage}  className="api-image"/>
    </div>

    }
  </div>
  );
}

export default WebBulider;