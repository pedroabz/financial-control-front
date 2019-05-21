import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'


export default function FinancialControlList () 
{  
    const [expenseList, setExpenseList] = useState([]);

    const DivContainer = styled.div`
        padding: 0px 20%
    `
    const TableColumn = styled.th`
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    `

    const TableColumnRow = styled.td`
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        font-size:25px
    `
    const TableEvenRow = styled.tr`
         background-color: #dddddd;
    `   

    const StyledTable = styled.table`
        font-family: arial, sans-serif;
        border: 1px solid black;
        width: 100%;
    `
    useEffect(() =>{
        getExpenses()
    }, [])
    const getExpenses = ()=> {
        axios.get('http://localhost:3500/expenses')
            .then((response) => {                
                setExpenseList(response.data)
            })
    }
    return( 
        <DivContainer>
            <h1>Expenses </h1>
            <StyledTable>
                <thead>
                    <tr>
                        <TableColumn>Description</TableColumn>
                        <TableColumn>Value</TableColumn> 
                        <TableColumn>Month</TableColumn>
                    </tr>
                </thead>
                <tbody>               
                    {
                        expenseList.map((val, index) => 
                            index % 2 == 0 ?
                               (
                                <tr key={index}>
                                    <TableColumnRow>{val.description}</TableColumnRow>  
                                    <TableColumnRow>{val.value}</TableColumnRow>  
                                    <TableColumnRow>{val.month}</TableColumnRow>
                                </tr>
                               ):
                               (
                                <TableEvenRow key={index}>
                                    <TableColumnRow>{val.description}</TableColumnRow>  
                                    <TableColumnRow>{val.value}</TableColumnRow>  
                                    <TableColumnRow>{val.month}</TableColumnRow>
                                </TableEvenRow> 
                               )
                        )
                    }
                </tbody>
            </StyledTable>
        </DivContainer>
    )
    
}
    