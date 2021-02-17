import styled from 'styled-components'
import { FC } from 'react'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    margin: 0 auto;

    height: calc(100vh - 5rem);
`

const Container: FC = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>
}

export { Container }
