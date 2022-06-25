import React from 'react'
import { NavLink } from "react-router-dom";


function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit porro minus nemo illum culpa? Atque nobis ab incidunt dicta voluptas autem vero tempora inventore animi. Amet temporibus iusto repellendus velit vitae labore magni impedit. Aliquid deleniti molestias facere quam, ab ratione nobis hic dolore totam nemo voluptas, officiis voluptatum. Inventore vero sunt amet aut alias! Provident pariatur, tempora odio sunt voluptatem fugit ex beatae quam laborum obcaecati esse perspiciatis a! Autem sit voluptatem aliquid dolorum quibusdam vitae repellat neque officiis, deserunt obcaecati tempora, similique et delectus, corrupti voluptate ab error! Quasi suscipit pariatur excepturi in fuga voluptatibus aspernatur iste mollitia?
            </p>
            <NavLink to='/contact' className="btn btn-outline-primary px-3">Contact us</NavLink>
          </div>
          <div className='col-md-6 d-flex-justify-content-center'>
            <img src="/assets/about-us.jpg" alt="About Us" height='400px'  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About