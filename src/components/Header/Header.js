import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
    return <div className='Logo'>
                <img src={logo} alt="Logo" className="image-Logo"/>
            </div>
}

export default Header