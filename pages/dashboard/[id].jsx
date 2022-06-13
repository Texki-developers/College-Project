import React from 'react'
import Layout from '../../components/layout/Layout'
import style from '../../styles/dashboard.module.css'
import PortfolioImage2 from "../../public/img/image 2.png";
import Card from '../../../components/workers/Card'

export const getServerSideProps = async () => {
    const id = query.id;
    const getData = JSON.parse(localStorage.getItem("userId"));
    const response = await fetch(`http://localhost:5000/api/user/ad/${id}`)
    const data = response.json()

    return {
        props: {
            data: data 
        }
    }

}

const dashboard = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            {/* <div className={style.dashboard}>
                <Card image={PortfolioImage2}/>
                <Card image={PortfolioImage2}/>
                <Card image={PortfolioImage2}/>
                <Card image={PortfolioImage2}/>
                <Card image={PortfolioImage2}/>
                <Card image={PortfolioImage2}/>
                <Card image={PortfolioImage2}/>
                <Card image={PortfolioImage2}/>
                <Card image={PortfolioImage2}/>
                <Card image={PortfolioImage2}/>
            </div> */}
        </Layout>
    )
}

export default dashboard