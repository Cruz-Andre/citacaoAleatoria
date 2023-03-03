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
      console.log('requisição')
    } catch (error) {
      console.error(error);
    }
  }
  
  const citacoesAleatoreas = quotesDados[Math.floor(Math.random() * quotesDados.length)]
  const gerarCitacaoAleatoria = () => {
    setCitacaoAleatoria(citacoesAleatoreas)
    return citacoesAleatoreas
  }


  useEffect(() => {
    pegarCitacoes()
  }, []);
  
  console.log(citacaoAleatoria.quote == undefined)

  return (
    <article id='quote-box'>
      <div className='qoute-text'>
        <span id='text'>{citacaoAleatoria.quote == undefined ? citacoesAleatoreas.quote : citacaoAleatoria.quote}</span>
      </div>

      <div className='qoute-author'>
        <span id='author'>{citacaoAleatoria.author == undefined ? citacoesAleatoreas.author : citacaoAleatoria.author}</span>
      </div>
      <button id="new-quote" onClick={gerarCitacaoAleatoria}>Nova citação</button>
      <ImageAuthor />
    </article>

  )
}

export default Citacao