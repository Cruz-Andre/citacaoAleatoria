import { useEffect, useState } from "react"
import ImageAuthor from "../ImageAuthor/ImageAuthor";

import './Citacao.css'

const Citacao = () => {

  const [quotesDados, setQuotesDados] = useState([{}])
  const [citacaoAleatoria, setCitacaoAleatoria] = useState({})

  const pegarCitacoes = async () => {
    try {
      const response = await fetch("/json/quotes.json");
      const dados = await response.json()
      setQuotesDados(dados.quotes)
      console.log('requisição:', dados.quotes)
    } catch (error) {
      console.error(error);
    }
  }

  const gerarCitacaoAleatoria = (dados) => {
    const citacao = dados[Math.floor(Math.random() * quotesDados.length)]
    animacao()
    return setCitacaoAleatoria(citacao)
  }

  const animacao = () => {
    const fadeIn = [
      { opacity: 0 },
      { opacity: 1 },
    ];
    const quoteTiming = {
      duration: 2000,
      iterations: 1,
    };
    const quoteContent = document.querySelector(".quote");
    quoteContent.animate(fadeIn, quoteTiming);
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
      <div className='quote'>
        <ImageAuthor imagemAuthor={citacaoAleatoria.image} />
        <div className="quote-content">
          <h1 id='author'>{citacaoAleatoria.author}</h1>
          <p id='text'>{citacaoAleatoria.quote}</p>
        </div>
        <div className="quote-buttons">
          <button id="new-quote" className="new-quote" onClick={() => gerarCitacaoAleatoria(quotesDados)}>Nova citação</button>
          <a
            className="tweet-quote"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_blank"
            href={"https://twitter.com/intent/tweet?hashtags=Elchavodelocho&related=freecodecamp&text=" + encodeURIComponent('"' + citacaoAleatoria.quote + '" \n' + '-' + citacaoAleatoria.author + '\n')}
          >
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Citacao