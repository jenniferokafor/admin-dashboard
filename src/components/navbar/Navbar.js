import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Navbar () {
    return (
        <div className="navbar">
            <div className="wrapper">

                {/* search */}
                <div className="search">
                    <input type='text' placeholder='Search...'/>
                    <SearchIcon className='icon'/>
                </div>

                {/* other items */}
                <div className="items">
                    <div className="item"><LanguageIcon className='icon'/> English</div>
                    <div className="item"><DarkModeOutlinedIcon className='icon'/></div>
                    <div className="item"><FullscreenOutlinedIcon className='icon'/></div>
                    <div className="item"><NotificationsNoneOutlinedIcon className='icon'/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item"><ChatOutlinedIcon className='icon'/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item"><ListOutlinedIcon className='icon'/></div>
                    <div className="item">
                        <img src='https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt="user's profile picture"/>
                    </div>
                    <div className="item"><SettingsOutlinedIcon className='icon'/></div>
                </div>
            </div>
        </div>
    )
}