import React from 'react'
import {ColumnHeader,ColumnBody,EvenRow, StyledTable, OddRow, ColumnBodyCentered} from './styles'

export default function ExpensesTable(props) {
    console.log(props.expenseList)
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
                            {props.expenseList.length > 0 &&
                            (<tfoot>
                                <tr style={{width:"100%",backgroundColor:"#ccf2ff", padding:"10px" }}>
                                    <th colSpan="3" style={{textAlign:"left", fontSize:"25px" }}>Total</th>
                                    <th colSpan="2" style={{textAlign:"center", fontSize:"25px"}}>
                                        {props.expenseList.map(i => i.value).reduce((total,current) => total + current)}
                                    </th>
                                </tr>
                            </tfoot>)
                            }
                        </StyledTable>
        </div>
    )
}