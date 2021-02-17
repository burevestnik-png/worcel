import styled from 'styled-components'
import { FC } from 'react'

const StyledHeader = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 5rem;

    span {
        font-size: 1.5rem;
        font-style: italic;
        font-weight: bold;
    }
`

const Header: FC = () => {
    return (
        <StyledHeader>
            <span>Worcel</span>
        </StyledHeader>
    )
}

export { Header }
