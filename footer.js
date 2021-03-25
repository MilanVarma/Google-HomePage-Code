import React from 'react';

class Footer extends React.Component
{
    render()
    {
        return(
            <footer>
            <ul>
             <div style={{float:'left'}}>      
            <li><a>About</a></li>
            <li><a>Advertising</a></li>
            <li><a>Business</a></li>
            <li><a>How Search works</a></li>
            </div>

            <div>
            <li><a>Privacy</a></li>
            <li><a>Terms</a></li>
            <li><a>Settings</a></li>
            </div>
            </ul>
            </footer>
        )
    }
}

export default Footer;