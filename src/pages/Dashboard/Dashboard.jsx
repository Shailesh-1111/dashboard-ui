import React, { useState } from 'react';
import './Dashboard.scss';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import CentralPanel from '../../components/CentralPanel/CentralPanel';
import OrderList from '../../components/OrderList/OrderList';
import NotFound from '../../components/NotFound/NotFound';

const Dashboard = () => {
  const queryParam = window.location.search.substring(1);
  console.log(queryParam);

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


  const listArray = [
    { name: "Alice Johnson", price: 1200, quantity: 5, amount: 1200 * 5 },
    { name: "Michael Smith", price: 800, quantity: 10, amount: 800 * 10 },
    { name: "Sophia Williams", price: 450, quantity: 8, amount: 450 * 8 },
    { name: "James Brown", price: 950, quantity: 3, amount: 950 * 3 },
    { name: "Olivia Davis", price: 600, quantity: 7, amount: 600 * 7 },
  ];

  const cardsData= [ {
    title: "Customers",
    metric: "2,340",
    change: "+12%",
    updown: "up",
    bgColor: "#E3F5FF",
    cardType:'theme-independent'
  },
  {
    title: "Orders",
    metric: "8,950",
    change: "-5%",
    updown: "down",
    bgColor: "#F7F9FB",
    cardType:'theme-dependent'
  },
  {
    title: "Revenue",
    metric: "$14,245",
    change: "+8%",
    updown: "up",
    bgColor: "#F7F9FB",
    cardType:'theme-dependent'
  },
  {
    title: "Growth",
    metric: "42%",
    change: "+2%",
    updown: "up",
    bgColor: "#E5ECF6",
    cardType: 'theme-independent'
  }]

  const dummyOrders = [
    {
      id: "ORD-1001",
      user: { name: "John Doe", avatar: "https://i.pravatar.cc/40?img=1" },
      project: "E-commerce Website",
      address: "123 Main St, NY",
      date: "2025-09-20",
      status_type: "in_progress",
    },
    {
      id: "ORD-1002",
      user: { name: "Jane Smith", avatar: "https://i.pravatar.cc/40?img=2" },
      project: "Mobile App",
      address: "456 Park Ave, LA",
      date: "2025-09-18",
      status_type: "complete",
    },
    {
      id: "ORD-1003",
      user: { name: "Alex Brown", avatar: "https://i.pravatar.cc/40?img=3" },
      project: "AI Dashboard",
      address: "789 King Rd, TX",
      date: "2025-09-15",
      status_type: "in_progress",
    },
    {
      id: "ORD-1004",
      user: { name: "Sarah Wilson", avatar: "https://i.pravatar.cc/40?img=4" },
      project: "CRM System",
      address: "321 Oak St, FL",
      date: "2025-09-19",
      status_type: "pending",
    },
    {
      id: "ORD-1005",
      user: { name: "Mike Johnson", avatar: "https://i.pravatar.cc/40?img=5" },
      project: "Blog Platform",
      address: "654 Pine Ave, WA",
      date: "2025-09-17",
      status_type: "approved",
    },
    {
      id: "ORD-1006",
      user: { name: "Emily Davis", avatar: "https://i.pravatar.cc/40?img=6" },
      project: "Portfolio Website",
      address: "987 Elm St, OR",
      date: "2025-09-16",
      status_type: "rejected",
    },
    {
      id: "ORD-1007",
      user: { name: "David Lee", avatar: "https://i.pravatar.cc/40?img=7" },
      project: "Learning Management System",
      address: "147 Cedar Rd, NV",
      date: "2025-09-14",
      status_type: "complete",
    },
    {
      id: "ORD-1008",
      user: { name: "Lisa Garcia", avatar: "https://i.pravatar.cc/40?img=8" },
      project: "Real Estate Platform",
      address: "258 Maple Ave, AZ",
      date: "2025-09-13",
      status_type: "in_progress",
    },
    {
      id: "ORD-1009",
      user: { name: "Robert Chen", avatar: "https://i.pravatar.cc/40?img=9" },
      project: "Inventory System",
      address: "369 Birch St, CO",
      date: "2025-09-12",
      status_type: "pending",
    },
    {
      id: "ORD-1010",
      user: { name: "Amanda White", avatar: "https://i.pravatar.cc/40?img=10" },
      project: "Event Management App",
      address: "741 Spruce Rd, UT",
      date: "2025-09-11",
      status_type: "approved",
    },
    {
      id: "ORD-1011",
      user: { name: "Kevin Park", avatar: "https://i.pravatar.cc/40?img=11" },
      project: "Healthcare Dashboard",
      address: "852 Willow St, ID",
      date: "2025-09-10",
      status_type: "complete",
    },
    {
      id: "ORD-1012",
      user: { name: "Nicole Taylor", avatar: "https://i.pravatar.cc/40?img=12" },
      project: "Social Media Platform",
      address: "963 Poplar Ave, MT",
      date: "2025-09-09",
      status_type: "in_progress",
    },
    {
      id: "ORD-1013",
      user: { name: "Ryan Martinez", avatar: "https://i.pravatar.cc/40?img=13" },
      project: "Finance Tracker",
      address: "159 Ash St, WY",
      date: "2025-09-08",
      status_type: "rejected",
    },
    {
      id: "ORD-1014",
      user: { name: "Jessica Kim", avatar: "https://i.pravatar.cc/40?img=14" },
      project: "Task Management Tool",
      address: "753 Hickory Rd, ND",
      date: "2025-09-07",
      status_type: "pending",
    },
    {
      id: "ORD-1015",
      user: { name: "Thomas Anderson", avatar: "https://i.pravatar.cc/40?img=15" },
      project: "Video Streaming App",
      address: "486 Cherry Ave, SD",
      date: "2025-09-06",
      status_type: "approved",
    },
    {
      id: "ORD-1016",
      user: { name: "Rachel Green", avatar: "https://i.pravatar.cc/40?img=16" },
      project: "Weather App",
      address: "612 Walnut St, NE",
      date: "2025-09-05",
      status_type: "complete",
    },
    {
      id: "ORD-1017",
      user: { name: "Daniel Moore", avatar: "https://i.pravatar.cc/40?img=17" },
      project: "Recipe Platform",
      address: "374 Peach Rd, KS",
      date: "2025-09-04",
      status_type: "in_progress",
    },
    {
      id: "ORD-1018",
      user: { name: "Sophie Clark", avatar: "https://i.pravatar.cc/40?img=18" },
      project: "Fitness Tracker",
      address: "925 Plum Ave, IA",
      date: "2025-09-03",
      status_type: "pending",
    },
    {
      id: "ORD-1019",
      user: { name: "Mark Thompson", avatar: "https://i.pravatar.cc/40?img=19" },
      project: "Music Streaming Service",
      address: "187 Apple St, MO",
      date: "2025-09-02",
      status_type: "approved",
    },
    {
      id: "ORD-1020",
      user: { name: "Laura Rodriguez", avatar: "https://i.pravatar.cc/40?img=20" },
      project: "Travel Booking Site",
      address: "641 Orange Rd, AR",
      date: "2025-09-01",
      status_type: "rejected",
    },
    {
      id: "ORD-1021",
      user: { name: "Chris Evans", avatar: "https://i.pravatar.cc/40?img=21" },
      project: "Gaming Platform",
      address: "298 Grape Ave, LA",
      date: "2025-08-31",
      status_type: "complete",
    },
    {
      id: "ORD-1022",
      user: { name: "Megan Turner", avatar: "https://i.pravatar.cc/40?img=22" },
      project: "News Aggregator",
      address: "816 Berry St, MS",
      date: "2025-08-30",
      status_type: "in_progress",
    },
    {
      id: "ORD-1023",
      user: { name: "James Wilson", avatar: "https://i.pravatar.cc/40?img=23" },
      project: "Online Marketplace",
      address: "472 Lemon Rd, AL",
      date: "2025-08-29",
      status_type: "pending",
    },
    {
      id: "ORD-1024",
      user: { name: "Olivia Brown", avatar: "https://i.pravatar.cc/40?img=24" },
      project: "Chat Application",
      address: "539 Lime Ave, TN",
      date: "2025-08-28",
      status_type: "approved",
    },
    {
      id: "ORD-1025",
      user: { name: "Andrew Davis", avatar: "https://i.pravatar.cc/40?img=25" },
      project: "Document Management",
      address: "695 Mint St, KY",
      date: "2025-08-27",
      status_type: "complete",
    },
    {
      id: "ORD-1026",
      user: { name: "Victoria Scott", avatar: "https://i.pravatar.cc/40?img=26" },
      project: "Employee Portal",
      address: "123 Rose Rd, OH",
      date: "2025-08-26",
      status_type: "in_progress",
    },
    {
      id: "ORD-1027",
      user: { name: "Brandon Miller", avatar: "https://i.pravatar.cc/40?img=27" },
      project: "Analytics Dashboard",
      address: "456 Lily Ave, IN",
      date: "2025-08-25",
      status_type: "rejected",
    },
    {
      id: "ORD-1028",
      user: { name: "Stephanie Lewis", avatar: "https://i.pravatar.cc/40?img=28" },
      project: "Survey Platform",
      address: "789 Daisy St, IL",
      date: "2025-08-24",
      status_type: "pending",
    },
    {
      id: "ORD-1029",
      user: { name: "Justin Harris", avatar: "https://i.pravatar.cc/40?img=29" },
      project: "Booking System",
      address: "321 Tulip Rd, MI",
      date: "2025-08-23",
      status_type: "approved",
    },
    {
      id: "ORD-1030",
      user: { name: "Hannah Young", avatar: "https://i.pravatar.cc/40?img=30" },
      project: "Content Management System",
      address: "654 Orchid Ave, WI",
      date: "2025-08-22",
      status_type: "complete",
    },
  ];
  
  

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
          <CentralPanel cardData= {cardsData} listArray={listArray}/>
          }
          {
          queryParam === 'fav-overview' && 
          <OrderList orders ={dummyOrders}/>
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
