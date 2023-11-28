import configureStoreProd from "./configureStore.prod"
import configureStoreDev from "./configureStore.dev"
const MODE = import.meta.env.MODE

let store : any;

if (MODE === 'production') {
    store = configureStoreProd()
} else {
    store = configureStoreDev()
}
export type AppDispatch = ReturnType<typeof store.dispatch>;
export default store;