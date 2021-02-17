import {
    Container,
    GithubLink,
    Header,
    Link,
    MainLayout,
    SizedBox,
} from '@components'
import { WORKSPACE } from '@utils'
import { Description } from '@Home'

export default function Home() {
    return (
        <MainLayout title={'Main'}>
            <Header />
            <Container>
                <SizedBox height="1rem" />
                <Description />
                <SizedBox height="1.4rem" />
                <Link
                    href={WORKSPACE}
                    text={'Go to workspace'}
                    isExternal={false}
                />
                <GithubLink />
            </Container>
        </MainLayout>
    )
}
