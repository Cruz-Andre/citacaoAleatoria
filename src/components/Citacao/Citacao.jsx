import { useEffect, useState } from "react"
import ImageAuthor from "../ImageAuthor/ImageAuthor";

import './Citacao.css'

const Citacao = () => {

  const [quotesDados, setQuotesDados] = useState([{}])
  const [citacaoAleatoria, setCitacaoAleatoria] = useState({})

  const pegarCitacoes = async () => {
    try {
      const response = await fetch("./json/quotes.json");
      const dados = await response.json()
      setQuotesDados(dados.quotes)
      console.log('requisição:', dados.quotes)
    } catch (error) {
      console.error(error);
    }
  }

  const gerarCitacaoAleatoria = (dados) => {
    const citacao = dados[Math.floor(Math.random() * quotesDados.length)]
    return setCitacaoAleatoria(citacao)
  }

  useEffect(() => {
    pegarCitacoes()
  }, []);

  useEffect(() => {
    gerarCitacaoAleatoria(quotesDados)
  }, [quotesDados])

  //console.log(citacaoAleatoria.quote == undefined)
  //console.log(citacaoAleatoria)

  return (
    <section id='quote-box'>
        <div className='qoute'>
          <ImageAuthor />
          <div className="quote-content">
            <h1 id='author'>{citacaoAleatoria.author}</h1>
            <p id='text'>{citacaoAleatoria.quote}</p>
            <button id="new-quote" onClick={() => gerarCitacaoAleatoria(quotesDados)}>Nova citação</button>
          </div>
        </div>
    </section>
  )
}

export default Citacao