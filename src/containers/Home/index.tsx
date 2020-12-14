import React, { useEffect, useState } from 'react'
import { FingerprintAIO } from '@ionic-native/fingerprint-aio'
import { Plugins } from '@capacitor/core';
const { Modals } = Plugins;
import { Header } from '../../components'

import {
  Button,
  Container,
  Content,
  Input,
  Main,
  Subtitle,
  Title
} from './styled'

type HomeProps = {
  hasBiometricActive: boolean,
  onSubmit: (email: string, password: string) => void,
  onFingerprintSubmit: (value: string) => void,
}

async function showAlert(message: string) {
  await Modals.alert({
    title: 'Alert!',
    message,
  });
}

function Home ({
  hasBiometricActive,
  onSubmit,
  onFingerprintSubmit,
}: HomeProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    async function checkBiometricSensor() {
      const isBiometricSensorAvailable = await FingerprintAIO.isAvailable()
      if(isBiometricSensorAvailable && hasBiometricActive) {
        showFingerPrint()
      }
    }

    checkBiometricSensor()
  }, [hasBiometricActive])

  async function showFingerPrint () {
    try {
      const secret = await FingerprintAIO.loadBiometricSecret({
        title: 'Titulo legal',
        subtitle: 'Subtitulo legal tbm',
        description: 'Biometria funciona!',
        fallbackButtonTitle: "Cancelar",
        cancelButtonTitle: "Cancelar",
      })

      if(secret) {
        showAlert(secret)
        onFingerprintSubmit(secret)
      }

    } catch (e) {
      // BIOMETRIC_UNKNOWN_ERROR = -100;
      // BIOMETRIC_UNAVAILABLE = -101;
      // BIOMETRIC_AUTHENTICATION_FAILED = -102;
      // BIOMETRIC_SDK_NOT_SUPPORTED = -103;
      // BIOMETRIC_HARDWARE_NOT_SUPPORTED = -104;
      // BIOMETRIC_PERMISSION_NOT_GRANTED = -105;
      // BIOMETRIC_NOT_ENROLLED = -106;
      // BIOMETRIC_INTERNAL_PLUGIN_ERROR = -107;
      // BIOMETRIC_DISMISSED = -108;
      // BIOMETRIC_PIN_OR_PATTERN_DISMISSED = -109;
      // BIOMETRIC_SCREEN_GUARD_UNSECURED = -110;
      // BIOMETRIC_LOCKED_OUT = -111;
      // BIOMETRIC_LOCKED_OUT_PERMANENT = -112;
      // BIOMETRIC_SECRET_NOT_FOUND = -113;
      showAlert(e)
    }
  }

  const buttonDisabled = email === "" || password === ""

  return (
    <Container>
      <Header>Auth</Header>
      <Main>
        <Content>
          <Title>
            APP LEGAL
          </Title>
          <div>
            <Subtitle>
              Email
            </Subtitle>
            <Input onChange={e => setEmail(e.target.value.toLowerCase())}/>
          </div>
          <div>
            <Subtitle>
              Senha
            </Subtitle>
            <Input type="password" onChange={e => setPassword(e.target.value.toLowerCase())}/>
          </div>
          <Button
            onClick={() => onSubmit(email, password)}
            disabled={buttonDisabled}
          >
              Entrar
          </Button>
        </Content>
      </Main>
    </Container>
  )
}

export default Home
