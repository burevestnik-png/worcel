import React, { FC } from 'react'
import { Container, Header, Link, MainLayout, SizedBox } from '@components'
import { ROOT } from '@utils'
import { CellGrid } from '@Workspace'

const WorkSpace: FC = () => {
    return (
        <MainLayout title={'Workspace'}>
            <Header />
            <Container>
                <SizedBox height={'.5rem'} />
                <Link href={ROOT} text={'Go to home'} isExternal={false} />
                <SizedBox height={'.5rem'} />
                <CellGrid />
            </Container>
        </MainLayout>
    )
}

export default WorkSpace
