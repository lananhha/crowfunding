import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

import logo from '../assets/images/Logo.png'

function LayoutAuthentication({children}) {
    return ( 
        <div className='w-full h-[1080px] flex justify-center lg:bg-bg-authentic bg-lite bg-cover bg-no-repeat relative'>
            <Link to='/'>
                <img src={logo} alt='logo' className='absolute lg:top-10 lg:left-10 top-6 left-6'/>
            </Link>
            {children}
        </div>
    );
}

LayoutAuthentication.propTypes = {
    children: PropTypes.node.isRequired
}

export default LayoutAuthentication;