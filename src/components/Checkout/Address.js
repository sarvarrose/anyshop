function Address({ address }) {
  return (
    <div className="select_address">
      <div className="user_details">
        <span className="user_name">{address.name}</span>
        <span className="user_landmark">{address.address}</span>
      </div>
      <div className="select_btn_add">
        {address.default ? (
          <button className="select_btn selected_btn">Selected</button>
        ) : (
          <button className="select_btn">Select</button>
        )}
      </div>
    </div>
  );
}

export default Address;
