# Validador de Senhas com JavaScript Vanilla e Expressões Regulares

Este é um projeto simples que implementa uma validação de senhas utilizando JavaScript Vanilla e expressões regulares (regex). Ele fornece uma função que verifica se uma senha atende aos critérios de validação especificados.

## Funcionalidades

- Verifica se a senha tem no mínimo 8 caracteres.
- Verifica se a senha contém pelo menos uma letra maiúscula.
- Verifica se a senha contém pelo menos uma letra minúscula.
- Verifica se a senha contém pelo menos um número.
- Verifica se a senha contém pelo menos um caractere especial, como !@#$%^&*.

## Como Usar

Basta incluir o arquivo `passwordValidation.js` em seu projeto e chamar a função `validatePassword` passando a senha como argumento. A função retornará `true` se a senha for válida e `false` caso contrário.

```javascript
const password = "MinhaSenha123!";
const isValid = validatePassword(password);
console.log(isValid); // true
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este projeto. Basta abrir um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).