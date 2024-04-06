// import React, { useState } from "react";

// const api = {
//   key: "a07e04b484e939163e460aef2c19f501",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

// const Weather = () => {
//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const search = (event) => {
//     if (event.key === "Enter") {
//       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then((res) => res.json())
//         .then((result) => {
//           setWeather(result);
//           setQuery("");
//         })
//         .catch((error) => console.log("Error", error));
//     }
//   };

//   const dateBuilder = (d) => {
//     let months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     const days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday", // corrected spelling
//     ];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`;
//   };

//   return (
//     <div>
//       <main>
//         <div>
//           <input
//             type="text"
//             className="searchBar"
//             placeholder="Search ..."
//             value={query}
//             onChange={handleChange}
//             onKeyPress={search}
//           />
//         </div>

//         <div>
//           {weather && weather.sys && (
//             <div className="">
//               <div className="location">
//                 <div>
//                   {weather.name}, {weather.sys.country}
//                 </div>
//                 <div>{dateBuilder(new Date())}</div>
//               </div>
//             </div>
//           )}

//           {weather.main && (
//             <div>
//               <div>
//                 {weather.main.temp !== undefined && (
//                   <>{Math.round(weather.main.temp)}<sup>o</sup>C</>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Weather;
