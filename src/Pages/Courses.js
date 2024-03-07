
import React from 'react'
import '../Styles/Courses.css'
import axios from 'axios'
import star from "../Assets/5start.jpg"
import { Link } from 'react-router-dom'
const Courses = () => {
    const [post, setPost] = React.useState([]);


    React.useEffect(() => {
        axios.get('https://thamaraiselvi2109.github.io/sample-test-api/course.json').then((response) => {
            setPost(response.data);
        });
    }, []);
    const Courses =post.slice(0, 8); 

    return (
        <>
            <div className='container mt-5 pb-3'>
                <h2 className='course-h2' >Top Courses</h2>
                <div className='row'>
                    {Courses.map((data) =>
                        <div key={data.id} className='col-lg-3 col-md-6 p-2'>
                            <div className="card   mt-3">
                                <img src={data.banner} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="title-card">{data.title.substring(0, 30)}...</h5>
                                    <p className="card-text">{data.description1.substring(0,60)}...</p>
                                    <small >({data.students})</small><br/>
                                    <img className='card-star' src={star} alt='5star'/> <br/>
                                    <p className='price'>{data.price} -<small className='mrp'>{data.mrp}</small></p>
                                    <Link to={`/${data.id}`} className="btn card-button"> Learn More</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Courses;