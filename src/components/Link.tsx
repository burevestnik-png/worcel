import NextLink from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'
import { BORDER_LINE } from '../styleUtils'

type StyledNextLinkProps = {
    readonly isTransparent?: boolean
}

const StyledNextLink = styled.div<StyledNextLinkProps>`
    padding: 0.2rem;
    display: inline;

    &:hover {
        background-color: ${(props) =>
            props.isTransparent ? 'transparent' : BORDER_LINE};
        border-radius: 3px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

type LinkProps = {
    readonly text?: string
    readonly href: string
    readonly isExternal?: boolean
}

const Link: FC<LinkProps> = ({ href, text, children, isExternal = true }) => (
    <StyledNextLink isTransparent={!!children}>
        {isExternal ? (
            <a href={href} target="_blank" rel="noreferrer noopener">
                {text ? text : children}
            </a>
        ) : (
            <NextLink href={href}>
                <a>{text ? text : children}</a>
            </NextLink>
        )}
    </StyledNextLink>
)

export { Link }
