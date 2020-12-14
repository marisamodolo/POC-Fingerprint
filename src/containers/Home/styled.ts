import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: #A9B0B1;
`

export const Main = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  padding: 40px;
  border-radius: 8px;
  border: 0;
  background-color: #FFFFFF;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.p`
  text-align: left;
  font-size: 24px;
  margin-bottom: 16px;
`

export const Subtitle = styled.p`
  text-align: left;
  font-size: 16px;
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

export const Text = styled.p`
  // text-align: center;
  // font-size: 2rem;
  // margin: 2rem;
`

export const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  border: solid 1px black;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
`