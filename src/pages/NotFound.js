import '../assets/styles/NotFound.css';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

function NotFound() {
  const [document_title, setDocumentTitle] = useDocumentTitle('Search');

  return (
    <div id="message">
      <h1>Error: 404</h1>
      <h2>Page Not Found</h2>
      <p>
        The specified path was not found on this website. Please check the URL
        for mistakes and try again.
      </p>
    </div>
  );
}

export default NotFound;
