import { httpMock } from "shared/helpers/http-mock";
import { get, LocalStorageKey } from "shared/helpers/local-storage";

export async function getActivities(): Promise<any> {
  try {
    const rolls = get(LocalStorageKey.rolls) || [];

    await httpMock({ randomFailure: true });
    return {
      success: true,
      activities: rolls,
    };
  } catch (error) {
    return {
      success: false,
      error: {},
    };
  }
}
