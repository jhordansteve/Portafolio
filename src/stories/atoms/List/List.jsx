import * as React from "react";
import { StyleList } from "./styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PropTypes from "prop-types";

const ListComponent = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <StyleList key={item}>
          <div className="icon">
            <ArrowRightAltIcon />
          </div>
          <div>{item}</div>
        </StyleList>
      ))}
    </div>
  );
};

ListComponent.propTypes = {
  /**
   * Agrega la lista en un arreglo de string
   */
  data: PropTypes.array,
};
export default ListComponent;
