//import logo from './logo.svg';
import Carousel from './components/Carousel';
//import './MyCV.css';

function MyCV() {
  return (
    <div id="MyCV" className='row'>
        <div id='MycvLeftCol' className='col-md-4'>
          <div id='MyPhoto' className='row'>
            <div className='col-md-12'>
              <Carousel /> 
            </div>
          </div>
        </div>
        <div id='MycvRightCol' className='col-md-8'>

        </div>
      </div>
  );
}

export default MyCV;