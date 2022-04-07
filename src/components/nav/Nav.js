import React from 'react'
import './nav.css'
function Nav() {
    return (
        <div className='nav-body'>
            <div className='nav-body-left'>
                <div className='nav-body-left-numb'>
                    +45 345 3324 56789

                </div>
                <div className="nav-body-left-links">
                    <ul className='nav-body-left-lists'>

                        <li>
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                        </li>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribble"></i></a></li>
                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>

                    </ul>
                </div>

            </div >
            <div className='nav-body-right'>
                <div className='nav-body-right-links'>
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
            </div>

        </div >
    )
}

export default Nav