import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='nav-wrapper #7e57c2 deep-purple lighten-1'>
          <Link href='/'>
            <a class='brand-logo left'>Shoppers</a>
          </Link>
          <ul id='nav-mobile' className='right'>
            <li>
              <Link href='/login'>
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href='/signup'>
                <a>SignUp</a>
              </Link>
            </li>
            <li>
              <Link href='/create'>
                <a>
                  <i className='large material-icons'>add_to_photos</i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
