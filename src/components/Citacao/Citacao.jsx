import { useEffect, useState } from "react"
import ImageAuthor from "../ImageAuthor/ImageAuthor";

import './Citacao.css'

const Citacao = () => {

  const [quotesDados, setQuotesDados] = useState([{}])
  const [citacaoAleatoria, setCitacaoAleatoria] = useState({})

  const pegarCitacoes = async () => {
    try {
      const response = await fetch("../../../json/quotes.json");
      const dados = await response.json()
      setQuotesDados(dados.quotes)
      console.log('requisição:', dados.quotes)
    } catch (error) {
      console.error(error);
    }
  }

  const citacoesAleatoreas = quotesDados[Math.floor(Math.random() * quotesDados.length)]
  const gerarCitacaoAleatoria = () => {
    return setCitacaoAleatoria(citacoesAleatoreas)
  }


  useEffect(() => {
    pegarCitacoes()
  }, []);

  console.log(citacaoAleatoria.quote == undefined)

  return (
    <section id='quote-box'>
        <div className='qoute'>
          <ImageAuthor />
          <div className="quote-content">
            <h1 id='author'>{citacaoAleatoria.quote == undefined ? citacoesAleatoreas.author : citacaoAleatoria.author}</h1>
            <p id='text'>{citacaoAleatoria.quote == undefined ? citacoesAleatoreas.quote : citacaoAleatoria.quote}</p>
            <button id="new-quote" onClick={gerarCitacaoAleatoria}>Nova citação</button>
          </div>
        </div>
    </section>

  )
}

export default Citacao