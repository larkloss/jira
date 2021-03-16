import { useUrlQueryParam } from "utils/url";
import {useMemo, useState} from "react";
import {useProject} from "../../utils/project";

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
    const [{editingProjectId}, setEditingProjectId] = useUrlQueryParam([
        'editingProjectId'
    ])

    const {data: editingProject, isLoading} = useProject(Number(editingProjectId))
    const open = () => setProjectCreate({projectCreate: true})
    const close = () => {
        setProjectCreate({projectCreate: undefined})
        setEditingProjectId({editingProjectId:undefined})
    }
    const startEdit = (id: number) => setEditingProjectId({editingProjectId: id})

    return {
        projectModalOpen: projectCreate === 'true' || Boolean(editingProject),
        open,
        close,
        editingProject,
        isLoading,
    }
}

const useTest = () => {
    const {open: openModal} = useProjectModal()
    const [a, setA] = useState()
}
