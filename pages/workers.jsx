import React, { useEffect } from 'react'
import Card from '../components/workers/Card'
import PortfolioImage2 from "../public/img/Portfolio/image 2.png";
import style from '../styles/workers.module.css'
import Header from '../components/header/Header'

export const getServerSideProps = async () => {
  const response = await fetch(`http://localhost:5000/api/workers`)
  const data = await response.json()
  return {
    props: {
      data: data
    }
  }
}

const Workers = ({ data }) => {


  return (

    <div className={style.workers}>
      <Header />
      <h1>Workers</h1>
      {
        data.map((data,i) => (
          <Card key={i} data={data} image={PortfolioImage2} />
        ))
      }
    </div>
  )
}

export default Workers