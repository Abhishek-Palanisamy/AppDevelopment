import React, { useEffect, useState } from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import '../Assests/CSS/Dashboard.css'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import AdminSidebar from '../Components/AdminSidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
function Dashboard() {

    const data = [
        {
          name: 'Jan',
          2022: 4000,
          2023: 2400,
        },
        {
          name: 'Feb',
          2022: 3000,
          2023: 1398,
        },
        {
          name: 'Mar',
          2022: 2000,
          2023: 1800,
        },
        {
          name: 'Apr',
          2022: 2780,
          2023: 3908,
        },
        {
          name: 'May',
          2022: 1890,
          2023: 4800,
        },
        {
          name: 'Jun',
          2022: 2390,
          2023: 3800,
        },
        {
          name: 'Jul',
          2022: 3490,
          2023: 4300,
        },
      ];
      const user = useSelector(selectUser);
      const username =user.user && user.user.username ? user.user.username : "Guest";
  
      const isLoggedIn = user.user && user.user.username;
      const nav = useNavigate();
      useEffect(() => {
        if (!isLoggedIn || user.user.username !== "admin") {
          // If the user is not authenticated or is not "admin," redirect them to the login page
           // You should update this to the correct login page URL
          setTimeout(() => {
            alert("You are not authorized. Please log in as an admin.");
          }, 1000);
          nav("/login");
        }
      }, [isLoggedIn, user]);
      const [datavacant, setDatavacant] = useState([]);
      const [roomsbooked,setRoomsbooked]=useState([]);
      const [totalamount,setTotalamount]=useState([]);

      const fetchData = async () => {
        try {
          setDatavacant( (await axios.get('http://localhost:8999/auth/difference')).data);
          setRoomsbooked((await axios.get("http://localhost:8999/auth/booked")).data);
          setTotalamount((await axios.get("http://localhost:8999/auth/total")).data);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      useEffect(() => {
        fetchData(); // Call the GET request when the component mounts
      }, []);

  return (
    <>
    <Navbar/>
    <AdminSidebar/>
    <div className='main-cont'>
        <div className='main-ti'>
            <p className='headbox'>DASHBOARD</p>
        </div>
console.log({roomsbooked});
        <div className='main-c'>
            <div className='card1'>
                <div className='card1-inner'>
                    <p className='box'>TOTAL ROOMS</p>
                    <BsFillArchiveFill className='card1_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card1'>
                <div className='card1-inner'>
                    <p className='box'>ROOMS BOOKED</p>
                    <BsFillGrid3X3GapFill className='card1_icon'/>
                </div>
                <h1>{roomsbooked}</h1>
            </div>
            <div className='card1'>
                <div className='card1-inner'>
                    <p className='box'>VACANT ROOMS</p>
                    <BsPeopleFill className='card1_icon'/>
                </div>
                <h1>{datavacant}</h1>
            </div>
            <div className='card1'>
                <div className='card1-inner'>
                    <p className='box'>TOTAL EARNINGS</p>
                    <BsFillBellFill className='card1_icon'/>
                </div>
                <h1>{totalamount}</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 9,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="2022" fill="#8884d8" />
                <Bar dataKey="2023" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 9,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="2022" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="2023" stroke="#82ca9d"  />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard