import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 0.5rem 0;
  }
`
export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   
  
  column-gap: 3rem;
  row-gap: 4rem;

  @media screen and (max-width: 400px) {  
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`


export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin-top: 3rem;

  img {
    max-width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
       
  @media screen and (max-width: 450px) {  
    max-width: 150px;
  }

  }
  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
    
  }
  a {
    transition: all 0.3s;
  }
  a:hover {
    transform: scale(1.1);
  }

`
