import React from 'react'
import Hero from "../components/hero"
import Banner from "../components/banner"
import { Link } from 'react-router-dom'
class Home extends React.Component {
    render() {
        return <Hero>
            <Banner title='404' subtitle='page not found'>
                <Link to='/' className='btn-primary'>return home</Link>
            </Banner>
        </Hero>
    }
}
export default Home