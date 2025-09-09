import './nav.css'
function Nav(){
  return(
    <div className='mx-auto w-[90%] border-1 rounded-2xl my-4'>
    <nav className='Header flex justify-between items-baseline'>
      <h1 className='m-3 p-3 border-1 hover:cursor-default'>Logo</h1>
      <ul className='flex'>
        <li className='my-6 mx-3'>
          <a href='#' className='p-3'>Home</a>
        </li>
        <li className='my-6 mx-3'>
          <a href='#' className='p-3'>Destinations</a>
        </li>
        <li className='my-6 mx-3'>
          <a href='#' className='p-3'>Pakages</a>
        </li>
        <li className='my-6 mx-3'>
          <a href='#' className='p-3'>Booking</a>
        </li>
        <li className='my-6 mx-3'>
          <a href='#' className='p-3'>About</a>
        </li>
        <li className='my-6 mx-3'>
          <a href='#' className='p-3'>Contact</a>
        </li>
      </ul>
      <button className='border-1 m-3 p-3'>Book Now</button>
    </nav>
    </div>
  )
}
export default Nav;