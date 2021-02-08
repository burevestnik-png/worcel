import React, { FC } from 'react'
import { Link, MainLayout } from '@components'
import { ROOT } from '@utils'
import { CellGrid } from '@Workspace'

const WorkSpace: FC = () => {
    return (
        <MainLayout title={'Workspace'}>
            <Link href={ROOT} text={'Home'} />
            <CellGrid />
        </MainLayout>
    )
}

export default WorkSpace
