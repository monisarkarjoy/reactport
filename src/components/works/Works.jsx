import { useState } from "react";
import "./works.scss"

export default function Works() {

  const [currentSlider, setCurrentSlider] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci?",
      img: "https://media.istockphoto.com/photos/business-meeting-picture-id950643698?k=20&m=950643698&s=612x612&w=0&h=CKpO5YfgmMBa_dYOmUbT2R_0_s_esju-kV96lF3-osQ=",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci?",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTz3T4yQibizp9KT2fw6j7wVLkW6UyENFweunVOBwe68i-NSSmybyme1fGZhGrEreGRg&usqp=CAU",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci?",
      img: "https://image.shutterstock.com/image-photo/image-engineer-drawing-blue-print-260nw-763172920.jpg",
    }
  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 2) :
    setCurrentSlider(currentSlider < data.length -1 ? currentSlider + 1 : 0);

  }

  return (
    <div className='works' id="works">
        <div className="slider" style={{ transform: `translateX(-${currentSlider *100}vw)` }}>
          {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="image" />
                  </div>
                  <h2>{d.title}</h2>
                  <p> {d.desc} </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="https://www.springboard.com/library/static/5c973217aa9d6c0ef28f57438d9a2d0f/c68a4/10-08-how-to-build-a-data-scientist-portfolio.png" alt="Project" />
              </div>
            </div>
            
          </div>
          ))}
        </div>
        <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()} />
    </div>
  );
}
