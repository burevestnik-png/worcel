import styled from 'styled-components'
import { FC } from 'react'
import { BORDER_LINE } from '../styleUtils'

const HEADER_HEIGHT = '4rem'

const StyledHeader = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    height: ${HEADER_HEIGHT};

    border: 0.5px ${BORDER_LINE} solid;

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

export { Header, HEADER_HEIGHT }
