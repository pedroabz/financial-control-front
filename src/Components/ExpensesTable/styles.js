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
        background-color: #ffffff     
    `

    const EvenRow  = styled.tr`
         background-color: #dddddd;
    `   
    
    const StyledTable = styled.table`
        font-family: arial, sans-serif;
        width: 100%;
        border:solid black .5px;
        border-radius: 25px;
        padding: 7px 7px;
    `
    const ColumnBodyCentered = styled.td`       
        text-align: center;
        padding: 8px;
        font-size:25px 
    `
export {ColumnHeader,ColumnBody,EvenRow, StyledTable, OddRow, ColumnBodyCentered}

