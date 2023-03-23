import { Images } from "assets/images";
import React, { useState } from "react";
import { Person, PersonHelper, DefaultPropTypes } from "shared/models/person";
import { Colors } from "shared/styles/colors";
import { BorderRadius, FontWeight, Spacing } from "shared/styles/styles";
import { RollStateSwitcher } from "staff-app/components/roll-state/roll-state-switcher.component";
import styled from "styled-components";

interface Props {
  rollMode: string;
  student: Person;
  tableProps: DefaultPropTypes;
}
export const StudentListTile: React.FC<Props> = ({
  rollMode,
  student,
  tableProps,
}) => {
  const [dateTime, setDateTime] = useState(student.last_update);

  return (
    <S.Container>
      <S.DetailContent>
        <S.Avatar
          url={student.gender === "m" ? Images.male : Images.female}
        ></S.Avatar>

        <S.ColItem>
          <p>{PersonHelper.getFullName(student)}</p>
          <p>Age: {student.age}</p>
        </S.ColItem>
      </S.DetailContent>

      <S.Content>
        <S.ColItem>
          <p>{student.parent}</p>
        </S.ColItem>
      </S.Content>

      <S.Content>
        <S.ColItem>
          <p>{student.grade}</p>
        </S.ColItem>
      </S.Content>

      <S.Content style={{ position: "relative", left: "-25px" }}>
        <S.ColItem>
          <p>{dateTime.split("at")[0]}</p>
          <p>{dateTime.split("at")[1]}</p>
        </S.ColItem>
      </S.Content>

      <S.Roll>
        <RollStateSwitcher
          tableProps={tableProps}
          studentDetail={student}
          rollMode={rollMode}
          setDateTime={setDateTime}
        />
      </S.Roll>
    </S.Container>
  );
};

const S = {
  DetailContent: styled.div`
    display: flex;
    min-width: 10rem;
    max-width: 15rem;
  `,
  Container: styled.div`
    margin-top: ${Spacing.u3};
    padding-right: ${Spacing.u2};
    display: flex;
    color: ${Colors.dark.base};
    font-weight: ${FontWeight.strong};
    flex-wrap: wrap;
    height: 60px;
    border-radius: ${BorderRadius.default};
    background-color: #fff;
    box-shadow: 0 2px 7px rgba(5, 66, 145, 0.13);
    transition: box-shadow 0.3s ease-in-out;
    align-items: center;
    justify-content: space-between;
    &:hover {
      box-shadow: 0 2px 7px rgba(5, 66, 145, 0.26);
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
  ColItem: styled.div`
    line-height: 3px;
  `,
  Content: styled.div`
    min-width: 7rem;
    max-width: 15rem;
  `,
  Roll: styled.div`
    display: flex;
    align-items: center;
    margin-right: ${Spacing.u4};
  `,
};
