import React from 'react'
import styled from 'styled-components'

export default function PickList({onChange, options}){  
    const StyledSelect = styled.select`
        padding:10px
        border-radius: 10px
    `


    return(
        <StyledSelect onChange={onChange}>
        {
            options && options.map((i, index) => (
            <option value={i.value} key ={index}>
                    {i.label}
            </option>))
        }
        </StyledSelect>
    )
}



