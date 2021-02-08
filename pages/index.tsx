import { Container, Header, Link, MainLayout, SizedBox } from '@components'
import { WORKSPACE } from '@utils'

export default function Home() {
    return (
        <MainLayout title={'Main'}>
            <Header />
            <SizedBox />
            <Container>
                <Link href={WORKSPACE} text={'To workspace'} />
            </Container>
        </MainLayout>
    )
}
