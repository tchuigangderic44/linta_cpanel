import  secureLocalStorage  from  "react-secure-storage";

export const LocalStorage = {
    getItem(key: string) {
        return secureLocalStorage.getItem(key);
    },
    setItem(key: string, value: any) {
        secureLocalStorage.setItem(key, value);
    },
    removeItem(key: string) {
        secureLocalStorage.removeItem(key);
    },
    clear() {
        secureLocalStorage.clear();
    },
}