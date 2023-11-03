import AlaToo from './assets/images/Alatoo.png';
import TextArea from './components/TextArea';
import './App.css';


function App() {
  return (
    <div className="myApp">
      <img src={AlaToo} alt="Ala too logo"  className='rotate'/>
      <h1>Impossible TextArea</h1>
      <div className="textarea-container">
        <TextArea/>
      </div>
    </div>
  );

}

export default App;