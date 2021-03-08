import React from "react";
import {Popover, List, Typography, Divider, Button} from "antd";
import {useProjects} from "../utils/project";
import styled from "@emotion/styled";
import {ButtonNoPadding} from "./lib";
import {useDispatch} from 'react-redux'
import {projectListActions} from "../screens/project-list/protect-list.slice";

export const ProjectPopover = () => {
    const dispatch = useDispatch();
    const {data:projects, isLoading} = useProjects()
    const pinnedProjects = projects?.filter(project => project.pin)

    const content = <div>
        <Typography.Text type={"secondary"}>收藏项目</Typography.Text>
        <List>
            {
                pinnedProjects?.map(project => <List.Item>
                    <List.Item.Meta title = {project.name}/>
                </List.Item>)
            }
        </List>
        <Divider/>
        <ButtonNoPadding onClick={() => dispatch(projectListActions.openProjectModal())} type={"link"}>创建项目</ButtonNoPadding>
    </div>
    return(
    <Popover placement={"bottom"} content={content}>
        <span>项目</span>
    </Popover>
    )
}

const ContentContainer = styled.div`
  min-width: 30rem;
`;