import "./Slider.css";
import img1 from "../../img/python.png";
import img2 from "../../img/sih.png";
import img3 from "../../img/PRO-console.jpg";
import img4 from "../../img/internshala.png";

import { ArrowBack, ArrowForward } from "@mui/icons-material";


export default function Slider() {

    return (

    <div className="Slider-container">
       <div> 
         <h1>Certifications</h1>
         {/* <ArrowBack /> */}
       </div>
       <div className="Slides">
           <div className="img-cont">
               <img src={img1} alt="img" />
           </div>
           {/* <div className="img-cont">
               <img src={img3} alt="img" />
           </div> */}
           <div className="img-cont">
               <img src={img2} alt="img" />
           </div>
           <div className="img-cont">
               <img src={img4} alt="img" />
           </div>
       </div>
       <div>
          {/* <ArrowForward /> */}
       </div>
    </div>
  )
}
