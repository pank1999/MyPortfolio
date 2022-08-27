import "./Slider.css";
import img1 from "../../img/cryptobg-1.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Slider() {
    const slideImages = [
        {
          url: img1,
          caption: 'Slide 1'
        },
        {
          url: img1,
          caption: 'Slide 2'
        },
        {
          url: img1,
          caption: 'Slide 3'
        },
      ];
    return (

    <div className="Slider-container">
        <h1 style={{textAlign:"center"}} >Memories</h1>
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" style={{padding:'0px 50px'}} key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`,objectFit:"cover",height:"400px",width:"100%",backgroundRepeat:"no-repeat"}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  )
}
