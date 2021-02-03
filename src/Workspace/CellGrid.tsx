import { FC } from 'react'
import styled from 'styled-components'

const CellGrid: FC = () => {
    return <>{}</>
}

export default styled(CellGrid)`
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    input {
        width: 100%;
        border-radius: 0;
        border: 1px solid black;
        border-bottom: none;
        border-right: none;

        &:focus {
            outline: none;
        }
    }
`
