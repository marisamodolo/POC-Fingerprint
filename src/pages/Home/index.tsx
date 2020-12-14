import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HomeContainer } from '../../containers'

// vamos simular que aqui valida um possível login, para testar nos fluxos se o valor do secret do fingerprint está vindo corretamente
const hashLogin = "YWJjZDEyMzQ="

const Home = () => {
  const [hasBiometricActive, setHasBiometricActive] = useState(false)
  const history = useHistory()
  // localStorage.removeItem('biometric_secret')

  useEffect(() => {
    const isBiometricActive = localStorage.getItem('biometric_secret')
    if(isBiometricActive) {
      setHasBiometricActive(true)
    }
  }, [])

  function onSubmit (email: string, password: string) {
    const hash = window.btoa(email + password)

    if(hash && hash === hashLogin) {
      localStorage.setItem('biometric_secret', hash)
      history.push('/success')
    }
  }

  function onFingerprintSubmit (value: string) {
    if(value === hashLogin) {
      history.push('/success')
    }
  }

  return (
    <HomeContainer
      hasBiometricActive={hasBiometricActive}
      onSubmit={onSubmit}
      onFingerprintSubmit={onFingerprintSubmit}
    />
  )
}

export default Home
