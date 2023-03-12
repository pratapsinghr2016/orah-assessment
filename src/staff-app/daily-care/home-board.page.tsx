// import Button from "@material-ui/core/ButtonBase"
// import { useApi } from "shared/hooks/use-api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import IconButton from "@material-ui/core/IconButton"
import { Images } from "assets/images"
import React, { useEffect, useRef, useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import { CenteredContainer } from "shared/components/centered-container/centered-container.component"
import { getLimitAndOffset, searchName } from "shared/helpers/performance-utils"
import { useAppDispatch, useAppSelector } from "shared/hooks/redux"
import { DefaultPropTypes, Person } from "shared/models/person"
import { Colors } from "shared/styles/colors"
import { BorderRadius, FontWeight, Spacing } from "shared/styles/styles"
import { /* ActiveRollAction, */ ActiveRollOverlay } from "staff-app/components/active-roll-overlay/active-roll-overlay.component"
import Pagination from "staff-app/components/pagination/pagination.component"
import SearchInput from "staff-app/components/search-input/search-input.component"
import { StudentListTile } from "staff-app/components/student-list-tile/student-list-tile.component"
import Switches from "staff-app/components/switch-button/switch-button.component"
import styled from "styled-components"
import { fetchStudents, getAllStudents, saveRolls, returnToState } from "./daily-care.slice"
import ConfirmationModal from "../components/confirmation-modal/confirmation-modal"
import ToastBar from "staff-app/components/toast-notification/toast-notification"

export const HomeBoardPage: React.FC = () => {
  const [studentList, setStudentList] = useState<Person[]>([])
  const [page, setPage] = useState(0)
  const [isSearched, setIsSearched] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sortBy, setSortBy] = useState("first_name")
  const [sortOrder, setSortOrder] = useState<"asc" | "dsc">("asc")
  const [searchParams, setSearchParams] = useSearchParams()
  const [allRolls, setAllRolls] = useState(0)
  const [rollTypeFilter, setRollTypeFilter] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [tostOpen, setToastOpen] = useState(false)

  const [tableProps, setTableProps] = useState<DefaultPropTypes>({
    limit: 0,
    offset: 11,
    sortByKey: "first_name",
    sortOrder: "asc",
  })

  const searchRef: any = useRef()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    counts,
    response: { students, total },
    isLoading,
    hasError,
    rollsCreated: { success },
  } = useAppSelector(getAllStudents)

  const removeErrorParam = () => {
    searchParams.delete("name")
    setSearchParams(searchParams)
  }

  const getInitialStates = () => {
    setRowsPerPage(10)
    setPage(0)
    setSortBy("first_name")
    setSortOrder("asc")
  }

  // FOR FETCHING INFORMATION ON LANDING & PAGINATION STATE CHANGE OR SORT ACTIVITY
  useEffect(() => {
    const [limit, offset] = getLimitAndOffset(rowsPerPage, page)
    const payload = { limit, offset, sortByKey: sortBy, sortOrder: sortOrder.length ? sortOrder : "asc", filter: rollTypeFilter }
    setTableProps(payload)
    dispatch(fetchStudents(payload))
  }, [page, sortBy, sortOrder, rollTypeFilter, isSearched, rowsPerPage])

  useEffect(() => {
    if (students && students.length) {
      if (searchRef?.current?.value) {
        const afterSearchArr = searchName(students, searchRef?.current?.value)
        setStudentList(afterSearchArr)
      } else {
        setStudentList(students)
        removeErrorParam()
      }
    }
    setAllRolls(total)
  }, [students])

  // FOR SEARCH ACTIVITY
  const searchFn = (value: string) => {
    if (value?.length) {
      navigate({
        search: createSearchParams({
          name: value,
        }).toString(),
      })
      const nameListAfterSearch = searchName(studentList, value)
      setStudentList(nameListAfterSearch)
    } else {
      removeErrorParam()
      setIsSearched(!isSearched)
    }
  }

  const onToolbarAction = (action: ToolbarAction) => {
    // if (action === "roll") {
    //   setIsRollMode(true)
    // }
  }

  const onActiveRollAction = (action: string) => {
    setRollTypeFilter(action)
    getInitialStates()
  }

  // ON SUBMIT
  const handleRollSubmission = () => {
    dispatch(saveRolls())
  }

  useEffect(() => {
    if (success) {
      setModalOpen(false)
      setToastOpen(true)
      dispatch(returnToState({}))
    }
  }, [success])

  return (
    <>
      <S.PageContainer>
        <ConfirmationModal open={modalOpen} setOpen={setModalOpen} onAgree={handleRollSubmission} />
        <Toolbar onSortOrderChange={setSortOrder} onSortByChange={setSortBy} searchRef={searchRef} searchFn={searchFn} onItemClick={onToolbarAction} />

        {isLoading && (
          <CenteredContainer>
            <S.SpinnerContainer>
              <FontAwesomeIcon icon="spinner" size="3x" spin />
            </S.SpinnerContainer>
          </CenteredContainer>
        )}

        {!isLoading && students && (
          <S.TableListContainer>
            <S.TableHeader>
              <strong>Student</strong>
              <strong>Parent</strong>
              <strong>Grade</strong>
              <strong>Roll</strong>
            </S.TableHeader>
            {studentList.map((s) => (
              <StudentListTile tableProps={tableProps} key={s.id} rollMode={s.roll} student={s} />
            ))}
          </S.TableListContainer>
        )}

        {hasError && (
          <CenteredContainer>
            <div>Failed to load</div>
          </CenteredContainer>
        )}
        {!isLoading && <Pagination count={counts.total} page={page} setPage={setPage} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />}
      </S.PageContainer>

      <ActiveRollOverlay setModalOpen={setModalOpen} selectedRollType={rollTypeFilter} counts={counts} allRolls={allRolls} isActive={true} onItemClick={onActiveRollAction} />
      <ToastBar open={tostOpen} setOpen={setToastOpen} />
    </>
  )
}

