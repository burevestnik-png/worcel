import React, { FC } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Link } from './Link'

const imageSource = '/github-logo.png'

const StyledLogo = styled.div`
    margin: auto 0 1rem;
`

const GithubLink: FC = () => {
    return (
        <StyledLogo>
            <Link href={'https://github.com/burevestnik-png'}>
                <Image
                    src={imageSource}
                    alt={'Github logo'}
                    height={64}
                    width={64}
                />
            </Link>
        </StyledLogo>
    )
}

export default GithubLink
