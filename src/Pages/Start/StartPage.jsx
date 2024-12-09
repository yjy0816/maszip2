import React from "react";
import RestorantList from "./RestorantList";

export default function StartPage() {
  return <> 
  
       
    
        <div style={{ position : "relative" , top : "320px"  }}>
 
        

        <div style={{ margin : "10px auto ", backgroundColor: "darkblue", width: "800px" , height: "750px", borderRadius: "15px" , border : "1px solid #000000"   }}>

              <RestorantList />                

        </div> 
        

</div>
        
        </>;
}