type ToolbarAction = "roll" | "sort"
interface ToolbarProps {
  onItemClick: (action: ToolbarAction, value?: string) => void
  searchFn: (value: string) => void
  onSortByChange: (value: any) => void
  onSortOrderChange: (value: any) => void
  searchRef: any
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const { onSortOrderChange, onSortByChange, searchRef, searchFn, onItemClick } = props
  const [sortBy, setSortBy] = useState(true)
  const [sortOrder, setSortOrder] = useState("")

  useEffect(() => {
    if (sortBy) {
      onSortByChange("first_name")
    } else {
      onSortByChange("last_name")
    }
    onSortOrderChange(sortOrder)
  }, [sortBy, sortOrder])

  return (
    <S.ToolbarContainer>
      <S.SortContainer>
        <Switches state={sortBy} setState={(value: boolean) => setSortBy(value)} />
        <>
          <ButtonGroup orientation="vertical" color="primary">
            <S.IconButton onClick={() => setSortOrder("asc")} style={{ backgroundColor: sortOrder === "asc" ? "#fff" : Colors.blue.base }} color="secondary">
              <img src={sortOrder !== "asc" ? Images.asc : Images.ascDark} width={30} />
            </S.IconButton>
            <S.IconButton onClick={() => setSortOrder("dsc")} style={{ backgroundColor: sortOrder === "dsc" ? "#fff" : Colors.blue.base }} color="primary">
              <img src={sortOrder !== "dsc" ? Images.dsc : Images.dscDark} width={30} />
            </S.IconButton>
          </ButtonGroup>
        </>
      </S.SortContainer>
      <div>
        <SearchInput searchRef={searchRef} searchFn={searchFn} />
      </div>
      <S.Button onClick={() => onItemClick("roll")}>Start Roll</S.Button>
    </S.ToolbarContainer>
  )
}

const S = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    min-height: 100vh;
    margin: ${Spacing.u4} auto 140px;
  `,
  ToolbarContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: ${Colors.gray.light};
    padding: 6px 14px;
    font-weight: ${FontWeight.strong};
    border-radius: ${BorderRadius.default};
  `,
  SpinnerContainer: styled.div`
    display: flex;
    margin-top: 38vh;
    align-items: center;
    justify-content: center;
  `,
  TableListContainer: styled.div`
    min-height: 100vh;
  `,
  Button: styled(Button)`
    && {
      color: #fff;
      background-color: ${Colors.blue.base};
      border: 2px solid ${Colors.blue.base};
      padding: ${Spacing.u2};
      font-weight: ${FontWeight.strong};
      border-radius: ${BorderRadius.arc};
      :hover {
        background-color: #fff;
        color: ${Colors.gray.light};
        border: 2px solid ${Colors.blue.base};
      }
    }
  `,
  IconButton: styled(IconButton)`
    && {
      width: 1px;
      height: 1px;
      padding: 8px;
      background-color: ${Colors.blue.base};
      margin-bottom: 3px;
      margin-left: 5px;
      :hover {
        background-color: ${Colors.blue.base};
      }
    }
  `,
  SortContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  TableHeader: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    > strong {
      text-align: center;
      margin: 0 10.5%;
    }
  `,
}
