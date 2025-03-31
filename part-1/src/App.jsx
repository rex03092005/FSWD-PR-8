import ProfileCard from './ProfileCard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Profile Cards</h1>
      <div className="cards-container">
        <ProfileCard 
          name="Alice Johnson" 
          photo="https://randomuser.me/api/portraits/women/45.jpg" 
          bio="Frontend Developer with a love for design and coffee." 
        />
        <ProfileCard 
          name="John Doe" 
          photo="https://randomuser.me/api/portraits/men/33.jpg" 
          bio="Full-stack engineer who enjoys building scalable apps." 
        />
        <ProfileCard 
          name="Emma Smith" 
          photo="https://randomuser.me/api/portraits/women/68.jpg" 
          bio="UI/UX Designer passionate about creating smooth experiences." 
        />
      </div>
    </div>
  );
};

export default App;
