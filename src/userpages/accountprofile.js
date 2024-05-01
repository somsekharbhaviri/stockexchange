
// import React, { useEffect, useState } from 'react';
// import './accountprofile.css'

// export default function AccountProfile() {
//   const [UserData, setUserData] = useState("");

//   useEffect(() => {
//     const storedUserData = sessionStorage.getItem('Stockmember');
//     if (storedUserData) {
//       const parsedUserData = JSON.parse(storedUserData);
//       setUserData(parsedUserData)
//     }
//   }, []);
//   return (
//     <div>
//       <h2 style={{marginLeft:"-1400px"}}>My Profile</h2>

//       {/* First Profile Box */}
//       <div className="profile-box" style={{height:"600px"}}>
//         <div className="outsideboxinvestments" style={{ marginLeft: "30px" ,height:"500px",width:"600px"}}>
//           <div
//             className="insideboxes"
//             style={{
//               width: "150px",
//     height: "150px",
//     borderRadius: "50%",
//     margin: "0 auto 20px",
//     display: "block",
//     objectFit: "cover",
//     boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
//             }}
//           ></div>
//           <table >
//             <tr >
//               <td>Username:</td>
//               <td>{UserData.name}</td>
//             </tr>
//             <tr>
//               <td>Email:</td>
//               <td>{UserData.email}</td>
//             </tr>
//             <tr>
//               <td>Age:</td>
//               <td>{UserData.age}</td>
//             </tr>
//             <tr>
//               <td>Aadhar:</td>
//               <td>{UserData.aadhar}</td>
//             </tr>
//             <tr>
//               <td>Mobile:</td>
//               <td>{UserData.contact}</td>
//             </tr>
//             <tr>
//               <td>PAN:</td>
//               <td>{UserData.panno}</td>
//             </tr>
//           </table>
//         </div>
//       </div>


//       <div class="sub-main-div">
//         <div class="verticalbox" style={{marginTop:'-650px',marginRight:'200px'}}>
//           <h2>Settings</h2>
//           <div align="center" class="outsideboxes" style={{ width: "500px",align:'left' }}>
//             <button className="insideboxesbutton" style={{ width: "360px",textAlign:'center',marginLeft:"-0px" }} ><i>Change Password</i></button>
//             <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center',marginLeft:"-0px"}}><i>Change Account Pin</i></button>
//             <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center',marginLeft:"-0px"}}><i>Reports</i></button>
//             <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center',marginLeft:"-0px"}}><i>Nominee Details</i></button>
//             <button className="insideboxesbutton" style={{ width: "360px",textAlign:'center' ,marginLeft:"-0px"}}><i>Active Devices</i></button>
//             <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center',marginLeft:"-0px"}}><i>Trading Preferences</i></button>
//             <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center',marginLeft:"-0px"}}><i>Personal Details</i></button>
//             <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center',marginLeft:"-0px"}}><i>Change Profile Photo</i></button>
//             <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center',marginLeft:"-0px"}}><i>Edit Profile</i></button>
//             <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center',marginLeft:"-0px"}}><i>Upgrade to premium</i></button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import './accountprofile.css';

export default function AccountProfile() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const storedUserData = sessionStorage.getItem('Stockmember');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <div>
      <h1 align="center"><u>Welcome {userData.name}!</u></h1>
    <div className="profile-container">
    <div className="profile-box">
      <h2 style={{marginRight:"500px"}}>My Profile</h2>
      <div className="outsideboxinvestments">
        <table className="profile-table">
          <tbody>
            <tr>
              <td>Username:</td>
              <td>{userData.name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{userData.email}</td>
            </tr>
            <tr>
              <td>Age:</td>
              <td>{userData.age}</td>
            </tr>
            <tr>
              <td>Aadhar:</td>
              <td>{userData.aadhar}</td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td>{userData.contact}</td>
            </tr>
            <tr>
              <td>PAN:</td>
              <td>{userData.panno}</td>
            </tr>
            <tr>
              <td>Annual Income:</td>
              <td>{userData.annualIncome}</td>
            </tr>
            <tr>
              <td>Source:</td>
              <td>{userData.source}</td>
            </tr>
            <tr>
              <td>Bank Name:</td>
              <td>{userData.bankName}</td>
            </tr>
            <tr>
              <td>Bank Account:</td>
              <td>{userData.bankAccount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}
