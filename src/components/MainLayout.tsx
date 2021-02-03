import { FC, ReactNode } from 'react'
import Head from 'next/head'

type MainLayoutProps = {
    readonly title: string
}

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <main>{children}</main>
        </>
    )
}

export { MainLayout }
