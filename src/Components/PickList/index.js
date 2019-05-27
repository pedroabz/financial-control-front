import React from 'react'
import styled from 'styled-components'

export default function PickList({onChange, options, value}){  
    const StyledSelect = styled.select`
        border-radius: 10px
    `


    return(
        <StyledSelect onChange={onChange} value = {value}>
        {
            options && options.map((i, index) => (
            <option value={i.value} key ={index}>
                    {i.label}
            </option>))
        }
        </StyledSelect>
    )
}



