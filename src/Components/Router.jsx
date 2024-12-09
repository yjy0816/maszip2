import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LoginPage from "../Pages/Login/LoginPage";
import StartPage from "../Pages/Start/StartPage";
import bird from "../img/bird.png";
import fish11 from "../img/fish11.png"; 
import fish77 from "../img/fish77.png"; 
import fish66 from "../img/fish66.png"; 
import weather from "../img/sunny.png";
import temparature from "../img/temparature.png"; 
import pado from "../img/pado1.png"; 
import sea from "../mp4/sea.mp4"; 




export default function Router() {
  return (
    
    <BrowserRouter  style={{ backgroundColor : "darkblue" }}>
     
      <nav style={{ position : "fixed" , 
                    left: "50%" ,
                    transform: "translate(-50%, 0)",
                     zIndex : "99",
                     backgroundColor : "white", 
                                                   
                   }}>  
        
        <NavLink  to='/'>
          내주변 맛집
        </NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <NavLink  to='/Login'>
          내주변 관광지
        </NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
        <NavLink  to='/Login'>
          내주변 숙소
        </NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  
                                                    
        <span>강릉날씨 :</span>                        
        <img height={20} src={weather} /><span>맑음</span>
        &nbsp;&nbsp;&nbsp;
        <img height={20} src={temparature} /><span>22도</span>
        &nbsp;&nbsp;&nbsp;
        <img height={20} src={pado} /><span>파도2m</span>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <NavLink  to='/Login'>
          로그인
        </NavLink>
      
        
        <div style={{ margin : "10px auto ", backgroundColor: "darkblue", width: "810px" , height: "200px", borderRadius: "15px" ,
                      border : "1px solid #000000",
                      
                     
                    }}>
         
                <div style={{ margin : "4px auto ", backgroundColor: "white", width: "800px" , height: "190px", borderRadius: "15px" ,
                              border : "1px solid #000000",
                              display : "flex",
                              flexDirection : "row" ,
                              overflow : "hidden"             
                            }}>
                
                <video   height="auto" width="auto" controls autoplay loop>  
                   <source src={sea} type="video/mp4"></source>                   
                </video>    
                <video height= "auto" width="auto" controls autoplay loop>  
                   <source src={sea} type="video/mp4"></source>                   
                </video>    
                <video height= "auto" width="auto" controls autoplay loop>  
                   <source src={sea} type="video/mp4"></source>                   
                </video>   
                
                </div>

                <div style={{ margin : "10px auto ", backgroundColor: "darkblue", width: "807px" , height: "70px", borderRadius: "5px" ,
                              border : "1px solid #000000" , 
                              display: "flex", 
                              flexDirection: "row", 
                              justifyContent: "center",
                              alignItems: "center",
                              color : "white",
                              fontSize : "35px",
                              position:"relative"
                            }}> 

                 
                 <img height={45} src={fish11} /> &nbsp;
                 <img height={20} src={fish66}  style ={{ position:"absolute" , top:"45px", left:"195px"   }} /> 
                 <img height={30} src={fish77}   /> &nbsp;          
                 머슐랭 강릉 맛집20  &nbsp;
                 <img height={60} src={bird} />  
                 <img height={40} src={bird} />  
                  
                       
                </div>  

        </div>

      </nav>
      

      <Routes>
        <Route exact path='/' element={<StartPage />} />
        <Route path='/Login'  element={<LoginPage />} />       
      </Routes>
    </BrowserRouter>
  );
}