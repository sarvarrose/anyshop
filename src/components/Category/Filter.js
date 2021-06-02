function Filter({ filters }) {
  return (
    <div className="filter_sec">
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
