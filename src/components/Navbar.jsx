import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './style.css';


function MyNavbar() {
  return (
    // upper navbar
    <div className='bg-[#172237]'>
      <Container>
        <div className='flex justify-between text-[12px] pt-1 uppernavbar text-white'>
          <p className='mb-2'>Paksitan's Best Online Shopping Desitnation</p>
          <p className='ms-auto'>Blogs <span className='mx-2'>|</span> Telemart Stores  <span className='mx-2'>|</span> Apply For A Franchise  <span className='mx-2'>|</span> Takaful Islamic Insurance <span className='mx-2'>|</span> Sell On Telemart <span className='mx-2'>|</span> Support  <span className='mx-2'>|</span></p>
          <p className='ms-5'> بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ </p>
        </div>
      </Container>
     
      {/* main navbar */}
      <Navbar expand="lg" className="text-left ">
        <Container>
          <img className='w-44 flex justify-center navbar-brand' src='https://d1iv6qgcmtzm6l.cloudfront.net/settings/5KaJNAoBfbhAHOn2c24LGvrmA3NrKaCz0hBY4Egv.png' alt="logo" />

          <input className='px-4 py-2 input-feild' type="text" placeholder='What are you Looking for?' />
          <button className='bg-[#f57224] text-white py-[8px] px-3 ms-[-12%] input-button'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>


          <p className='text-[13px] links text-white '>cart <FontAwesomeIcon icon={faCartShopping} /> 0 <span className='ms-3'>Sign in <FontAwesomeIcon icon={faUser} /></span></p>


        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;