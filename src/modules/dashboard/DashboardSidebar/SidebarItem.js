import {NavLink} from 'react-router-dom'

function SidebarItem({to, children}) {
    return ( 
        <NavLink 
            to={to} 
            end
        >
            {({isActive}) => {
                const classActive = isActive ? 'text-primary bg-[#F1FBF7]' : 'text-icon-color'
                return (
                    <div className={`p-2.5 mb-[30px] cursor-pointer rounded-[10px] ${classActive} `}>
                        {children}
                    </div>
                )
            }}
        </NavLink>
    );
}

export default SidebarItem;