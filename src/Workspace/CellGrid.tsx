import { FC } from 'react'
import styled from 'styled-components'
import { DomCell } from './components'
import { useRecoilValue } from 'recoil'
import { cellState } from './state'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const CellGrid: FC = () => {
    const cells = useRecoilValue(cellState)

    return (
        <Grid>
            {cells.map((cell) => (
                <DomCell key={cell.id} cell={cell} />
            ))}
        </Grid>
    )
}

export default CellGrid
