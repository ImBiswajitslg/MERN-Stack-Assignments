import UserProfile from './Components/UserProfile';

const App = () => {
  const user = {
    name: 'Biswajit Sarkar',
    email: 'Biswajit@example.com',
    address: {
      street: '2 no road',
      city: 'Siliguri',
      state: 'WB',
      pin: '123456'
    }
  };

  return (
    <div className="App">
      <UserProfile
        name={user.name}
        email={user.email}
        address={user.address}
      />
    </div>
  );
};

export default App;
