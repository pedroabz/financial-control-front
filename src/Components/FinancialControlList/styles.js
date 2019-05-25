import styled from 'styled-components'

    const Container = styled.div`
    padding: 0 10px 40px;
    @media (min-width: 1020px) {
    max-width: 1000px;
    margin: 0 auto;    
    }
    `;

    const SearchContainer = styled.div`
        display : inline-flex
        margin: auto
    `
export {Container, SearchContainer}

