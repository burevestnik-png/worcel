import styled from 'styled-components'

export interface SizedBoxProps {
    readonly height?: string
    readonly width?: string
    readonly transparent?: boolean
}

export const SizedBox = styled.div<SizedBoxProps>`
    height: ${(props) => props.height || '100%'};
    width: ${(props) => props.width || '100%'};
`
