import React, { useContext, useEffect } from 'react';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPlus, faPlusSquare, faShoppingBag, faUserLock, faUserPlus, faWrench } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import { adminContext, historyContext, userContext } from '../../App';
import AddAdmin from './AddAdmin/AddAdmin';
import AddService from './AddService/AddService';
import OrderList from './OrderList/OrderList';
import ManageServices from './ManageServices/ManageServices';
import Privateroute from '../Privateroute/Privateroute';
import styled from 'styled-components';
import Book from '../Book/Book';
import BookingList from './BookingList/BookingList';
import AddReview from './AddReview/AddReview';

// const StyledButton = withStyles({
//     root: {
//         background: 'var(--main-back-2)',
//         width: '100%',
//         borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
//         borderRadius: '0px',
//         color: 'white',
//         height: 48,
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// })(Button);

const StyledButton = styled(Button)`
  background-color: var(--main-back-2);
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0px;
  transition: 0.25s all ease-in-out;
  color: var(--main-text);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 2px 40px;
  &:hover {
      background-color: rgba(14, 20, 32);
      color: black;
  }
`;
const Dashboard = () => {
    const [currComp, setCurrComp] = useContext(historyContext);
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
        // if (loggedInUser.role === 'user') {
        //     history.push('/dashboard/bookinglist');
        //     setCurrComp('/dashboard/bookinglist');
        // }
    }, []);
    // to add new admin
    const goToAddAdmin = () => {
        history.push('/dashboard/addadmin');
        setCurrComp('/dashboard/addadmin');
    }
    const goToOrderList = () => {
        history.push('/dashboard/orderlist');
        setCurrComp('/dashboard/orderlist')
    }
    const goToAddService = () => {
        history.push('/dashboard/addservice');
        setCurrComp('/dashboard/addservice')
    }
    const goToManageServices = () => {
        history.push('/dashboard/manageservices');
        setCurrComp('/dashboard/manageservices')
    }
    const goToBook = () => {
        history.push('/dashboard/book');
        setCurrComp('/dashboard/book');
    }
    const goToBookingList = () => {
        history.push('/dashboard/bookinglist');
        setCurrComp('/dashboard/bookinglist');
    }
    const goToaddReview = () => {
        history.push('/dashboard/addreview');
        setCurrComp('/dashboard/addreview');
    }
    return (
        <div className="container-fluid dashboard-container page-trans">
            <div className="row">
                <div className="col-lg-3 options">
                    {
                        loggedInUser?.role == "admin" ?
                            <div className="admin-options">
                                {/* for admin */}
                                {/* orderlist */}
                                <StyledButton>
                                    <div className={`single-option ${currComp === '/dashboard/orderlist' ? "marknv" : "nomarknv"}`} onClick={goToOrderList}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faClipboardList} /></div>
                                        <div className="op-name">Order List</div>
                                    </div>
                                </StyledButton>
                                {/* add admin */}
                                <StyledButton>
                                    <div className={`single-option ${currComp === '/dashboard/addadmin' ? "marknv" : "nomarknv"}`} onClick={goToAddAdmin}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faUserPlus} /></div>
                                        <div className="op-name">Add Admin</div>
                                    </div>
                                </StyledButton>
                                {/* add service */}
                                <StyledButton>
                                    <div className={`single-option ${currComp === '/dashboard/addservice' ? "marknv" : "nomarknv"}`} onClick={goToAddService}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faPlus} /></div>
                                        <div className="op-name">Add Service</div>
                                    </div>
                                </StyledButton>
                                {/* manage service */}
                                <StyledButton>
                                    <div className={`single-option ${currComp === '/dashboard/manageservices' ? "marknv" : "nomarknv"}`} onClick={goToManageServices}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faWrench} /></div>
                                        <div className="op-name">Manage Services</div>
                                    </div>
                                </StyledButton>
                            </div>
                            : <div className="customer-options">
                                <StyledButton>
                                    <div className={`single-option ${currComp === '/dashboard/book' ? "marknv" : "nomarknv"}`} onClick={goToBook}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faShoppingBag} /></div>
                                        <div className="op-name">Book</div>
                                    </div>
                                </StyledButton>
                                <StyledButton>
                                    <div className={`single-option ${currComp === '/dashboard/bookinglist' ? "marknv" : "nomarknv"}`} onClick={goToBookingList}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faClipboardList} /></div>
                                        <div className="op-name">Booking List</div>
                                    </div>
                                </StyledButton>
                                <StyledButton>
                                    <div className={`single-option ${currComp === '/dashboard/addreview' ? "marknv" : "nomarknv"}`} onClick={goToaddReview}>
                                        <div className="icon-container"><FontAwesomeIcon className="option-icon" icon={faPlus} /></div>
                                        <div className="op-name">Add Review</div>
                                    </div>
                                </StyledButton>
                            </div>
                    }
                </div>
                <div className="col-lg-9 main-tab">
                    <Switch>
                        {/* admin */}
                        <Privateroute path="/dashboard/addadmin">
                            <AddAdmin></AddAdmin>
                        </Privateroute>
                        <Privateroute path="/dashboard/addservice">
                            <AddService></AddService>
                        </Privateroute>
                        <Privateroute path="/dashboard/orderlist">
                            <OrderList></OrderList>
                        </Privateroute>
                        <Privateroute path="/dashboard/manageservices">
                            <ManageServices></ManageServices>
                        </Privateroute>
                        {/* customers */}
                        <Privateroute path="/dashboard/book">
                            <Book></Book>
                        </Privateroute>
                        <Privateroute path="/dashboard/bookinglist">
                            <BookingList></BookingList>
                        </Privateroute>
                        <Privateroute path="/dashboard/addreview">
                            <AddReview></AddReview>
                        </Privateroute>


                    </Switch>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;