import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader'
import Item from './Item'
import Items from './Items'

function App() {
    const item1element = Items.map((item1,index) =>{
      return <Item key ={index} item1={item1}/>
    });

  return (
    <div className="App">
      <AppHeader />
      <div className="app-grid">
      { item1element }
      </div>
    </div>
  );
}

export default App;
