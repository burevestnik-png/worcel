import React, { FC } from 'react'
import { Header, Link, MainLayout } from '@components'
import { ROOT } from '@utils'
import { CellGrid } from '@Workspace'

const WorkSpace: FC = () => {
    return (
        <MainLayout title={'Workspace'}>
            <Header />
            <Link href={ROOT} text={'Home'} />
            <CellGrid />
        </MainLayout>
    )
}

export default WorkSpace
