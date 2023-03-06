import './ImageAuthor.css'

const ImageAuthor = ({imagemAuthor}) => {
  return (
    <figure className="figureContainer">
      <img src={imagemAuthor} alt="Chaves" />
      {/* <figcaption>Chaves</figcaption> */}
    </figure>
  )
}

export default ImageAuthor