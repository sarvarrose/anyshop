import '../assets/styles/search.css';

import { Link } from 'react-router-dom';
import {
  InstantSearch,
  Hits,
  Highlight,
  SearchBox,
  RefinementList,
  Pagination,
  RangeInput,
  ClearRefinements,
} from 'react-instantsearch-dom';

import searchClient from '../lib/searchClient';

function Search() {
  const [document_title, setDocumentTitle] = useDocumentTitle('Product');

  function Hit({ hit }) {
    return (
      <div className="ct_items" key={hit.id}>
        <Link to={'/product/' + hit.id}>
          <div className="ct_img">
            <img src={hit.image} alt="items" className="img-fluid" />
          </div>
        </Link>
        <Link to={'/product/' + hit.id}>
          <div className="product_content_all">
            <Highlight attribute="name" hit={hit} />
          </div>
        </Link>
        <div className="price_sec">
          <Link to={'/category/' + hit.category.toLowerCase()}>
            <Highlight attribute="category" hit={hit} />
          </Link>
          <span className="fixed_price">{hit.formatted_price}</span>
        </div>
      </div>
    );
  }

  return (
    <InstantSearch searchClient={searchClient} indexName="anyshop">
      <div className="search-panel">
        <div className="search-panel__filters">
          <ClearRefinements />
          Category:
          <RefinementList attribute="category" />
          Price Range:
          <RangeInput attribute="price" />
        </div>

        <div className="search-panel__results">
          <SearchBox
            className="searchbox"
            translations={{
              placeholder: 'Search',
            }}
          />
          <div className="categories">
            <div className="categories_item">
              <div className="ct_body">
                <Hits hitComponent={Hit} />
              </div>
            </div>
          </div>

          <div className="pagination">
            <Pagination />
          </div>
        </div>
      </div>
    </InstantSearch>
  );
}

export default Search;
