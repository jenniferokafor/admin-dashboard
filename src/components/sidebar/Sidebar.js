import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar () {
    return (
        <div className="sidebar">
            {/* logo */}
            <div className="top"><span className="logo">Sellr</span></div>
            <hr/>

            {/* options bar */}
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>

                    <p className="title">LISTS</p>

                    <li>
                        <GroupIcon className='icon'/>
                        <span>Users</span>
                    </li>

                    <li>
                        <CategoryIcon className='icon'/>
                        <span>Products</span>
                    </li>

                    <li>
                        <ShoppingBagIcon className='icon'/>
                        <span>Orders</span>
                    </li>

                    <li>
                        <DeliveryDiningIcon className='icon'/>
                        <span>Delivery</span>
                    </li>

                    <p className="title">USEFUL</p>

                    <li>
                        <QueryStatsIcon className='icon'/>
                        <span>Stats</span>
                    </li>

                    <li>
                        <NotificationsIcon className='icon'/>
                        <span>Notifications</span>
                    </li>

                    <p className="title">SERVICE</p>

                    <li>
                        <FavoriteBorderIcon className='icon'/>
                        <span>System Health</span>
                    </li>

                    <li>
                        <HistoryEduIcon className='icon'/>
                        <span>Logs</span>
                    </li>

                    <li>
                        <SettingsIcon className='icon'/>
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>

                    <li>
                        <AccountBoxIcon className='icon'/>
                        <span>Profile</span>
                    </li>

                    <li>
                        <LogoutIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            {/* theme picker */}
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}