import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter()
  function isActive(route) {
    // if routes match-  "active" class is added from materialize
    if (route === router.pathname) return 'active'
    else return ''
  }
  return (
    <>
      <nav>
        <div className='nav-wrapper #7e57c2 deep-purple lighten-1'>
          <Link href='/'>
            <a class='brand-logo left'>Shoppers</a>
          </Link>
          <ul id='nav-mobile' className='right'>
            <li className={isActive('/login')}>
              <Link href='/login'>
                <a>Login</a>
              </Link>
            </li>
            <li className={isActive('/signup')}>
              <Link href='/signup'>
                <a>SignUp</a>
              </Link>
            </li>
            <li className={isActive('/create')}>
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
