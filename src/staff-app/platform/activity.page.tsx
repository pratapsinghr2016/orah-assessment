import React, { useEffect } from "react"
import styled from "styled-components"
import { BorderRadius, Spacing } from "shared/styles/styles"
import { Images } from "assets/images"
import { getBgColor } from "shared/helpers/data-generation"
import { useAppDispatch, useAppSelector } from "shared/hooks/redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CenteredContainer } from "shared/components/centered-container/centered-container.component"
import { fetchActivities, getAllActivities } from "./activity.page.slice"
import { Person } from "shared/models/person"

export const ActivityPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { activities, isLoading, hasError } = useAppSelector(getAllActivities)

  useEffect(() => {
    dispatch(fetchActivities())
  }, [])

  return (
    <S.Container>
      {isLoading && (
        <div style={{ display: "flex", margin: "auto", alignItems: "center", justifyContent: "center" }}>
          <S.SpinnerContainer>
            <FontAwesomeIcon icon="spinner" size="5x" spin />
          </S.SpinnerContainer>
        </div>
      )}

      {!isLoading &&
        activities &&
        activities.map(({ id, gender, first_name: firstName, last_name: lastName, age, roll, grade, parent }: Person) => (
          <S.CardContainer key={id} style={{ borderLeft: `15px solid ${getBgColor(roll)}` }}>
            <S.Avatar url={gender === "m" ? Images.male : Images.female}></S.Avatar>
            <div>
              <div>
                <S.Title> Name:</S.Title> {firstName + " " + lastName}
              </div>
              <div>
                <S.Title> Age:</S.Title> {age}
              </div>
              <div>
                <S.Title> Grade: </S.Title> {grade}
              </div>
              <div>
                <S.Title> Parent:</S.Title> {parent}
              </div>
              <div>
                <S.Title>Roll:</S.Title> {roll}
              </div>
            </div>
          </S.CardContainer>
        ))}

      {hasError && (
        <CenteredContainer>
          <div>Failed to load</div>
        </CenteredContainer>
      )}
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 80%;
    margin: ${Spacing.u4} auto 0;
    gap: 2rem;
  `,
  CardContainer: styled.div`
    display: flex;
    background-color: #fff;
    padding: 5px;
    display: flex;
    min-width: 350px;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 35px 10px 10px 35px;
    > div {
      box-sizing: border-box;
      max-width: 50%;
      margin-left: 20px;
    }
    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  `,
  Avatar: styled.div<{ url: string }>`
    width: 7rem;
    height: 7rem;
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
    font-size: 1rem;
    padding: 2px;
  `,
  SpinnerContainer: styled.div`
    display: flex;
    margin-top: 38vh;
    align-items: center;
    justify-content: center;
  `,
}
