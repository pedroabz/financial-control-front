import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ExpensesTable from '../ExpensesTable'
import MonthPickList from '../MonthPickList'
import {Container, SearchContainer} from './styles'


export default function FinancialControlList () 
{  
    const [expenseList, setExpenseList] = useState([]);
    const [filteredExpenseList, setFilteredExpenseList] = useState([]);
    const [descriptionSearch, setDescriptionSearch] = useState("")
    const [monthSearch, setMonthSearch] = useState("")

    useEffect(() =>{
        getExpenses()
    }, [])

    useEffect(() => {
        if(expenseList.length) handleFilter()  
    }, [descriptionSearch, expenseList, monthSearch])

    const handleFilter = () => {
        let filtered = expenseList
            .filter(i => 
                (descriptionSearch ? i.description.toUpperCase().includes(descriptionSearch.toUpperCase()) : true ) &&
                (monthSearch ? i.month === monthSearch : true)
            )
        setFilteredExpenseList(
            filtered.length ? 
            filtered:
            []
        )   
    }

    const getExpenses = ()=> {
        axios.get('http://localhost:3500/expenses')
            .then((response) => {                
                setExpenseList(response.data)                
            })
    }


    const handleSearchByDescription = (value) => {
        setDescriptionSearch(value)        
    }    

    const handleSearchByMonth = (value) => {
        setMonthSearch(value)        
    }  

    return( 
        <Container>
            <SearchContainer>  
                <div style = {{marginRight: '10px'}}>                
                    <input 
                        type="search"
                        placeholder="Search by description" 
                        onChange={(e) => handleSearchByDescription(e.target.value)} 
                        value={descriptionSearch}>                    
                    </input>
                </div>                             
                <MonthPickList onChange={(e) => handleSearchByMonth(e.target.value)} value={monthSearch}/>
            </SearchContainer>            
            <ExpensesTable expenseList={filteredExpenseList}/>
        </Container>
    ) 
}
    