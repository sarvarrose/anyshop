import { useState, useEffect } from 'react';

function Filter({ filters, priceMax }) {
  const [range, setRange] = useState(0);

  useEffect(async () => {
    setRange(priceMax);
  }, [priceMax]);
  return (
    <div className="filter_sec">
      <label className="form-label">Price Range (0 - {range})</label>
      <input
        type="range"
        className="form-range"
        min="0"
        max={priceMax}
        step="10"
        value={range}
        onChange={(e) => setRange(e.target.value)}
      ></input>
      {Object.keys(filters).map((key) => {
        return (
          <div className="filter_item" key={key}>
            <span className="filter_title">{key}</span>
            <div className="form-check">
              {filters[key].map((option, index) => {
                return (
                  <div className="filers_i" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="filter_four"
                    />
                    <label className="form-check-label" htmlFor="filter_four">
                      {option}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
