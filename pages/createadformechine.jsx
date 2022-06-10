import React, { useRef } from "react";
import Layout from "../components/layout/Layout";
import style from "../styles/createadformechine.module.css";

const Createadformechine = () => {
  const name = useRef()
  const category = useRef()
  const rent = useRef()
  const phone = useRef()
  const description = useRef()
  const location = useRef()

  const addData = () => {
    const data = {
      name: name.current.value,
      rent: rent.current.value,
      description: description.current.value,
      location: location.current.value,
      userId: 1,
      phone: phone.current.value
    }
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}mechines/create`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.status === 200) {
        alert("data added")
      }
    }).catch(error => {
      alert("data not added")
    })
  }
  return (
    <Layout>
      <div className={style.createadformechine}>
        <div className={style.boxcontainter}>
          <h1>create the ad</h1>
          <div>
            <p>Image</p>
            <input type="file" />
          </div>
          <div>
            <p>Name</p>
            <input ref={name} type="text" />
          </div>
          <div>
            <p>Rent</p>
            <input ref={rent} type="number" />
          </div>
          <div>
            <p>Phone number</p>
            <input ref={phone} type="tel" />
          </div>
          <div>
            <p>description</p>
            <textarea ref={description} type="text" />
          </div>
          <div>
            <p>Location</p>
            <input  ref={location} type="text" />
          </div>
          <div className={style.buttons}>
            <button onClick={addData} className={style.button}>Create</button>
            <button className={style.button}>Discard</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Createadformechine;
