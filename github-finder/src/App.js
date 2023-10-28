import './App.css';
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage';
function App() {
  return (
    <>
      <div className="container-fluid vh-100 overflow-auto bg-black">
        <HomePage />
        {/* <ProfilePage/> */}
      </div>
    </>
  );
}

export default App;
