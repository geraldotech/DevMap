# Route Groups

- **layout** especifico para cada route
- não aninhar layouts
- renomear `page.js` principal de app para `page2.js` ou apagar
- Uma das pastas colocar em entre `app/(marketing)`, desse modo o nextjs vai entender que é para renderizar aquela rota como principal: `localhost:3000`
- Após reiniciar o server renomear marketing e shop
- Deletando o root `layout.js`

REF - [https://nextjs.org/docs/app/building-your-application/routing/route-groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

#### Tratamento de erro

- `/tratamentoErros` - exemplificado o tratamento de erro em `/tratamentoErros/page.js` com `/tratamentoErros/error.js`
  -O tratamento de erros no `/tratamentoErros/layout.js` exemplificado em `/app/error.js`
