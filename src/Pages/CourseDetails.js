import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import  '../Styles/CourseDetails.css'
import stars from "../Assets/5start-removebg-preview.png"

const CourseDetails = () => {
    const params = useParams()
    const [post, setPost] = React.useState([]);


    React.useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/Thamaraiselvi2109/sample/courselist/${params.id}`).then((response) => {
            setPost(response.data);
        });
    }, []);
    React.useEffect(() => {
        console.log("params", params)
    }, [params])
    return (
        <>
        <section className='detail-1 py-5'>
            <div className='container'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-7'>
                        <h1>{post.title}</h1>
                        <p>{post.description1}</p>
                        <button className='bg-warning'>Best seller</button>&nbsp;&nbsp;<small>{post.ratings}</small>
                        <p className='instructor py-3'>Created by{post.instructor}</p>
                    </div>
                    <div className='col-lg-5 text-center py-3'>
                        <img src={post.banner}  alt={post.title} />
                    </div>
                </div>
            </div>
        </section>
        <section className='detail-2 py-5'>
        <div className='container'>
        <div className='row align-items-center'>
            <div className='col-lg-7'>
                <div className='descript px-3 py-3'>
                    <h3>What you'll learn</h3>
                    <p>
                        {post.description2}
                    </p>
                </div>
            </div>
            <div className='col-lg-5 py-5'>
                <h4>Buy now</h4>
            <p className='price'>{post.price} - <small className='mrp'>{post.mrp}</small></p>
            <button className='add-cart px-5 py-2'>Add to cart</button>
            </div>
        </div>
        </div>
        </section>
        </>
    )
}
export default CourseDetails;