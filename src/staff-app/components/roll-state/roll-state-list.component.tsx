import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@material-ui/core";
import React from "react";
import { Colors } from "shared/styles/colors";
import { FontWeight, Spacing } from "shared/styles/styles";
import { RollStateIcon } from "staff-app/components/roll-state/roll-state-icon.component";
import styled from "styled-components";

interface Props {
  stateList: StateList[];
  onItemClick: (type: ItemType) => void;
  size?: number;
  selectedRollType: string;
}
export const RollStateList: React.FC<Props> = ({
  stateList,
  size = 14,
  onItemClick,
  selectedRollType,
}) => {
  const onClick = (type: ItemType) => {
    if (onItemClick) {
      onItemClick(type);
    }
  };

  return (
    <S.ListContainer>
      {stateList.map((s, i) => {
        if (s.type === "all") {
          return (
            <S.ListItem key={i}>
              <S.ListItemDetail>
                <S.Avatar
                  style={{
                    backgroundColor: Colors.blue.base,
                    border: "2px solid",
                    cursor: "not-allowed",
                  }}
                >
                  <FontAwesomeIcon icon="users" size="lg" />
                </S.Avatar>
                <p>{s.count}</p>
              </S.ListItemDetail>
              <strong>{s.type}</strong>
            </S.ListItem>
          );
        }

        return (
          <S.ListItem key={i}>
            <S.ListItemDetail>
              <RollStateIcon
                selectedRollType={selectedRollType}
                rollMode={s.type}
                onClick={() => onClick(s.type)}
              />
              <p>{s.count}</p>
            </S.ListItemDetail>
            <strong>{s.type}</strong>
          </S.ListItem>
        );
      })}
    </S.ListContainer>
  );
};

const S = {
  ListContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  ListItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: ${Spacing.u4};
    p {
      font-weight: ${FontWeight.strong};
      margin-left: ${Spacing.u2};
    }
    strong {
      margin-right: inherit;
      text-transform: capitalize;
    }
  `,
  ListItemDetail: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Avatar: styled(Avatar)`
    cursor: pointer;
  `,
};

interface StateList {
  type: ItemType;
  count: number;
}

type ItemType = any | "all";
