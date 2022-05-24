import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

export default function Widget ({type}) {

    let data;

    //temporary
    const amount = 100;
    const percentage = 12;


    switch(type){
        case 'user':
            data={
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutlinedIcon 
                className='icon' 
                style={{color: 'crimson', backgroundColor: 'rgba(225,0,0,0.2)'}}/>
            }

            break;

            case 'order':
                data={
                    title: 'ORDERS',
                    isMoney: false,
                    link: 'View all orders',
                    icon: <LocalOfferOutlinedIcon 
                    className='icon'
                    style={{color: 'goldenrod', backgroundColor: 'rgba(218,165,32,0.2)'}} />
                }
            
            break;

            case 'earning':
                data={
                    title: 'EARNINGS',
                    isMoney: false,
                    link: 'View net earnings',
                    icon: <MonetizationOnOutlinedIcon 
                    className='icon'
                    style={{color: 'green', backgroundColor: 'rgba(0,128,0,0.2)'}} />
                }
    
            break;

            case 'balance':
                data={
                    title: 'MY BALANCE',
                    isMoney: false,
                    link: 'See details',
                    icon: <AccountBalanceOutlinedIcon 
                    className='icon'
                    style={{color: 'purple', backgroundColor: 'rgba(128,0,128,0.2)'}} />
                }

            break;
            
    }

    return (
        <div className="widget">
            <div className="top">
                <p className='title'>{data.title}</p>
                <div className='percentage positive'>
                    <KeyboardArrowUpOutlinedIcon />
                    <p>+{percentage}%</p>
                </div>
            </div>

            <p className="counter">{data.isMoney && '$'}{amount}</p>

            <div className="bottom">
                <p className='link'>{data.link}</p>
                <div>{data.icon}</div>
            </div>
        </div>
    )
}