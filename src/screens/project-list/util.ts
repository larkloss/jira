import { useUrlQueryParam } from "utils/url";
import {useMemo, useState} from "react";

// 项目列表搜索的参数
export const useProjectsSearchParams = () => {
    const [param, setParam] = useUrlQueryParam(["name", "personId"]);
    return [
        useMemo(
            () => ({ ...param, personId: Number(param.personId) || undefined }),
            [param]
        ),
        setParam,
    ] as const;
};

//全局状态管理器
export const useProjectModal = () => {
    const [{projectCreate}, setProjectCreate] = useUrlQueryParam([
        'projectCreate'
    ])
    const open = () => setProjectCreate({projectCreate: true})
    const close = () => setProjectCreate({projectCreate: false})

    return {
        projectModalOpen: projectCreate === 'true',
        open,
        close
    }
}

const useTest = () => {
    const {open: openModal} = useProjectModal()
    const [a, setA] = useState()
}
