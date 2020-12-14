import React from 'react'
import { useHistory } from 'react-router-dom'
import { FingerprintAIO } from '@ionic-native/fingerprint-aio'
import { Container, Main, Button } from './styled'

const Success = () => {
  const history = useHistory()

  const registerSecret = () => {
    FingerprintAIO.registerBiometricSecret({
    description: "Some biometric description",
    secret: "YWJjZDEyMzQ=",
    disableBackup: true,
    })
  }

  return (
    <Container>
      <Main>
        <Button onClick={registerSecret}>Entrar com Digital na próxima vez</Button>
        <Button onClick={() => history.push('/')}>Voltar</Button>
      </Main>
    </Container>
  )
}

export default Success
