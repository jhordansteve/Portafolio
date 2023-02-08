import React from "react";
import Carrusel from "../../molecules/carrusel/Carrusel";
import CardComponent from "../../molecules/Card/Card";
import { SwiperSlide } from "swiper/react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import reactpng from "../../../img/react.png";
import reduxpng from "../../../img/redux.png";
import nodejpng from "../../../img/nodejs.png";
import materialpng from "../../../img/material.png";
import bootstrappng from "../../../img/bootstrap.png";
import stylecomponentpng from "../../../img/stylecomponent.png";
import githubpng from "../../../img/github.png";
import gitlapimg from "../../../img/gitlap.avif";
import bitbucketimg from "../../../img/bitbucket.png";
import typescriptimg from "../../../img/typescript.png";
import javaScriptimg from "../../../img/javascript.svg";
import htmlimg from "../../../img/html.svg";
import cssimg from "../../../img/css.svg";
import storybookimg from "../../../img/storybook.jpg";

const Skills = () => {
  const theme = useTheme();
  const palette = theme.palette;
  return (
    <div style={{ padding: "60px 0 0 0" }}>
      <Typography
        variant="h3"
        gutterBottom
        style={{
          color: palette.text.primary,
          textAlign: "center",
          margin: "0px",
        }}
      >
        Skills
      </Typography>
      <Carrusel>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={reactpng}
              color="#61DBFB"
              text="3 años de experiencia"
              title="ReactJS"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={reduxpng}
              color="#764abc"
              text="2 años de experiencia"
              title="Redux"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={nodejpng}
              color="#68a063"
              text="3años de experiencia"
              title="NodeJS"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={materialpng}
              color="#007fff"
              text="3 años de experiencia"
              title="MaterialUI"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={bootstrappng}
              color="#563d7c"
              text="2 años de experiencia"
              title="Bootstrap"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={stylecomponentpng}
              color="#d872b0"
              text="1 año de experiencia"
              title="Styled Components"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={githubpng}
              color="#94cfe4"
              text="3años de experiencia"
              title="GitHub"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={gitlapimg}
              color="#e34329"
              text="6 meses de experiencia"
              title="GitLap"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={bitbucketimg}
              color="#2185ff"
              text="5 meses de experiencia"
              title="Bitbucket"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={typescriptimg}
              color="#2d79c7"
              text="6 meses de experiencia"
              title="TypeScript"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={javaScriptimg}
              color="#d4b830"
              text="4 años de experiencia"
              title="JavaScript"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={htmlimg}
              color="#ef652a"
              text="5 años de experiencia"
              title="HTML"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={cssimg}
              color="#006bc0"
              text="5 años de experiencia"
              title="CSS"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ marginBottom: "30px" }}>
            <CardComponent
              img={storybookimg}
              color="#ff4785"
              text="2 años de experiencia"
              title="Storybook"
            />
          </div>
        </SwiperSlide>
      </Carrusel>
    </div>
  );
};

export default Skills;
