import Address from './Address';

const UserProfile = ({ name, email, address }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <Address {...address} />
    </div>
  );
};

export default UserProfile;
