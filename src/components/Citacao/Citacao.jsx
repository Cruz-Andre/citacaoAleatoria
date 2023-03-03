import Footer from "../Footer/Footer"
import quotes from "../../../json/quotes.json"
import axios from "axios"
import { useEffect, useState } from "react"

const Citacao = () => {

  const [quotesDados, setQuotesDados] = useState([])

  // useEffect(() => {
  //   fetch("../../../json/quotes.json")
  //     .then(resposta => resposta.json())
  //     .then(dados => {
  //       setQuotesDados(dados.quotes)
  //     })

  // }, [])

  useEffect(() => {
    const pegarCitacoes = async () => {
      try {
        const response = await axios.get("../../../json/quotes.json");
        setQuotesDados(response.data.quotes);
      } catch (error) {
        console.error(error);
      }
    }
    pegarCitacoes()
  }, []);
  


  console.log(quotesDados.map(s => s.quote))


return (
  <article id='quote-box'>
    <div className='qoute-text'>
      <span id='text'>OI</span>
    </div>

    <div className='qoute-author'>
      <span id='author'>EU</span>
    </div>
    <Footer />
  </article>
)
}

export default Citacao