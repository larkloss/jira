import React, { useState } from "react";
import { SearchPanel } from "screens/project-list/search-panel";
import { List } from "screens/project-list/list";
import {useDebounce, useDocumentTitle} from "../../utils";
import styled from "@emotion/styled";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
import {useUrlQueryParam} from "../../utils/url";
import {useProjectModal, useProjectsSearchParams} from "./util";
import {ButtonNoPadding, ErrorBox, Row, ScreenContainer} from "../../components/lib";

// 使用 JS ，大部分的错误都是在 runtime(运行时) 的时候发现的
// 我们希望，在静态代码中，就能找到其中的一些错误 -> 强类型
export const ProjectListScreen = () => {
    useDocumentTitle("项目列表", false);
    const [param, setParam] = useProjectsSearchParams()
    const {open} = useProjectModal()
    const { isLoading, error, data: list } = useProjects(useDebounce(param, 200));
    const { data: users } = useUsers();

    useUrlQueryParam([''])
    return (
        <ScreenContainer>
            <Row between={true}>
                <h1>项目列表</h1>
                <ButtonNoPadding onClick={open} type={"link"}>创建项目</ButtonNoPadding>
            </Row>
            <SearchPanel users={users || []} param={param} setParam={setParam} />
            <ErrorBox error={error}/>
            <List  loading={isLoading} users={users || []} dataSource={list || []} />
        </ScreenContainer>
    );
};
