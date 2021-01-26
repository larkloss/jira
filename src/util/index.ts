import {useEffect, useState} from "react";

export const isFalsy = (value:any) => (value === 0 ? false : !value);
    // 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object:object) => {
     // Object.assign({}, object)

    const result = { ...object };
    Object.keys(result).forEach((key) => {
        //@ts-ignore
        const value = result[key];
        if (isFalsy(value)) {
            //@ts-ignore
            delete result[key];
        }
    });
    return result;
};
export const useMount = (callback:() => void) => {
    useEffect(() => {
       callback()
    }, [])
}
export const useDebounce = (value:any, delay?:number) => {
    const [debounceValue, setdebounceValue] = useState(value)
    useEffect(() => {
        //每次value变化完设置一个
        const timeout = setTimeout(() => setdebounceValue(value),delay)
        //每次在上一个useEffect处理完后在使用
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}