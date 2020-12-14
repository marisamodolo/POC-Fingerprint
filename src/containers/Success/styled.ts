import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: #A9B0B1;
`

export const Main = styled.div`
  padding: 24px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled.button`
  width: 150px;
  height: 50px;
  padding: 20px 0;
  margin-top: 20px;
  border-radius: 8px;
  border: 0;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  ${props => props.disabled &&`
     background-color: grey;
  `}
`
