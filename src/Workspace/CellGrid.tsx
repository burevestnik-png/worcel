import { FC } from 'react'
import styled from 'styled-components'
import { Cell } from './components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const CellGrid: FC = () => {
    return (
        <Grid>
            {Array.from({ length: 20 }, (value, key) => {
                return <Cell key={key} />
            })}
        </Grid>
    )
}

export default CellGrid
