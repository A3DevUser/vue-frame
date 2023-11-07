import React, { useState } from 'react'
import './LogInPage.css'
import ClaptekLogo from './CSS/images/claptek-logo.svg'
import loginimage from './CSS/images/login-image.svg'
import Banner from './Images/banner.jpg'
import loginImg from './Images/login_image.jpg'
import poweredBy from './Images/powered_by-vue.jpg'
import LoadingBar from 'react-top-loading-bar'



const LogInPage = () => {
    const [data, setData] = useState([{
        username: "",
        password: ""
    }]);
    const [userData, setUserData] = useState([]);
    const [selectedName, setSelectedName] = useState('');

    const [progress, setProgress] = useState(0);

    const handelInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleButton = () => {
        const fullName = `${data.username} ${data.password}`;
        setUserData([...userData, fullName]);
        setSelectedName(fullName);
        console.log("User Data is " + data.username + " " + data.password)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!data.username && !data.password) {
            alert('Both fields are empty.');
        } else if (!data.username) {
            alert('UserName is empty.');
        } else if (!data.password) {
            alert('Paasword is empty.');
        } else {
            handleButton(); // Call your custom function to handle the form data
            setProgress(100)
        }
    };

    console.log(userData)
    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                // onLoaderFinished={() => setProgress(0)}
            />
            <main className="height-100vh">
                <section className="w-100 p-0 m-0 h-100">
                    <div className="login-row-div">
                        <div className="login-left-column col-md-5 padding-30px d-flex flex-column justify-content-center">
                            <div className="logo">
                                <img src={ClaptekLogo} alt="clapteklogo" className="img-fluid" />
                            </div>
                            <div className="content d-flex flex-column justify-content-center flex-fill text-center">
                                <div className="text-content-login-left mb-4">
                                    <h1 className="login-heading">Welcome To Claptek</h1>
                                    <p className="login-para mb-0">Claptek’s VUEFRAME Advanced CCM & RM adds the power of digital to your audit teams to focus on key and high-risk areas minimising hours of routine follow-ups bringing better results.</p>
                                </div>
                                <div className="text-center">
                                    <img src={loginimage} alt="" className="img-fluid" />
                                    {/* <%-- <img src="Images/login-image.png" alt="" class="img-fluid">--%> */}
                                </div>
                            </div>
                        </div>
                        <div className="login-right-column p-0 col-md-7 d-flex flex-column justify-content-center">
                            <div className="content d-flex flex-column justify-content-center login-form m-auto">
                                <div className
                                    ="form-text-content mb-30px">
                                    <h2 className="form-heading">Login</h2>
                                    <p className="form-para mb-0">Please fill the below details to login your account.</p>
                                </div>
                                {/* Form */}
                                <form name="form1" method="post" onSubmit={handleSubmit}>
                                    <div className="input-holder w-100 mb-20px">
                                        <label htmlFor="exampleInputText1" className="form-label login-form-label">
                                            User ID
                                        </label>
                                        <input
                                            type="text" className="login-input"
                                            id="exampleInputText1"
                                            name="username"
                                            value={data.username}
                                            onChange={handelInputChange}
                                        />
                                    </div>
                                    <div className="input-holder w-100 mb-20px">
                                        <label htmlFor="exampleInputPassword1" className="form-label login-form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="login-input"
                                            id="exampleInputPassword1"
                                            name="password"
                                            value={data.password}
                                            onChange={handelInputChange}
                                        />
                                    </div>
                                    <div className="mb-4 text-end">
                                        <a href="#" className="link-text-black forgot-password-link">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <button onClick={handleButton} type="submit" className="btn btn-primary-green form-submit-btn w-100">
                                        Login
                                    </button>
                                    {/* Add error handling logic as needed */}
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </section>
            </main>

            {/* <table width="100%" border="0" cellSpacing="0" cellPadding="0" className="back-image d-none">

                <tr className="d-none">
                    <td align="center" className="login-screen">
                        <table border="0" align="center" cellPadding="0" cellSpacing="0">
                            <tr>
                                <td valign="top">
                                    <div className="banner">
                                        <img src={Banner} alt="VUEFRAME " width="438" height="228" />
                                    </div>
                                    <div id="browserdetails" runat="server">
                                    </div>
                                </td>
                                <td width="25">&nbsp;</td>
                                <td valign="top">
                                    <div className="admin-area">
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                            <tr>
                                                <td width="42%" valign="top">
                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                        <tr>
                                                            <td>
                                                                <img src={loginImg} width="81" height="72" alt="VUEFRAME" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="mesaage">
                                                                    Welcome to VUEFrame
                                                                    <br />

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="58%" valign="bottom">
                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                        <tr>
                                                            <td>
                                                                <br />
                                                                <div className="form">
                                                                    <form>

                                                                        <div className="label">
                                                                            User
                                                                        </div>
                                                                        <div className="text">
                                                                        </div>
                                                                        <div className="label">Password </div>
                                                                        <div className="text">
                                                                        </div>
                                                                        <div className="label">
                                                                        </div>

                                                                    </form>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    </table>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colSpan="3">
                                                    <br />

                                                    <strong style={{ color: "red", fontfamily: "kalinga", fontsize: "14px" }}>Please use Google Chrome to access the application</strong>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3">
                                                    <strong>Note:</strong>Enter your Windows UserID (Domain ID) and Password which is used to login in your PC
                                                    If you are not able to login, Please contact your respective FM servicedesk for Domain Id details.
                                                    <br />
                                                    <p>New User / Role Mapping /Location Updation/ID Enabling:-</p>
                                                    <ul>
                                                        <li>For ID creation , raise request throught iSAC
                                                        </li>
                                                        <li>Incase of Id Inactive "ID inactive, Initiate the user id enable request through i-SAC to enable your id
                                                        </li>
                                                        <li>Incase of Id Locked "ID locked,Initiate the user id enable request through i-SAC TO enable your id
                                                        </li>
                                                        <li>In case of ID Dormant "ID dormant,Initiate the user id enable request through i-SAC to enable your id
                                                        </li>
                                                        <li>In case of user Resigned / id deleted "ID deleted,Initiate the new user id creation request through i-SAC to re-create your id
                                                        </li>
                                                    </ul>

                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr className="d-none">
                    <td>
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                            <tr className="footer1">
                                <td className="footer1">
                                    <div className="copyright">Copyright © Claptek Private Limited.</div>
                                </td>
                                <td className="footer1" align="center">
                                    <div className="legalmsg">This is a private, restricted system for authorized users only.</div>
                                </td>
                                <td className="footer1" align="right">
                                    <div className="powered-logo">&nbsp;<img src={poweredBy} alt="VUEFRAME" /></div>
                                </td>
                            </tr>
                        </table>
                    </td>

                </tr>
            </table> */}
        </>
    )
}

export default LogInPage;