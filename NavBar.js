import React from 'react';

class Navbar extends React.Component
{
    render()
    {
        return(
            <div className="nav">
                <ul>
                    <li><a href="/">Images</a></li>
                    <li><a href="/">Gmail</a></li>
                </ul>
            </div>
        );
    }
}
 
export default Navbar