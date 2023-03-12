import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getHomeboardStudents, updateHomeboardStudent, saveRollsInStorage } from "api/get-homeboard-students"
import { Person } from "shared/models/person"

interface CounterState {
  response: {
    students: [Person] | []
    total: number
    isComplete: false
  }
  isLoading: boolean
  hasError: boolean
  counts: {
    total: number
    present: number
    late: number
    absent: number
    unRolled: number
  }
  rollsCreated: { success: boolean }
}

const initialState: CounterState = {
  response: {
    students: [],
    total: 0,
    isComplete: false,
  },
  isLoading: false,
  hasError: false,
  counts: {
    total: 0,
    present: 0,
    late: 0,
    absent: 0,
    unRolled: 0,
  },
  rollsCreated: {
    success: false,
  },
}

type P = {
  limit: number
  offset: number
  filter: string
  sortByKey?: string
  sortOrder: "asc" | "dsc"
}

type UpdateType = {
  studentId: number
  newStudentIfo: Person
  defaultProps: P
}

export const fetchStudents = createAsyncThunk("students/fetchStudents", async (payload: P) => {
  try {
    const response = await getHomeboardStudents(payload)
    return response
  } catch (err) {
    console.error("Err: ", err)
  }
  return []
})

export const updateStudent = createAsyncThunk("students/updateStudent", async (payload: UpdateType) => {
  const { newStudentIfo, studentId, defaultProps } = payload

  try {
    const response = await updateHomeboardStudent(newStudentIfo, studentId, defaultProps)
    return response
  } catch (error) {
    console.error("Err: ", error)
  }
})

export const saveRolls = createAsyncThunk("students/saveRolls", async () => {
  try {
    const response = await saveRollsInStorage()
    return response
  } catch (error) {
    console.error("Err: ", error)
  }
})

export const homeBoardSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    returnToState(state, _) {
      state.rollsCreated = { success: false }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStudents.pending, (state, _) => {
        state.isLoading = true
      })
      .addCase(fetchStudents.fulfilled, (state, { payload }: any) => {
        state.isLoading = false
        state.response = {
          students: payload?.students,
          total: payload?.total,
          isComplete: false,
        }
        state.counts = {
          ...payload.counts,
        }
      })
      .addCase(fetchStudents.rejected, (state, _) => {
        state.isLoading = false
        state.hasError = true
      })
      .addCase(updateStudent.fulfilled, (state, { payload }: any) => {
        state.isLoading = false
        state.counts = {
          ...payload,
        }
      })
      .addCase(saveRolls.fulfilled, (state, { payload }: any) => {
        state.isLoading = false
        state.rollsCreated = {
          ...payload,
        }
      })
  },
})

export const getAllStudents = (state: any) => state.students
export const updateAStudent = (state: any) => state.students

export const { returnToState } = homeBoardSlice.actions

export default homeBoardSlice.reducer
