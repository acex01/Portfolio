import { useState } from "react";
import red from "./red.png";
import left from "./left.svg";
import bottom from "./bottom.png";
import unipal from "./unipal.png";
import echo from "./echo.png";
import tshirti from "./tshirt.png";

const projects = [
  {
    year: "2022",
    name: "Echo",
    feature: "UX • Research",
    image: echo,
    text: "Echo was a physical prototype enabled by an app to assisst the visually impaired in their day to day activities. It was a part of the course Designing Processes and Perspectives.",
  },
  {
    year: "2021",
    name: "UniPal",
    feature: "UI/UX • HCI • Figma",
    image: unipal,
    text: "An app that aims to help college students navigate through their college life with ease and convenience, knowing that our app will be by their side.",
  },
  {
    year: "2023",
    name: "T-Shirts",
    feature: "Ps • Ai • Figma",
    image: tshirti,
    text: "I was tasked with designing T-shirts for various clubs in our college. I designed 3 T-shirts 1 for d4rkc0de, 1 for DesignHub and 1 for Trivialis.",
  },
];

export default function Page2() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);

  const onHover = (img, txt) => {
    setImage(img);
    setText(txt);
  };

  const onLeave = () => {
    setImage(null);
    setText(null);
  };

  return (
    <>
      <div className="proj">
        <p className="heading2">Projects</p>
      </div>
      <div className="lefts">
        {projects.map((project) => (
          <div className="row2">
            <div>
              <p className="year">{project.year}</p>
            </div>
            <div>
              <p
                className="title"
                id="hovere"
                onMouseEnter={() => onHover(project.image, project.text)}
                onMouseLeave={onLeave}
              >
                {project.name}
              </p>
            </div>
            <div>
              <p className="feature">{project.feature}</p>
            </div>
          </div>
        ))}
      </div>
      <img
        src={red}
        alt="red"
        style={{
          position: "absolute",
          left: 30,
          top: "calc(50% - 160px)",
          width: "24px",
          height: "320px",
        }}
      />
      <img
        src={left}
        alt="left"
        style={{
          position: "absolute",
          right: 330,
          bottom: "-104px",
          width: "24px",
          height: "320px",
          transform: "rotate(90deg)",
        }}
      />{" "}
      {image && <img src={image} alt="no" id="projimg" />}
      {text && <p id="projdesc">{text}</p>}
      <img src={bottom} alt="globe" className="globeb" />
    </>
  );
}
