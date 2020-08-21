import { useState, useEffect } from 'react';
import Link from 'next/link';

const Menu = ({href, label}) => {
    const [over, setOver] = useState(false);
    const [underline, setUnderline] = useState(false);

    useEffect(() => {
        setUnderline(window.location.pathname.split('/')[1] === (href || '') ? true : false);
    }, [])

    return(
        <Link href={"/" + (href || '')}>
            <div className="m-4 p-1" style={{ cursor: 'pointer', color: (over ? 'gray' : 'white'), borderBottom: (underline ? '2px white solid' : 'none') }} onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)}>
                <span className="text-capitalize" style={{ fontSize: '15px' }}>{href || label || ''}</span>
            </div>
        </Link>
    )
}

export default Menu;