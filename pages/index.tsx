import type { NextPage } from 'next'
import Footer from '../components/footer/Footer'
import Category from '../components/category/Category'
import BestPortfolio from '../components/bestportfolio/BestPortfolio'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero/Hero'
import Header from '../components/header/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <Hero/>
      <Category/>
      <BestPortfolio/>
     <Footer/>
    </div>
  )
}

export default Home
