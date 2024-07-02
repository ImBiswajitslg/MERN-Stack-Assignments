const Address = ({ street, city, state, zip }) => {
  return (
    <div>
      <p>Street: {street}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>ZIP: {zip}</p>
    </div>
  );
};

export default Address;
