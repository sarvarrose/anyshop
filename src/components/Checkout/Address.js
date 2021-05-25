function Address({ address }) {
  return (
    <div class="select_address">
      <div class="user_details">
        <span class="user_name">{address.name}</span>
        <span class="user_landmark">{address.address}</span>
      </div>
      <div class="select_btn_add">
        {address.default ? (
          <button class="select_btn selected_btn">Selected</button>
        ) : (
          <button class="select_btn">Select</button>
        )}
      </div>
    </div>
  );
}

export default Address;
