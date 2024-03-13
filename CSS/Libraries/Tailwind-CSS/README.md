# Tailwind CSS

### mobile first

Tudo é múltiplo 4x
1 = 4px
12 = 48px

Quero 48px entao 48/4 = 12; adicionar: my-12

Quero padding 20px; adicionar: p-5

Dica parar o mouse sobre a class vai relevar o CSS original:

```css
text-4xl - fontsize // https://tailwindcss.com/docs/font-size

text-[4rem] - valor arbitrario - 4rem...

mx-auto - margin eixo x/y auto

max-w-6xl - mas so funciona se adicionar // 1152px

outline - help debug

w-full - width: 100%

space-y-6 - adicionar no parent cada filho margin-top de 24px [nem no CSS nativo tem isso]
h-px - altura de apenas 1px
h-[20px] - valor arbitrario ou seja que nao existir adicionar entre [valuepx]
bg-white-[tonalidade] - bg-slate-700
text-red-300 - text color
leading-6 - line height de 24px
space-y-3 - margin-bottom and margin-top: 12px - apply verticalmente space between elements inside a div
font-bold
hover:ring-2 = works like box-shadow
outline-none - remove o padrão do sistema
left-1/2 - left: 50%
text-center - centraliza o text
p-1.5 - 1.5 * 4 = 6px / pasmem
w-5 h-5 - width e height same value entao shorthand: size-5
md:px-0 - @media (min-width: 768px) {
  .md\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }
}
```

- Existem animations built-in, prontas https://tailwindcss.com/docs/animation
