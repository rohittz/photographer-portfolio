import React, { useContext, useEffect } from 'react';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPlus, faPlusSquare, faShoppingBag, faUserLock, faUserPlus, faWrench } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import { adminContext, userContext } from '../../App';
import AddAdmin from './AddAdmin/AddAdmin';
import AddService from './AddService/AddService';
import OrderList from './OrderList/OrderList';
import ManageServices from './ManageServices/ManageServices';
import Privateroute from '../Privateroute/Privateroute';
import Book from '../Book/Book';
const StyledButton = withStyles({
    root: {
        background: 'var(--main-back-2)',
        width: '100%',
        borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '0px',
        color: 'white',
        height: 48,
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const Dashboard = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [adminList, setAdminList] = useContext(adminContext);
    const handleAdmin = () => {
        adminList.map(admin => {
            if (admin.adminEmail === loggedInUser.email) {
                const newAdmin = { ...loggedInUser };
                newAdmin.role = 'admin';
                setLoggedInUser(newAdmin);
            }
        })
    }
    useEffect(() => {
        handleAdmin();
    }, []);
    // to add new admin
    const goToAdmin = () => {
        history.push('/dashboard/addadmin');
    }
    const goToOrderList = () => {
        history.push('/dashboard/orderlist');
    }
    const goToAddService = () => {
        history.push('/dashboard/addservice');
    }
    const goToManageServices = () => {
        history.push('/dashboard/manageservices');
    }
    return (
        <div className="container-fluid dashboard-container page-trans">
            <div className="row">
                <div className="col-lg-3 options">
                    {
                        loggedInUser?.role == "admin" ?
                            <div className="admin-options">
                                {/* for admin */}
                                <StyledButton>
                                    <div className={`option-admin`} onClick={goToOrderList}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faClipboardList} /></div>
                                        <div className="op-name">Order List</div>
                                    </div>
                                </StyledButton>
                                <StyledButton>
                                    <div className={`option-admin `} onClick={goToAdmin}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faUserPlus} /></div>
                                        <div className="op-name">Add Admin</div>
                                    </div>
                                </StyledButton>
                                <StyledButton>
                                    <div className={`option-admin `} onClick={goToAddService}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faPlus} /></div>
                                        <div className="op-name">Add Service</div>
                                    </div>
                                </StyledButton>
                                <StyledButton>
                                    <div className={`option-admin `} onClick={goToManageServices}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faWrench} /></div>
                                        <div className="op-name">Manage Services</div>
                                    </div>
                                </StyledButton>
                            </div>
                            : <div className="customer-options">
                                <StyledButton>
                                    <div className={`option-admin `} onClick={goToAddService}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faShoppingBag} /></div>
                                        <div className="op-name">Book</div>
                                    </div>
                                </StyledButton>
                                <StyledButton>
                                    <div className={`option-admin `} onClick={goToAddService}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faClipboardList} /></div>
                                        <div className="op-name">Booking List</div>
                                    </div>
                                </StyledButton>
                                <StyledButton>
                                    <div className={`option-admin `} onClick={goToAddService}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faPlus} /></div>
                                        <div className="op-name">Add Review</div>
                                    </div>
                                </StyledButton>
                            </div>
                    }
                </div>
                <div className="col-lg-9 main-tab">
                    <Switch>
                        <Route path="/dashboard/addadmin">
                            <AddAdmin></AddAdmin>
                        </Route>
                        <Route path="/dashboard/addservice">
                            <AddService></AddService>
                        </Route>
                        <Route path="/dashboard/orderlist">
                            <OrderList></OrderList>
                        </Route>
                        <Privateroute path="/dashboard/book">
                            <Book></Book>
                        </Privateroute>

                        <Route path="/dashboard/manageservices">
                            <ManageServices></ManageServices>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;