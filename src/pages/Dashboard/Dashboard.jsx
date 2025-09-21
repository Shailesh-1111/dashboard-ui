import React, { useContext, useState } from 'react';
import './Dashboard.scss';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import CentralPanel from '../../components/CentralPanel/CentralPanel';
import OrderList from '../../components/OrderList/OrderList';
import NotFound from '../../components/NotFound/NotFound';
import { ThemeContext } from '../../context/ThemeContext';
import { 
  topSellingData, 
  cardsData, 
  ordersData, 
  getDepartmentData 
} from '../../data/mockData';

const Dashboard = () => {
  const queryParam = window.location.search.substring(1);
  const {dark} = useContext(ThemeContext)

  const [isLeftOpen, setIsLeftOpen] = useState(true);
  const [isRightOpen, setIsRightOpen] = useState(true);

  const toggleLeftSidebar = () => setIsLeftOpen((prev) => !prev);
  const toggleRightSidebar = () => setIsRightOpen((prev) => !prev);

  const [breadCrumPath, setBreadCrumPath] = useState();

  const stats = [
    { title: 'Total Users', value: '2,543', change: '+12%', trend: 'up' },
    { title: 'Revenue', value: '$45,231', change: '+8%', trend: 'up' },
    { title: 'Orders', value: '1,234', change: '-3%', trend: 'down' },
    { title: 'Conversion', value: '3.2%', change: '+5%', trend: 'up' },
  ];

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', amount: '$299.00', status: 'Completed' },
    { id: '#1235', customer: 'Jane Smith', amount: '$149.00', status: 'Pending' },
    { id: '#1236', customer: 'Bob Johnson', amount: '$89.00', status: 'Completed' },
    { id: '#1237', customer: 'Alice Brown', amount: '$199.00', status: 'Processing' },
  ];


  const departmentData = getDepartmentData(dark);
  
  

  return (
    <div className="dashboard">
      <div className="dashboard-layout">
        <LeftSidebar isOpen={isLeftOpen} username={'Shailesh'} setBreadCrumPath={setBreadCrumPath}/>

        <div className="center-panel">
          <TopNavbar
            toggleLeftSidebar={toggleLeftSidebar}
            toggleRightSidebar={toggleRightSidebar}
            breadCrumPath={breadCrumPath}
            setBreadCrumPath={setBreadCrumPath}
          />
          { 
          queryParam === 'dash-e-commerce' && 
          <CentralPanel cardData={cardsData} listArray={topSellingData} donutData={departmentData}/>
          }
          {
          queryParam === 'fav-overview' && 
          <OrderList orders={ordersData}/>
          }
          {!['dash-e-commerce', 'fav-overview'].includes(queryParam) && (
            <NotFound/>
          )}
       
        </div>

        <RightSidebar isOpen={isRightOpen} />
      </div>
    </div>
  );
};

export default Dashboard;
