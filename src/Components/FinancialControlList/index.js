import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ExpensesTable from '../ExpensesTable'
import PickList from '../PickList'
import {Container, SearchContainer} from './styles'


export default function FinancialControlList () 
{  
    const [expenseList, setExpenseList] = useState([]);
    const [filteredExpenseList, setFilteredExpenseList] = useState([]);
    const [searchText, setSearchState] = useState("")
    const [searchKind, setSearchKind] = useState("Description")

    useEffect(() =>{
        getExpenses()
    }, [])

    useEffect(() => {
        if(expenseList.length)
        {
            searchText ?             
                ( 
                setFilteredExpenseList(expenseList.filter(i => i.description.includes(searchText)).length ? 
                    expenseList.filter(i => i.description.includes(searchText)) :
                    []
                )  
                )
                :
                setFilteredExpenseList(expenseList)
        }
    }, [searchText, expenseList])
    const getExpenses = ()=> {
        axios.get('http://localhost:3500/expenses')
            .then((response) => {                
                setExpenseList(response.data)                
            })
    }


    const handleSearch = (value) => {
        setSearchState(value)        
    }

    const options = [{
        value:"Description",
        label:"Description"
    },
    {
        value:"Value",
        label:"Value"
    }
    ]

    return( 
        <Container>
            <SearchContainer>               
                <PickList
                    onChange = {(e) => setSearchKind(e.target.value)}
                    options = {options}
                />
                <input placeholder="Search" onChange={(e) => handleSearch(e.target.value)} value={searchText}></input>
            </SearchContainer>            
            <ExpensesTable expenseList={filteredExpenseList}/>
        </Container>
    )
    
}
    