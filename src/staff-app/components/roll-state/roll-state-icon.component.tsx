import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@material-ui/core";
import { Images } from "assets/images";
import React from "react";
import { getBgColor } from "shared/helpers/data-generation";
import { Colors } from "shared/styles/colors";
import styled from "styled-components";

interface Props {
  size?: number;
  rollMode: string;
  selectedRollType: string;
  onClick?: () => void;
}
export const RollStateIcon: React.FC<Props> = (props) => {
  const { size = 20, selectedRollType, rollMode, onClick } = props;

  let stylesObj = {
    backgroundColor: getBgColor(rollMode),
    border: `2px solid`,
  };

  if (selectedRollType === rollMode) {
    stylesObj = { ...stylesObj, border: `4px solid ${Colors.blue.base}` };
  }
  return (
    <S.Avatar onClick={onClick} style={stylesObj}>
      {rollMode === "un-rolled" ? (
        <img src={Images.nullIcon} width={"100%"} height={"100%"} />
      ) : (
        <FontAwesomeIcon icon="check" size={size > 14 ? "lg" : "sm"} />
      )}
    </S.Avatar>
  );
};

const S = {
  Avatar: styled(Avatar)`
    cursor: pointer;
  `,
};
