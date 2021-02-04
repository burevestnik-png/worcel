import React, { FC } from 'react'
import { Link, MainLayout } from '@components'
import { ROOT } from '@utils'
import { CellGrid } from '@Workspace'

const WorkSpace: FC = () => {
    return (
        <MainLayout title={'Workspace'}>
            <p>
                <Link href={ROOT} text={'Home'} />
            </p>
            <CellGrid />
        </MainLayout>
    )
}

export default WorkSpace
