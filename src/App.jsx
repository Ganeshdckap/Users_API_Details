// import React, { useEffect, useState } from "react";
// import { Input } from 'antd';
// import Button from 'react-bootstrap/Button';
// import { ButtonGroup } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel';
// import "./index.css";
// import {Link } from "react-router-dom";

// const App = () => {

//   const [results, setResults] = useState([]);
//   const [search, setSearch] = useState('');
//   const [gender, setGender] = useState("");

//   useEffect(() => { 
//     fetch("https://randomuser.me/api?results=27")
//       .then((response) => {
//         return response.json()
//       })
//       .then(data => {
//         setResults(...results, data.results)
//       })
//   }, []);

//   const filter = results.filter((user) => gender === "" ? user : user.gender === gender);

//   const handleInput = (e) => {
//     const { value } = e.target;
//     setGender(value)
//   }

//   handleClick = () => {
//     this.setResults({ count: this.results.count + 1 });
//   };

//   return (
//     <div className="container">
//       <h2>User Details</h2>

//       <div className="slide">
//         <Carousel data-bs-theme="dark">
//           {results.map((users, index) => {
//             return (
//               <Carousel.Item key={index}>
//                 <img src={users.picture.large} alt="First slide" />
//                 <Carousel.Caption>
//                   <h5>{users.name.first + users.name.last}</h5>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             )
//           })}
//         </Carousel>
//       </div>

//       <Input placeholder="User Name" onChange={(e) => setSearch(e.target.value)}
//         className="mt-2" />

//       <div className="Allbuttons">
//         <ButtonGroup aria-label="Basic example">
//           <Button onClick={handleInput} value={""}>All</Button>
//           <Button onClick={handleInput} value={"male"}>Male</Button>
//           <Button onClick={handleInput} value={"female"}>Female</Button>
//         </ButtonGroup >
//       </div>

//       <div className="Card">

//         {filter.filter((results) => {
//           return search.toLowerCase() === ''
//             ? results
//             : results.name.first.toLowerCase().includes(search);
//         }).map((results, index) => (
//           <div key={index}>
//             <Link to={`/details/${results.id.value}`}>
//             <img src={results.picture.medium} />
//             <p>{results.name.first}</p></Link>

//           </div>

//         ))}
//       </div>
      
//       <div className="pageNa">
//           <button onClick={handleClick}>View More</button>
//       </div>
//     </div>
//   );
// };

// export default App;

// // -----------------------------------------CHAT-----------------------------------------
// import React, { useEffect, useState } from "react";
// import { Input } from "antd";
// import Button from 'react-bootstrap/Button';
// import { ButtonGroup } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel';


// const App = () => {
//   const [results, setResults] = useState([]);
//   const [search, setSearch] = useState('');
//   const [gender, setGender] = useState("");
//   const [usersToShow, setUsersToShow] = useState(27);
//   const initialUsersToShow = 27;

//   useEffect(() => {
//     fetch("https://randomuser.me/api?results=27")
//       .then((response) => response.json())
//       .then(data => {
//         setResults(data.results);
//       });
//   }, []);

//   const handleInput = (value) => {
//     setGender(value);
//   }

//   const handleViewMore = () => {
//     setUsersToShow(usersToShow + initialUsersToShow);
//   }

//   const filteredResults = results.filter(user => gender === "" ? user : user.gender === gender);
//   const filteredAndSearchedResults = filteredResults.filter(user => (
//     search.toLowerCase() === '' || user.name.first.toLowerCase().includes(search)
//   ));

//   return (
//     <div className="container">
//       <h2>Users List</h2>

//       <div className="slide">
//         <Carousel data-bs-theme="dark">
//           {results.map((user, index) => (
//             <Carousel.Item key={index}>
//               <img src={user.picture.large} alt="User" />
//               <Carousel.Caption>
//                 <h5>{user.name.first + user.name.last}</h5>
//               </Carousel.Caption>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>

//       <Input
//         placeholder="User Name"
//         onChange={(e) => setSearch(e.target.value)}
//         className="mt-2"
//       />

//       <div className="Allbuttons">
//         <ButtonGroup aria-label="Basic example">
//           <Button onClick={() => handleInput("")}>All</Button>
//           <Button onClick={() => handleInput("male")}>Male</Button>
//           <Button onClick={() => handleInput("female")}>Female</Button>
//         </ButtonGroup>
//       </div>

//       <div className="Card">
//         {filteredAndSearchedResults.slice(0, usersToShow).map((user, index) => (
//           <div key={index}>
//             <img src={user.picture.medium} alt="User" />
//             <p>{user.name.first}</p>
//           </div>
//         ))}
//       </div>

    
//         <button className="pageNav" onClick={handleViewMore}>
//           View More
//         </button>
  
      
//     </div>  
//   );
// };

// export default App;

//----------------------------------------------CHATGPT2-------------------------------------------------
import React, { useEffect, useState } from "react";
import { Input } from 'antd';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import "./index.css";
import { Link } from "react-router-dom";

const App = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState("");
  const [visibleResults, setVisibleResults] = useState(9); 
  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${visibleResults}`)
      .then((response) => response.json())
      .then(data => setResults(data.results))
  }, [visibleResults]);

  const filter = results.filter((user) => gender === "" ? user : user.gender === gender);

  const handleInput = (e) => {
    const { value } = e.target;
    setGender(value);
  };

  const handleViewMore = () => {
    // Increase the number of visible results by 10 when "View More" is clicked
    setVisibleResults(visibleResults + 9); 
  
  };

  return (
    <div className="container">
      <h2>User Details</h2>

      <div className="slide">
        <Carousel data-bs-theme="dark">
          {results.map((users, index) => {
            return (
              <Carousel.Item key={index}>
                <img src={users.picture.large} alt="First slide" />
                <Carousel.Caption>
                  <h5>{users.name.first + users.name.last}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>

      <Input placeholder="User Name" onChange={(e) => setSearch(e.target.value)} className="mt-2" />

      <div className="Allbuttons">
        <ButtonGroup aria-label="Basic example">
          <Button onClick={handleInput} value={""}>All</Button>
          <Button onClick={handleInput} value={"male"}>Male</Button>
          <Button onClick={handleInput} value={"female"}>Female</Button>
        </ButtonGroup>
      </div>

      <div className="Card">
        {filter.filter((results) => {
          return search.toLowerCase() === '' ? results : results.name.first.toLowerCase().includes(search);
        }).map((results, index) => (
          <div key={index}>
            <Link to={`/details/${results.id.value}`} style={{textDecoration:"none"}}>
              <img src={results.picture.medium} alt={results.name.first} />
              <p>{results.name.first}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="pageNa">
        <button onClick={handleViewMore}>View More</button>
      </div>
    </div>
  );
};

export default App;
