import NextLink from 'next/link'
import { FC } from 'react'

type LinkProps = {
    readonly text: string,
    readonly href: string
}

const Link: FC<LinkProps> = ({ href, text }) => (
    <NextLink href={href}>
        <a>{text}</a>
    </NextLink>
)

export {
    Link,
}