import React from 'react'
import Layout from '../components/layout/Layout.jsx'
import style from '../styles/dashboard.module.css'
import PortfolioImage2 from "../public/img/Portfolio/image 2.png";
import Card from '../components/workers/Card'

const dashboard = () => {
    return (
        <Layout>
            <div className={style.dashboard}>
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
            </div>
        </Layout>
    )
}

export default dashboard