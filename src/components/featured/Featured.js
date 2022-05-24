import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Featured () {
    return (
        <div className="featured">
            <div className="top">
                <h4 className='title'>Total Revenue</h4>
                <MoreVertIcon className='icon'/>
            </div>

            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar 
                    value={70} 
                    text={'70%'}
                    strokeWidth={5}/>
                </div>

                <p className='title'>Total sales made today</p>
                <p className="amount">$420</p>
                <p className='desc'>Previous transactions processing. Last payments may not be included.</p>

                <div className='summary'>
                    <div className='item'>
                        <span className='itemTitle'>Target</span>
                        <span className='itemResult negative'>
                            <KeyboardArrowDownIcon />
                            <p>$12.4k</p>
                        </span>
                    </div>

                    <div className='item'>
                        <span className='itemTitle'>Last week</span>
                        <span className='itemResult positive'>
                            <KeyboardArrowUpIcon/>
                            <p>$12.4k</p>
                        </span>
                    </div>

                    <div className='item'>
                        <span className='itemTitle'>Last month</span>
                        <span className='itemResult positive'>
                            <KeyboardArrowUpIcon />
                            <p>$12.4k</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}