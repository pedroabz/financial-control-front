import styled from 'styled-components'

    const ColumnHeader = styled.th`
        text-align: center;
        padding: 8px;   
        font-style: bold
        background-color: #ccf2ff
    `
    
    const ColumnBody = styled.td`       
        text-align: left;
        padding: 8px;
        font-size:25px 
    `
    const OddRow = styled.tr`               
        background-color: #ECF3F2    
    `

    const EvenRow  = styled.tr`
         background-color: #dddddd;
    `   
    
    const StyledTable = styled.table`
        font-family: arial, sans-serif;
        width: 100%;
    `
    const ColumnBodyCentered = styled.td`       
        text-align: center;
        padding: 8px;
        font-size:25px 
    `
export {ColumnHeader,ColumnBody,EvenRow, StyledTable, OddRow, ColumnBodyCentered}

