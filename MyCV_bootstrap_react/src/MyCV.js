//import logo from './logo.svg';
import PhotoCarousel from './components/PhotoCarousel';
//import MyName from './components/MyName';
import './MyCV.css';

function MyCV() {
  return (
    <div id="MyCV" className='row'>
        
        <div id='MycvLeftCol' className='col-md-4 bg-secondary'>
          <div id='MyPhoto' className='row'>
            <div className='col-md-12'>
            <PhotoCarousel />
            </div>
          </div>
          <div id='MyInfo' className='row'>
            <p className='text-center text-white fs-1 fw-bold'>Anton Sharlai</p>
          </div>
          <div>
            <hr className='border border-2'></hr>
            <p className='text-start text-white fs-5 fw-bold lh-sm'><img width='40rem' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Location_icon_from_Noun_Project.png/768px-Location_icon_from_Noun_Project.png' alt="position"></img>Contacts:</p>
            <p className='text-center text-white fs-5 fw-bold'>Ukraine, Kiev</p>
            <hr className='border border-2'></hr>
           </div>
        </div>
        
        <div id='MycvRightCol' className='col-md-8'>

        </div>
      </div>
  );
}

export default MyCV;