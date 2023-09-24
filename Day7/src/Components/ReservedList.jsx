import React from 'react'
import reservedlist from '../Components/reservedlist.json'
import Navbar1 from './Navbar1'
import Sidebar1 from './Sidebar1'
import Footer from './Footer'
import '../Assets/CSS/ReservedList.css'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
function ReservedList() {
  return (
    <>
    <AdminNavbar/>
    <AdminSidebar/>
    <div className='containers'>
    <h2>Reserved List</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>CheckIn Date</th>
          <th>CheckOut Date</th>
          <th>Room Types</th>
          <th>Bill</th>
          <th>Status</th>
          </tr>
      </thead>
      <tbody>
        {reservedlist.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.checkindate}</td>
            <td>{item.checkoutdate}</td>
            <td>{item.roomtypes}</td>
            <td>{item.bill}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <AdminFooter/>
    </>
  )
}

export default ReservedList