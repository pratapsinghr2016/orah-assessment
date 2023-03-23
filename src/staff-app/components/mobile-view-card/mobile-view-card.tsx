import { Images } from "assets/images";
import React, { useState } from "react";
import { DefaultPropTypes, Person, PersonHelper } from "shared/models/person";
import { BorderRadius } from "shared/styles/styles";
import { RollStateSwitcher } from "staff-app/components/roll-state/roll-state-switcher.component";
import styled from "styled-components";

interface Props {
  rollMode: string;
  student: Person;
  tableProps: DefaultPropTypes;
}
export const MobileViewList: React.FC<Props> = ({
  rollMode,
  student,
  tableProps,
}) => {
  const [dateTime, setDateTime] = useState(student.last_update);

  return (
    <S.ListCardContainer>
      <span>
        <div>
          <S.Title> Name:</S.Title> {PersonHelper.getFullName(student)}
        </div>
        <div>
          <S.Title> Age:</S.Title> {student.age}
        </div>
        <div>
          <S.Title> Grade: </S.Title> {student.grade}
        </div>
        <div>
          <S.Title> Parent:</S.Title> {student.parent}
        </div>
        <div>
          <S.Title>Last update:</S.Title> {dateTime}
        </div>
      </span>
      <div>
        <S.Avatar
          url={student.gender === "m" ? Images.male : Images.female}
        ></S.Avatar>
        <div style={{ marginLeft: 8 }}>
          <RollStateSwitcher
            tableProps={tableProps}
            studentDetail={student}
            rollMode={rollMode}
            setDateTime={setDateTime}
          />
        </div>
      </div>
    </S.ListCardContainer>
  );
};

const S = {
  ListCardContainer: styled.div`
    @media (min-width: 700px) {
      display: none;
    }
    @media (min-width: 300px) and (max-width: 650px) {
      background-color: #fff;
      padding: 5px;
      display: flex;
      margin-top: 0.5rem;
      align-items: center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      > span {
        width: 79%;
        > div {
          font-size: 0.83rem;
        }
      }
    }
  `,
  Avatar: styled.div<{ url: string }>`
    width: 48px;
    height: 48px;
    margin: 5px;
    border-radius: 50%;
    background-image: url(${({ url }) => url});
    border-top-left-radius: ${BorderRadius.default};
    border-bottom-left-radius: ${BorderRadius.default};
    background-size: cover;
    background-position: 50%;
    align-self: center;
  `,
  Title: styled.strong`
    font-weight: 600;
    color: #333;
    line-height: 1.2rem;
    padding: 2px;
  `,
};
