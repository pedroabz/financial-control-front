import React from 'react'
import {ColumnHeader,ColumnBody,EvenRow, StyledTable, OddRow, ColumnBodyCentered} from './styles'

export default function ExpensesTable(props) {
    return(
        <div>            
            <h1> Expenses </h1>
                        <StyledTable>
                            <thead>
                                <tr>
                                    <ColumnHeader>Description</ColumnHeader>
                                    <ColumnHeader>Value</ColumnHeader> 
                                    <ColumnHeader>Month</ColumnHeader>
                                    <ColumnHeader>Installment</ColumnHeader>
                                    <ColumnHeader>Total Value</ColumnHeader>
                                </tr>
                            </thead>
                            <tbody>               
                                {
                                    props.expenseList.map((val, index) => 
                                        index % 2 === 0 ?
                                        (
                                            <OddRow key={index}>
                                                <ColumnBody>{val.description}</ColumnBody>  
                                                <ColumnBodyCentered>{val.value}</ColumnBodyCentered>  
                                                <ColumnBody>{val.month}</ColumnBody>
                                                <ColumnBodyCentered>{`${val.installment}/${val.numberOfInstallments}`}</ColumnBodyCentered>
                                                <ColumnBodyCentered>{`${val.totalValue}`}</ColumnBodyCentered>
                                            </OddRow>
                                        ):
                                        (
                                            <EvenRow key={index}>
                                                <ColumnBody>{val.description}</ColumnBody>  
                                                <ColumnBodyCentered>{val.value}</ColumnBodyCentered>  
                                                <ColumnBody>{val.month}</ColumnBody>
                                                <ColumnBodyCentered>{`${val.installment}/${val.numberOfInstallments}`}</ColumnBodyCentered>
                                                <ColumnBodyCentered>{`${val.totalValue}`}</ColumnBodyCentered>
                                            </EvenRow> 
                                        )
                                    )
                                }
                            </tbody>
                        </StyledTable>
        </div>
    )
}