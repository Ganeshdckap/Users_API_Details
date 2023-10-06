
import {
  MDBCol,  MDBContainer,  MDBRow, MDBCard, MDBCardText,MDBCardBody, MDBCardImage,
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from "react";
import {Link ,useParams} from "react-router-dom";
import axios from 'axios';

export default function ProfilePage() {
    const {id} = useParams();
    // console.log(id);
  const [userData, setUserData] =useState([]);
  useEffect(()=>{

 
    async function oneUser(){
      try{
          const response =  await axios.get(`https://randomuser.me/api?id=${id}`);
          setUserData(response.data.results);
      } catch(error){
        console.log(error);
      }
    } 
    oneUser();
  },[])





  return (

    <section style={{ backgroundColor: '#eee' }}>
      {userData.map((user,index)=>(
            <MDBContainer className="py-5">
            <MDBRow>
                      <h2>User Details</h2> 
            </MDBRow>
      
            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src={user.picture.medium}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: '160px' }}
                      fluid />
                    <p className="text-muted mb-1">{user.name.first} {user.name.last}</p>
                    <p className="text-muted mb-4"> 

                    </p>
                    <div className="d-flex justify-content-center mb-2">
                          {user.location.street.name}{" "}
                          {user.location.city}{" "}
                          {user.location.state}{" "} 
                          {user.location.country} {" "}
                          {user.location.postcode}

                    </div>
                 <Link to={'/'}>
                 <button className='back'>
                    Back
                    </button>
                 </Link>
 
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.name.first} {user.name.last}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.email}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>DOB</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.dob.date.slice(0,10)}  </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.phone}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Cell</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.cell}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user.location.street.name}{" "}
                          {user.location.city}{" "}
                          {user.location.state}{" "}
                          {user.location.country}{" "}
                          {user.location.postcode}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
      ))}

  </section>
  );
}



// import React, { useEffect, useState } from "react";
// import {Link ,useParams} from "react-router-dom";

// export default function Details(){
  
//   const {id} = useParams();
//   console.log(id);

//   const [userData, setUserData] =useState([]);
//   useEffect(()=>{

//     async function oneUser(){
//       try{
//         const response = await fetch.get(`https://randomuser.me/api?id=${id}`)
//         if (response.status === 200) {
//           setUserData(...userData, response.data.results);
//           console.log(response.data.results);
//         }
//       } catch(error){
//         console.log(error);
//       }
//     }
//     oneUser();
//   },[])

//   return (
//     <div className="d-flex justify-content-center mt-5">
//       {userData.map((user, index) => {
//         return (
//           <div className="card w-50 " key={index}>
//             <div className="card-body">
//               <h5 className="card-title">{`${user.name.first} ${user.name.last}`}</h5>
//               <img src={user.picture.medium} alt="" />
//               <p className="card-text">
//                 {`Dob: ${user.dob.date.slice(0, 10)} Age${user.dob.age}`}
//               </p>
//               {/* <p className="card-text">
//                 {Address: ${user.location.street.number} ${user.location.street.name}${user.location.city}${user.location.state}${user.location.country}
//                 Pin:${user.location.postcode}}
//               </p> */}
//               {/* <p className="card-text">{Email-id : ${user.email}}</p> */}
//               <Link to={"/"}>
//                 <a href="#" className="btn btn-primary">
//                   Back to Home
//                 </a>
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>


//   );

// }




