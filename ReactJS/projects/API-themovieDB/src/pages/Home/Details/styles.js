import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2.5rem 0;  

  @media screen and (max-width: 650px) {  
      flex-direction: column;  
     
    .average + span {
    }
    .details {
      max-width: 100%;        
      }
     
  }

  h1 {
    margin: 0.5rem 0;
  }

  img {
    width: 300px;
    border-radius: 1rem;
    @media screen and (max-width: 650px) {  
      width: 200px;
  }
  }

  .details {
    display: flex;
    flex-direction: column;   
   
    max-width: 50%;
    
  @media screen and (max-width: 650px) {  
    max-width: 100%;   
  }

  button {
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
  }
  a {
    text-decoration: none;
    color: white;
  }

  button:hover {
    background-color: #5848c2;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  .release-date {
    opacity: 0.5;
  }
  .average {
    color: #6654da;
    margin-block: 10px;
  }
  .genres b {
    margin: 0 8px;
    background: #6654da;
    padding: .2rem;
    border-radius: 5%;
  }
  .genres{
    display: flex;
    margin-top: .8rem;
    flex-wrap: wrap;
    gap: .9rem;
  }

  

 

`
