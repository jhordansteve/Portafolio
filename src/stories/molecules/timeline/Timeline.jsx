import React from "react";
import { ContainerTimeline } from "./styles";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const Timeline = ({ data }) => {
  const theme = useTheme();
  const text = theme.palette.text.primary;

  return (
    <ContainerTimeline>
      <ul>
        {data.map((item, index) => (
          <li key={item.title}>
            <div className="content">
              <h3>{item.title}</h3>
              <p style={{ color: text }}>{item.text}</p>
            </div>
            <div className="time">
              <h4>{item.time}</h4>
            </div>
          </li>
        ))}
        <div style={{ clear: "both" }} />
      </ul>
    </ContainerTimeline>
  );
};

Timeline.propTypes = {
  /**
   * agregar un arreglo de objetos con las siguientes llaves: title, text, time
   */
  data: PropTypes.array,
};

export default Timeline;
