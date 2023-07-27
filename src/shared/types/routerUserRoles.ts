import { RouteProps } from "react-router-dom"
import { UserRole } from "shared/consts/userRoles"

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}