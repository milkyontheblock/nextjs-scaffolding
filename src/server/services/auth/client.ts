import { AuthServiceOptions, LoginPayload } from "./types";

export const createAuthService = (options: AuthServiceOptions) => {
  const login = async (payload: LoginPayload) => {
    return {
      success: true,
      data: {}
    }
  }

  return {
    login
  }
}