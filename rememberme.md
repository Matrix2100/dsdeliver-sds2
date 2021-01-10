Application.properties:
  Seu app Netlify deve estar apontando para a API que você implantou no Heroku. Se já estiver assim, tá tudo certo, e seu projeto no STS não tem mais relação com o Netlify, e você pode trabalhar nele no modo test ou outro modo à vontade, entendeu?
  Somente quando você quiser fazer alguma atualização no projeto do Heroku, aí sim você tem que programar no modo test, depois validar no modo dev, depois mudar para prod e fazer o novo commit e push. Este é o fluxo básico.
