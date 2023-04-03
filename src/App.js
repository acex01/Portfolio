import top from "./top.svg";
import left from "./left.svg";
import hand from "./hand.png";
import thump from "./thump.mp3";
import { useSpring, animated } from "@react-spring/web";
import "./App.css";
import { useEffect, useRef } from "react";
import CircleType from "circletype";
import Page2 from "./Page2";
import Page3 from "./Page3";
import topi from "./top.png";
import topf from "./top-f.png";

const thump1 = new Audio(thump);

const nav = ["Projects", "About me", "Contact"];

const socials = [
  {
    name: "Instagram",
    cursorText: "Instagram",
    link: "https://www.instagram.com/agammdeep/",
  },
  {
    name: "LinkedIn",
    cursorText: "LinkedIn",
    link: "https://www.linkedin.com/in/agamdeep-s-2a9623140/",
  },
  {
    name: "Dribbble",
    cursorText: "Dribbble",
    link: "https://dribbble.com/agamdeep",
  },
  {
    name: "Behance",
    cursorText: "Behance",
    link: "https://www.behance.net/agamdeep",
  },
];

let circleType;
function App() {
  const circularText = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const [cursorBigStyle, cursorBigAPI] = useSpring(() => ({
    from: {
      top: 0,
      left: 0,
      width: 60,
      height: 60,
      opacity: 1,
    },
  }));

  const [cursorSmallStyle, cursorSmallAPI] = useSpring(() => ({
    from: {
      width: 20,
      height: 20,
      top: 0,
      left: 0,
    },
  }));

  const [cursorTextContainerStyle, cursorTextContainerAPI] = useSpring(() => ({
    from: {
      top: 0,
      left: 0,
      transform: "translate(-50%, -50%)",
      scale: 1,
      opacity: 0,
    },
  }));

  const onLinkLeave = () => {
    cursorSmallAPI.start({
      to: {
        width: 20,
        height: 20,
      },
      config: {
        duration: 100,
      },
    });

    cursorBigAPI.start({
      to: {
        width: 60,
        height: 60,
        opacity: 1,
      },
      config: {
        duration: 300,
      },
    });

    cursorTextContainerAPI.start({
      to: {
        opacity: 0,
      },
      config: {
        duration: 300,
      },
    });

    cursorTextContainerAPI.set({
      transform: "translate(-50%, -50%)",
    });
  };

  const onLinkHover = (item) => {
    cursorSmallAPI.start({
      to: {
        width: 35,
        height: 35,
      },
      config: {
        duration: 100,
      },
    });

    if (circleType) circleType.destroy();

    circularText.current.innerHTML = item.cursorText
      ? ` ${item.cursorText} `.repeat(4)
      : ` ${item} `.repeat(4);
    circleType = new CircleType(circularText.current).radius(10);

    cursorTextContainerAPI.set({
      transform: "translate(-50%, -50%) rotate(0deg)",
    });

    cursorTextContainerAPI.start({
      to: {
        transform: "translate(-50%, -50%) rotate(360deg)",
      },
      loop: true,
      config: {
        duration: 5000,
      },
    });

    cursorTextContainerAPI.start({
      to: {
        opacity: 1,
        scale: 1.2,
      },
      config: {
        duration: 150,
      },
    });

    cursorTextContainerAPI.start({
      to: {
        scale: 1,
      },
      delay: 150,
      config: {
        duration: 150,
      },
    });

    cursorBigAPI.start({
      to: {
        width: 70,
        height: 70,
        opacity: 0,
      },
      config: {
        duration: 300,
      },
    });
  };

  const onMouseMove = (e) => {
    cursorBigAPI.start({
      to: {
        top: e.clientY,
        left: e.clientX,
      },
      config: {
        duration: 40,
      },
    });
    cursorSmallAPI.set({
      top: e.clientY,
      left: e.clientX,
    });
    cursorTextContainerAPI.set({
      top: e.clientY,
      left: e.clientX,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("onscroll", onMouseMove);
  }, []);

  return (
    <div className="App">
      <div className="Page1">
        <div className="App-header">
          <img
            src={top}
            alt="top"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              objectPosition: "center top",
            }}
          />
        </div>
        <div className="content">
          <div className="logoz">
            <p
              style={{ fontFamily: "Poppins", fontSize: 28, fontWeight: "600" }}
            >
              gum<span style={{ color: "red" }}>.</span>
            </p>
          </div>
          <div className="main">
            <div className="left">
              <img
                src={left}
                alt="left"
                style={{
                  width: "24px",
                  height: "320px",
                }}
              />
            </div>
            <div className="centerb">
              <div className="leftbox">
                <div className="chaanta">
                  <div className="hlo">
                    <h1
                      className="hlo"
                      style={{
                        fontSize: 72,
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Hello
                    </h1>
                    <h1
                      className="hlo"
                      style={{
                        fontSize: 72,
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      there
                    </h1>
                  </div>
                  <div className="hand">
                    <img
                      src={hand}
                      alt="hand"
                      style={{
                        width: "57px",
                        height: "57px",
                      }}
                    />
                  </div>
                </div>
                <div style={{ marginTop: "3px" }}>
                  <p className="dec">
                    My name is{" "}
                    <span style={{ color: "red", fontWeight: "700" }}>
                      Agamdeep.
                    </span>
                  </p>
                  <p className="dec">I turn ideas into amazing </p>
                  <p className="dec">products and experiences</p>
                </div>
                <div style={{ marginTop: "60px" }}>
                  <p
                    className="dec"
                    style={{ fontSize: 19, fontStyle: "italic" }}
                  >
                    want to know me more?
                  </p>
                  <div className="socials">
                    {socials.map((item) => {
                      return (
                        <p
                          key={item.name}
                          className="soc"
                          onMouseEnter={() => onLinkHover(item)}
                          onMouseLeave={onLinkLeave}
                          onClick={() => {
                            window.open(item.link, "_blank");
                          }}
                        >
                          {item.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="rightbox">
                {nav.map((item, index) => (
                  <div
                    key={item}
                    className="row"
                    onMouseEnter={() => {
                      thump1.currentTime = 0;
                      thump1.play();
                      onLinkHover(item);
                    }}
                    onMouseLeave={onLinkLeave}
                    onClick={() => {
                      if (item === "Projects") {
                        projectsRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      } else if (item === "About me") {
                        aboutRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      } else if (item === "Contact") {
                        window.open("mailto:agamaap01@gmail.com", "_blank");
                      }
                    }}
                  >
                    <div className="num">
                      <p className="smol" style={{ color: "red" }}>
                        0{index + 1}
                      </p>
                    </div>
                    <div>
                      <p className="nav" data-hover={item}>
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
        <img src={topi} alt="globe" className="globe" />
        <img src={topf} alt="globe" className="globe1" />
      </div>

      <div id="projects" className="Page2" ref={projectsRef}>
        <Page2 />
      </div>
      <div id="about" className="Page3" ref={aboutRef}>
        <Page3 />
      </div>
      <div class="cursor">
        <animated.div class="cursor--small" style={cursorSmallStyle} />
        <animated.div class="cursor--large" style={cursorBigStyle} />
        <animated.div class="cursor--text" style={cursorTextContainerStyle}>
          <div ref={circularText} class="text">
            GO HERE! GO HERE! GO HERE! GO HERE!
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default App;
