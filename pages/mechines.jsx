import React from 'react'
import Card from '../components/workers/Card'
import PortfolioImage2 from "../public/img/Portfolio/image 2.png";
import style from '../styles/workers.module.css'
import Header from '../components/header/Header'

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}mechines`)
  const data = await response.json()
  return {
    props: {
      data: data
    }
  }
}
const Mechines = ({data}) => {

  return (
      
    <div className={style.workers}>
      <Header/>
      <h1>Mechines</h1>
        {
        data.map((data,i) => (
          <Card key={i} data={data} image={PortfolioImage2} />
        ))
      }
    </div>
  )
}

export default Mechines