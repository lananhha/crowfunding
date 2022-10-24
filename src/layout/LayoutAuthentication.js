import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

import logo from '../assets/images/Logo.png'

function LayoutAuthentication({children}) {
    return ( 
        <div className='w-full h-[1080px] flex justify-center bg-bg-authentic bg-cover bg-no-repeat relative'>
            <Link to='/'>
                <img src={logo} alt='logo' className='absolute top-10 left-10'/>
            </Link>
            {children}
        </div>
    );
}

LayoutAuthentication.propTypes = {
    children: PropTypes.node.isRequired
}

export default LayoutAuthentication;