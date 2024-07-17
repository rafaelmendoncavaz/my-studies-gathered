// eslint-disable-next-line react/prop-types
export function FavoriteNews({ title, author, category, content }) {

  return(
    <li>
      <h2>
        Título: { title }
      </h2>
      <p>
        Autor(es): { author }
      </p>
      <p>
        Categoria: { category }
      </p>
      <p>
        { content }
      </p>
    </li>
  )
}