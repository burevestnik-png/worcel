import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from '@components'

const StyledDescription = styled.div`
    text-align: center;

    line-height: 1.3rem;
    font-style: italic;
`

const Description: FC = () => {
    return (
        <StyledDescription>
            This is quite simple approach to make the clone of Excel and Google
            Documents. The purpose of this project is the interest of developing
            such tool and testing SSR in{' '}
            <Link text="Next.js" href="https://nextjs.org/" /> & new state
            library for React -{' '}
            <Link text="Recoil" href="https://recoiljs.org/" />.
        </StyledDescription>
    )
}

export default Description
