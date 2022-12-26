import Button from '../Button/Button';
import './Header.scss';
import HeaderLogo from '../../assets/Logo.svg'


function Header() {
    return(
        <div className='Header'>
            <div className='header__content'>
                <img src={HeaderLogo} alt='logo' />
                <div className='header__navigation'>
                    <Button label={'Users'} />
                    <Button label={'Sign up'} />
                </div>
            </div>
        </div>
    )
}

export default Header;