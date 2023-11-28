import authSlice from './authentication/authentication.slice'
import usersSlice from './users/users.slice'

export const rootReducer = {
    auth: authSlice,
    users: usersSlice,
}