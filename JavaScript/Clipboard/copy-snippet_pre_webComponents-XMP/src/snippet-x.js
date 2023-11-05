/* created by geraldox.com #gmapdev
November 2023
*/

class snipped extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.append(this.conteudo(), this.styles())
    this.copySnipped()
  }

  /* methods */
  styles() {
    const style = document.createElement('style')
    style.textContent = `
  
    .clipboard {
      background: #0e1425;
      position: relative;  
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    
    }
    section {
      background: rgb(68, 71, 77);
      font-family: sans-serif;
      margin-top: 20px;
      border-radius: 10px;      
    }
    button {
      color: white;
    }
    section p {
      margin: 0;
      padding: 5px 0;
      text-align: center;
    }
   xmp {
      overflow: auto;
      /*  white-space: nowrap; */
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    }

   :is(xmp, pre)[block] {
      white-space: break-spaces;     
      color: #2c70ff;
      margin: 0;
    }

    xmp{
      overflow: auto;
      color: hsl(204 100% 59%);
      padding-block: 10px;
      white-space: no-wrap;
      padding-left: 10px;
      margin: 0;
      line-height: 1.5;
    }
    button {
      outline: none;
      border: none;
      cursor: pointer;
      background: #41467b;
      font-size: 0.7em;
      padding: 8px 15px;
      border-radius: 10px;
      position: absolute;
      top: 5px;
      right: 5px;
    }
    `
    return style
  }
  conteudo() {
    /* HeaderColor */
    const HeaderColor = this.getAttributeNames()
    const AttrHeader = (this.style.color =
      HeaderColor[1]) /* setColor in index[1] */
    this.style.color = AttrHeader ? AttrHeader : '#CED9E5'
    /* Header Color */
    const template = document.createElement(`template`)
    const attr = this.getAttribute('name')
    template.innerHTML = `      
    <section>
    <p>${attr ? attr : 'Snippet'}</p>
    <div class="clipboard">
${this.innerHTML} 
    <button id="btncopy">Copy</button>      
    </div>
    </section>
    `
    return template.content
  }
  copySnipped() {
    /* pre custom colors starts */
    const ElementAttr = this.shadowRoot.querySelector('.clipboard xmp')
    const colorName = ElementAttr.getAttributeNames()

    /*  v1 index[1] because i[0] is name attr */
    /*   ElementAttr.style.color = colorName[1] ? colorName[1] : '' */
    /* pre custom colors  ends*/

    //➡️  when not have block att? so filter attr color [New method]filter attr name
    const FilterGetColor = colorName.filter((val) => val != 'block')
    console.log(FilterGetColor)
    ElementAttr.style.color = FilterGetColor ? FilterGetColor : null

    const button = this.shadowRoot.querySelector('#btncopy')
    button.onclick = function (e) {
      const codeAtual =
        e.currentTarget.parentElement.querySelector('xmp').textContent
      navigator.clipboard.writeText(codeAtual).then(() => {
        button.textContent = 'Copied!'
        /* return previous button text */
        setTimeout(() => {
          button.textContent = 'Copy'
        }, 2000)
      })
    }
  }
}

customElements.define('snippet-x', snipped)

/* by default 
put code in <pre> snippet goes here </pre>
pre get inline styles, 
for block lines set block attribute


*/
