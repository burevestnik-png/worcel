import React, {FC} from "react";
import {Link, MainLayout} from "@components";
import {ROOT} from "@utils/routes";

const WorkSpace: FC = () => {
    return (
        <MainLayout title={"Workspace"}>
            <Link href={ROOT} text={"Home"}/>
        </MainLayout>
    )
}

export default WorkSpace