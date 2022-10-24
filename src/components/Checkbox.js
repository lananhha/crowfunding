import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

function Checkbox({checked, onClick}) {

    const classActive = checked ? 'bg-primary border-primary border-none' : ''

    return ( 
        <>
            <label 
                htmlFor="input" 
                className={`w-[20px] h-[20px] border-text4 border-2 rounded mr-5 cursor-pointer flex items-center justify-center ${classActive}`}
                onClick={onClick}
            >
                {checked &&<FontAwesomeIcon icon={faCheck} className='text-white' />}
            </label>
            <input 
                type='checkbox' 
                id="input" 
                className="hidden"
                checked={checked}
                onChange={() => {}}
             />
        </>
     );
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Checkbox