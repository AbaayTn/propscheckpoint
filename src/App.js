import {Profile} from './profile/profile'
import myimage from './profile/Houssem.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
    <Profile fullname="Houssem Gharbi" bio="I'm a developper" profession="Engineer"><img src={myimage} alt='' style={{width:'200px',height:'200px'}}/></Profile>
    </div>
  );
}

export default App;
