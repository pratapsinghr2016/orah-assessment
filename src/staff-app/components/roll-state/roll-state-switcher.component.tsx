import React, { useState } from "react";
import { useAppDispatch } from "shared/hooks/redux";
import { DefaultPropTypes, Person } from "shared/models/person";
import { RollStateIcon } from "staff-app/components/roll-state/roll-state-icon.component";
import { updateStudent } from "staff-app/daily-care/daily-care.slice";

interface Props {
  size?: number;
  studentDetail: Person;
  rollMode: string;
  tableProps: DefaultPropTypes;
}

const rollStates = ["un-rolled", "present", "late", "absent"];

const getIdx = (rollMode: string) => rollStates.indexOf(rollMode);

export const RollStateSwitcher: React.FC<Props> = ({
  rollMode,
  size = 40,
  studentDetail,
  tableProps,
}) => {
  const [rollIdx, setRollState] = useState<number>(getIdx(rollMode));

  const dispatch = useAppDispatch();

  const onClick = (value: number) => {
    // FOR GLOBAL STATE
    let tempValue = value;
    if (tempValue === 3) {
      tempValue = 1;
    } else {
      tempValue += 1;
    }

    const targetStudent = {
      ...studentDetail,
      roll: rollStates[tempValue],
    };

    const payload: any = {
      studentId: studentDetail.id,
      newStudentIfo: targetStudent,
      defaultProps: {
        ...tableProps,
      },
    };
    dispatch(updateStudent(payload));

    // FOR LOCAL STATE
    setRollState((prev: number): number => {
      if (prev < rollStates.length - 1) {
        return (prev += 1);
      }
      return 1;
    });
  };

  return (
    <RollStateIcon
      selectedRollType=""
      rollMode={rollStates[rollIdx]}
      size={size}
      onClick={() => onClick(rollIdx)}
    />
  );
};
