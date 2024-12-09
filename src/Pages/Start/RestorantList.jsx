import React, { useEffect, useState } from 'react';


function RestorantList(props) {
    
    const  [restorantList, setRestorantList ] = useState( [] )

    useEffect( ()=>{
          
         fetch( "http://localhost:3001/restorantList" )
         .then( res=>{
           return res.json()     
              })
         .then( data => {
            setRestorantList(data)    
             });
    } , [] );

    return (
        <div>
            
            <ul  style={{ listStyleType: "none" }}  >
                { restorantList.map(

                                         Restorant=> (

                                            <li  key={Restorant.rest_seq} >
                                                 
                                                  <div style={{ display: "flex", 
                                                                flexDirection: "row", 
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                margin : "4px auto ", backgroundColor: "white", width: "790px" , height: "70px", borderRadius: "5px" ,border : "0px solid #000000"}} > 
                                                  
                                                  <div style={{ margin : "4px auto ", backgroundColor: "white", width: "100px" , height: "70px", borderRadius: "5px" ,border : "0px solid #000000", lineHeight : "70px" }} > 대표이미지 </div>         
                                                  <div style={{ margin : "4px auto ", backgroundColor: "white", width: "200px" , height: "70px", borderRadius: "5px" ,border : "0px solid #000000", lineHeight : "70px" }} > { Restorant.rest_nm} </div>
                                                  <div style={{ margin : "4px auto ", backgroundColor: "white", width: "100px" , height: "70px", borderRadius: "5px" ,border : "0px solid #000000", lineHeight : "70px" }} > {Restorant.like_cnt} </div>
                                                  <div style={{ margin : "4px auto ", backgroundColor: "white", width: "100px" , height: "70px", borderRadius: "5px" ,border : "0px solid #000000", lineHeight : "70px" }} > <button> 댓글보기</button> </div>
                                                  <div style={{ margin : "4px auto ", backgroundColor: "white", width: "100px" , height: "70px", borderRadius: "5px" ,border : "0px solid #000000", lineHeight : "70px"}} > <button>동영상보기 </button> </div>
                                                  <div style={{ margin : "4px auto ", backgroundColor: "white", width: "100px" , height: "70px", borderRadius: "5px" ,border : "0px solid #000000", lineHeight : "70px"}} > <button> 지도보기</button>  </div>

                                                            {/* <span> 식당명 : { Restorant.rest_nm} </span> 
                                                            <span>  좋아요 : {Restorant.like_cnt} </span> 
                                                            <button> 상세보기</button> 
                                                            <button> 지도보기</button> 
                                                            <button> 댓글보기</button>  */}
                                                  
                                                  </div>



                                            </li>
                                         )              

                ) }

                

            </ul>


        </div>
    );
}

export default RestorantList;