import {useEffect, useRef, useState} from "react";

export const isFalsy = (value:any) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) => value === undefined || value === null || value === "";
    // 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object:{[key: string]: unknown}) => {
     // Object.assign({}, object)
    const result = { ...object };
    Object.keys(result).forEach((key) => {
        //@ts-ignore
        const value = result[key];
        if (isVoid(value)) {
            delete result[key];
        }
    });
    return result;
};

export const useMount = (callback:() => void) => {
    useEffect(() => {
       callback()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export const useDebounce = <V>(value:V, delay?:number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        //每次value变化完设置一个
        const timeout = setTimeout(() => setDebounceValue(value),delay)
        //每次在上一个useEffect处理完后在使用
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}

export const useDocumentTitle = (title: string, keepOnUnmount:boolean =  true) => {
    const oldTitle = useRef(document.title).current
    //页面加载时候 旧title
    //加载后 新title
    useEffect(() => {
        document.title = title
    }, [title])

    useEffect(() => {
        return () => {
            if(!keepOnUnmount) {
                document.title = oldTitle
            }
        }
    }, [keepOnUnmount, oldTitle])
}

export const resetRoute = () => (window.location.href = window.location.origin);

/**
 * 传入一个对象，和键集合，返回对应的对象中的键值对
 * @param obj
 * @param keys
 */
export const subset = <
    O extends { [key in string]: unknown },
    K extends keyof O
    >(
    obj: O,
    keys: K[]
) => {
    const filteredEntries = Object.entries(obj).filter(([key]) =>
        keys.includes(key as K)
    );
    return Object.fromEntries(filteredEntries) as Pick<O, K>;
};
/**返回组建的挂载状态， 如果还没挂载或者已经卸载，返回false，反之，返回true
 *
 */
export const useMountedRef = () => {
    const mountedRef = useRef(false)

    useEffect(() => {
        mountedRef.current = true
        return () => {
            mountedRef.current = false
        }
    })
    return mountedRef
}