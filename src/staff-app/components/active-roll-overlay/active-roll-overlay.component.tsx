import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { BorderRadius, Spacing } from "shared/styles/styles"
import { RollStateList } from "staff-app/components/roll-state/roll-state-list.component"
import { Colors } from "shared/styles/colors"

export type ActiveRollAction = "filter" | "exit"
interface Props {
  isActive: boolean
  allRolls: number
  selectedRollType: string
  counts: {
    total: number
    present: number
    late: number
    absent: number
    unRolled: number
  }
  onItemClick: (value: string) => void
  setModalOpen: (value: boolean) => void
}

export const ActiveRollOverlay: React.FC<Props> = (props) => {
  const { counts, onItemClick, selectedRollType, setModalOpen } = props

  return (
    <S.Content>
      <div>
        <RollStateList
          stateList={[
            { type: "all", count: counts.total },
            { type: "present", count: counts.present },
            { type: "late", count: counts.late },
            { type: "absent", count: counts.absent },
            { type: "un-rolled", count: counts.unRolled },
          ]}
          onItemClick={onItemClick}
          selectedRollType={selectedRollType}
        />
      </div>
      <S.ActionContainer>
        <S.Button onClick={() => onItemClick("")}>Reset</S.Button>
        <S.Button onClick={() => setModalOpen(true)}>Complete</S.Button>
      </S.ActionContainer>
    </S.Content>
  )
}

const S = {
  Overlay: styled.div<{ isActive: boolean }>`
    height: ${({ isActive }) => (isActive ? "120px" : 0)};
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    color: #fff;
    min-height: 145px;
    background-color: ${Colors.gray.light};
    margin: -90px auto 0;
    border: 6.7px solid ${Colors.blue.base};
    border-radius: ${BorderRadius.default};
    padding: 16px 0px 0px 0px;
  `,
  ActionContainer: styled.div`
    display: flex;
    width: 100%;
    padding: 0;
  `,
  Button: styled(Button)`
    width: 50%;
    text-transform: capitalize !important;
    border: 4px solid ${Colors.blue.base} !important;
    border-bottom: 2px solid ${Colors.blue.base} !important;
    border-radius: 0px !important;
    background-color: #fff !important;
    margin: 0 !important;
    :hover {
      box-shadow: 2px 8px 7px ${Colors.gray.light};
      border: 1px solid ${Colors.blue.base} !important;
      padding: 2px !important;
    }
  `,
}
