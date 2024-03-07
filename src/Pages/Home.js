import React from 'react';
import '../Styles/Home.css'
import { CourseJson, Patners } from './Images';
import { byTheNumbers } from './byTheNumber';
import instructor_img from '../Assets/instructor.jpg'
import Testimonials from './Testimonials';
import Courses from './Courses';

const Home = () => {

    return (
        <>
            {/* Banner Section */}

            <section className='pe-2 ps-2 mb-4 ' >
                <div className="banner">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6  col-lg-4 banner-text'>
                                <h2>Keep moving up</h2>
                                <p>Learn the skills you need to take the next step — and every step after. Courses from ₹499. Sale ends today.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands */}

            <section className='brand-logos  '>
                <h2 className='text-center' >Trusted by over 15,000 companies and millions of learners around the world</h2>
                <div className=' Brand-Logo-Images  d-flex flex-wrap justify-content-between container' >
                    {Patners.map((data) =>

                        <img key={data.id}  src={data.img} alt={data.name} />

                    )}

                </div>
            </section>
            {/* Top Courses */}
            
            <Courses/>

            {/* Discover Top Categories */}

            <section className='Top-Categories container mt-5 '>
                <h2>Discover Top Categories</h2>
                <div className='row Categories-rows mt-4'>
                    {CourseJson.map((data) =>
                        <div key={data.id} className='col Categories-boxes d-flex flex-column align-items-center'>
                            <img className='Categories-icon  ' src={data.img} alt={data.name} />
                            <h4 className='text-center'>{data.name}</h4>
                        </div>
                    )}
                </div>
                <div className='row Categories-rows mt-4  pb-4'>
                    {CourseJson.map((data) =>
                        <div key={data.id} className='col Categories-boxes d-flex flex-column align-items-center'>
                            <img className='Categories-icon  ' src={data.img} alt={data.name} />
                            <h4 className='text-center'>{data.name}</h4>
                        </div>
                    )}
                </div>

            </section>


            {/*instructor */}
            <section className='container mt-4 mb-4 pb-4 pt-4  instructor'>
                <div className='row'>
                    <div className='col-sm-6 text-center'>
                        <img src={instructor_img} alt='instructor' />
                    </div>
                    <div className='col-sm-6 align-self-center instructor-mbl '>
                        <h2>Become an instructor</h2>
                        <p>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
                        <a class="btn SignIn-btn m-0" href="#">Start Teaching Today</a>
                    </div>
                </div>
            </section>


            {/*by-the-numbers */}
            <section className='by-the-numbers  mt-4'>
                <div className='container'>
                    <div className='row by-the-numbers-row pt-5  pb-5  d-flex justify-content-between'>
                        {byTheNumbers.map((data) =>
                            <div key={data.id} className='col-sm-2' >
                                <h2  className='text-center'>{data.numbers}</h2>
                                <h6  className='text-center'>{data.name}</h6>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
            <Testimonials/>

        </>
    )
}


export default Home;