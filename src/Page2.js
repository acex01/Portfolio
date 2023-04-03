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
    text: "The independent game developer Techyonic has formally announced the arrival of An Elmwood Trail, a text-based RPG, on iOS and Android.",
  },
  {
    year: "2021",
    name: "UniPal",
    feature: "UI/UX • HCI • Figma",
    image: unipal,
    text: "agam",
  },
  {
    year: "2023",
    name: "T-Shirts",
    feature: "Ps • Ai • Figma",
    image: tshirti,
    text: "The independent game developer Techyonic has formally announced the arrival of An Elmwood Trail, a text-based RPG, on iOS and Android.",
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
          right: 350,
          bottom: -30,
          width: "24px",
          height: "320px",
          transform: "rotate(90deg)",
        }}
      />{" "}
      {image && <img src={image} alt="no" id="projimg" />}
      {text && (
        <p id="projdesc">
          An app that aims to help college students navigate through their
          college life with ease and convenience, knowing that our app will be
          by their side.
        </p>
      )}
      <img src={bottom} alt="globe" className="globeb" />
    </>
  );
}
