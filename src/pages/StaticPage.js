import { useDocumentTitle } from '../hooks/useDocumentTitle';
function StaticPage({ name }) {
  const [document_title, setDocumentTitle] = useDocumentTitle(name);

  return (
    <div className="container">
      <div className="static">
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa porro
          quis est fuga animi ea officiis beatae nobis quisquam illo excepturi,
          at maiores doloremque eaque perferendis veniam debitis dolore
          reiciendis!
        </p>
        <p>
          Explicabo culpa possimus voluptatem sint sapiente consequatur, nobis
          distinctio reprehenderit soluta blanditiis aspernatur sed qui,
          adipisci, quo eveniet! Sed quo enim reprehenderit illum earum
          voluptatibus mollitia deleniti impedit aut laudantium.
        </p>
        <p>
          Qui magni at enim necessitatibus reprehenderit accusantium numquam
          dignissimos tempora, ratione, obcaecati repudiandae quas reiciendis
          blanditiis autem eius mollitia? Fuga totam incidunt consequatur eius
          nisi culpa, debitis harum accusamus enim! Explicabo culpa possimus
          voluptatem sint sapiente consequatur, nobis distinctio reprehenderit
          soluta blanditiis aspernatur sed qui, adipisci, quo eveniet! Sed quo
          enim reprehenderit illum earum voluptatibus mollitia deleniti impedit
          aut laudantium.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima
          reprehenderit est! Ut sed nulla, blanditiis, adipisci nisi cum nostrum
          itaque quam ad minus autem natus, illo harum repellat inventore?
        </p>
      </div>
    </div>
  );
}

export default StaticPage;
