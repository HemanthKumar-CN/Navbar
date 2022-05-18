import React from "react";

const Links=()=> {
     const linkArray=["Services","Projects","About"];

     return (
         <div>
             {
                 linkArray.map(link => <a href="" key={link} >{link}</a> )
             }
         </div>
     )
}

export default Links