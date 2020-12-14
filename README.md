# POC Fingerprint Capacitor

A biblioteca utilizada para a leitura biometrica é [@ionic-native/fingerprint-aio](https://ionicframework.com/docs/native/fingerprint-aio).

Essa POC tem o objetivo de testar um comportamento nativo em um app com WebView utilizando Capacitor.
A biometria foi testada em Android e iOs com comportamento similar ao esperado, exceto por em iOs não mostrar o modal de confirmação biométrica.

- Substituir no arquivo `capacitor.config.json` na linha 14 por
`"url": "<seu ip>:3000"`
- rodar `yarn`, `yarn build`, `yarn sync` e finalmente `yarn dev` para subir o servidor.
- `yarn android`/`yarn ios` para abrir o AndroidStudio/XCode e emular o app a partir de lá.

### Android:
- Em celulares com sensor biométrico e biometria cadastrada no aparelho.
  - Entrar com "email" (abcd) e "senha"(1234)
  - Clicar em `voltar`
    - Redireciona para a `Home` para para acessar com email e senha.
  - Clicar em `entrar com digital da próxima vez`
    - Clicar em `voltar`
    - Deve aparecer um Alert com o segredo.
    - Deve ser redirecionado pra Home e será mostrado o modal de confirmação de biometria para acessar novamente sem a necessidade de informar email/senha.
- Em celulares sem sensor biométrico ou sem biometria cadastrada no aparelho:
  - O mesmo fluxo de cima, porém não será mostrado o modal exigindo confirmação biométrica, mas também não impedirá o usuário de logar com email/senha.

### iOs:
- Em celulares com sensor biométrico e biometria cadastrada no aparelho.
  - Entrar com "email" (abcd) e "senha"(1234)
  - Não é necessário clicar em `entrar com digital da próxima vez` por causa que o segredo está mockado na page de sucesso e o iOs salva o segredo sem pedir confirmação biométrica.
  - Clicar em `voltar`
  - Deve mostrar o Alert com o segredo e ser redirecionado rapidamente para a tela de `Home` e em seguida de `Sucesso`, sem exigir confirmação biométrica.
- Em celulares sem sensor biométrico ou sem biometria cadastrada no aparelho:
  - O mesmo fluxo de cima, porém não será mostrado o modal exigindo confirmação biométrica, mas também não impedirá o usuário de logar com email/senha.

Obs.: Para resetar a permissão de biometria no app, apenas descomente e comente novamente a linha 10 em `src/pages/Home/index.js`:

` // localStorage.removeItem('biometric_secret')`

As funções utilizadas foram:

- `FingerprintAIO.isAvailable()`
  Checa se a está disponível a validação da biometria. Retorna `finger` apenas quando existe biometria cadastrada no aparelho.
  Quando o aparelho não possui o sensor biométrico ou quando possui sensor mas não existe biometria cadastrada, não é retornado nada.

- `FingerprintAIO.registerBiometricSecret()`
  mostra o modal de confirmação biométrica para guardar um `segredo`, pode por exemplo ser um valor de login que é criptografado.

- `FingerprintAIO.loadBiometricSecret()`
  valida a biometria e retorna o segredo.

Vale reforçar que `register` e `load` não apareceram como modal em aparelhos iOs, mas salvou e carregou os segredos. Único que fez aparecer um modal foi o `FingerprintAIO.show()`, mas essa função não guarda e nem carrega segredo, servindo apenas de confirmação biométrica pra `true` ou `false`.
