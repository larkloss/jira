import {useHttp} from "./http";
import {useQuery} from "react-query";
import {TaskType} from "../types/task-type";

export const useTaskTypes = () => {
    const client = useHttp();
    return useQuery<TaskType[]>(["taskType"], () =>
        client("taskTypes",)
    )
};