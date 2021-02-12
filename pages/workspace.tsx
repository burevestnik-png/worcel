import React, { FC } from 'react'
import { Container, Header, Link, MainLayout, SizedBox } from '@components'
import { ROOT } from '@utils'
import { CellGrid } from '@Workspace'

const WorkSpace: FC = () => {
    return (
        <MainLayout title={'Workspace'}>
            <Header />
            <Container>
                <Link href={ROOT} text={'Home'} />
                <SizedBox height={'.5rem'} />
                <CellGrid />
            </Container>
        </MainLayout>
    )
}

export default WorkSpace
