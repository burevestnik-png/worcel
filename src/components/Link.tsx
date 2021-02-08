import NextLink from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

const StyledNextLink = styled.div`
    a {
        color: inherit;
        text-decoration: none;
    }
`

type LinkProps = {
    readonly text: string
    readonly href: string
}

const Link: FC<LinkProps> = ({ href, text }) => (
    <StyledNextLink>
        <NextLink href={href}>
            <a>{text}</a>
        </NextLink>
    </StyledNextLink>
)

export { Link }
