import './css/bootstrap.css';
import logo from './images/flip.png';
import Secondrow from  './component/Secondrow.js';
import  Searchbar from './component/Searchbar.js';
function App() {
  return (
    <>
           
        <div className='container-fluid'>
           <div className='row'>
             <div className='col-md-2'>
                 <img src={logo} width='100' height='100'/>
              </div>
              <div className='col-md-7 Search2'>
                <Searchbar/>
              </div>
            </div>
            <div className='row'>
              <Secondrow/>
            </div>
        </div>
           
      
        
    </>
  );
}
export default App;