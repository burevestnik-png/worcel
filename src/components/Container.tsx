import styled from 'styled-components'
import { FC } from 'react'
import { HEADER_HEIGHT } from './Header'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    margin: 0 auto;

    height: calc(100vh - ${HEADER_HEIGHT});
`

const Container: FC = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>
}

export { Container }
