import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export default function New () {
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add New User</h1>
                </div>

                <div className="bottom">
                    <div className="left">
                        <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="avatar" />
                    </div>
                    <div className="right">

                        {/* add new user form */}
                        <form>
                        <div className="formInput">
                                <label htmlFor="file">Image: <DriveFolderUploadIcon className='icon'/></label>
                                <input type="file" id='file' style={{display: 'none'}}/>
                            </div>

                            <div className="formInput">
                                <label htmlFor="username">Username</label>
                                <input type="text" id='username' placeholder='@janedoe'/>
                            </div>

                            <div className="formInput">
                                <label htmlFor="fullname">Full name</label>
                                <input type="text" id='fullname' placeholder='Jane Doe'/>
                            </div>

                            <div className="formInput">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' placeholder='janedoe@gmail.com'/>
                            </div>

                            <div className="formInput">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id='phone' placeholder='+123 456 789'/>
                            </div>

                            <div className="formInput">
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password'/>
                            </div>

                            <div className="formInput">
                                <label htmlFor="address">Address</label>
                                <input type="text" id='address' placeholder='221B Baker street'/>
                            </div>

                            <div className="formInput">
                                <label htmlFor="country">Country</label>
                                <input type="text" id='country' placeholder='USA'/>
                            </div>
                            <button>Create new user</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}