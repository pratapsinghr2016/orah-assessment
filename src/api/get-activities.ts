import { httpMock } from "shared/helpers/http-mock"
import { get, LocalStorageKey } from "shared/helpers/local-storage"
import { ApiResponse } from "shared/interfaces/http.interface"
import { Activity } from "shared/models/activity"
import { Person } from "shared/models/person"
import { Roll } from "shared/models/roll"

export async function getActivities(payload: any): Promise<any> {
  try {
    const rolls = get(LocalStorageKey.rolls) || []

    await httpMock({ randomFailure: true })
    return {
      success: true,
      activities: rolls,
    }
  } catch (error) {
    return {
      success: false,
      error: {},
    }
  }
}
