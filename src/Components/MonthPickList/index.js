import React from 'react'
import PickList from '../PickList'
import {months} from '../../Constants'

export default function MonthPickList({onChange, value}) {
    return (
        <PickList 
        options={months}
        onChange = {onChange}
        value = {value}
        />
        )
    }
    
