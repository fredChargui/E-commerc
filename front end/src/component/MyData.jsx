// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import './MyData.css'
// function MyData({datatorender}) {
// const [data,setData] = useState([])
// const handelSubmit = () =>{
//     axios.get('http://localhost:3000/api/posts/getAll').then((res)=>{
//       setData(res.data)
//       console.log(res.data)
//         }).catch((err)=>{
//           console.log(err)
//         })
//   }
//   useEffect(()=>{
//     handelSubmit()
//   },[])
//   return (
// <div className="MyData-container" >
//   { datatorender.length>0 ?  datatorender.map((e) => {
//     return (
//       <div key={e.id} className="MyData-item" >
//         <img src={e.image} style = {{width:'200px',height:'200px'}}/>
//         <h2>{e.postname}</h2>
//         <h3>{e.price}</h3>
//       </div>
//     );
//   }) :  data.map((e) => {
//     return (
//       <div key={e.id} className="MyData-item" >
//         <img src={e.image} style = {{width:'200px',height:'200px'}}/>
//         <h2>{e.postname}</h2>
//         <h3>{e.price}</h3>
//       </div>
//     );
//   }) 
//   }
// </div>

//   )
// }

// export default MyData
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyData.css';

function MyData({ datatorender }) {
  const [data, setData] = useState([]);
  const [hide,setHide] = useState(false)

  const handleSubmit = () => {
    axios
      .get('http://localhost:3000/api/posts/getAll')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        console.log(res);
        // refresh the data
        setHide(res.data)
        handleSubmit();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="MyData-container">
      {datatorender.length > 0
        ? datatorender.map((e) => {
            console.log("from my data",e)
            return (
              <div key={e.id} className="MyData-item">
                <img src={e.image} style={{ width: '200px', height: '200px' }} />
                <h2>{e.postname}</h2>
                <h3>{e.price}</h3>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </div>
            );
          })
        : data.map((e) => {
            return (
              <div key={e.id} className="MyData-item">
                <img src={e.image} style={{ width: '200px', height: '200px' }} />
                <h2>{e.postname}</h2>
                <h3>{e.price}</h3>
                <button onClick={() => handleDelete(e.idposts)}>Delete</button>
              </div>
            );
          })}
    </div>
  );
}

export default MyData;
