import React from 'react'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./styles/About.css";

const About = () => {
  return (
    <Layout>
        <div className='abc'>
        <section className="section-one">
      <div className="container">
        <div className="row">
          <div className="col-md-6 sec-one-left">
            <div className="d-flex flex-column justify-content-end h-100 text-white p-3">
              <h3>ATUL KASBEKAR</h3>
              <small><u>[ An Indian Photographer ]</u></small>
              <p>What I like about photographs is that they capture a moment that's gone forever, impossible to reproduce</p>
              <Link to="/gallery" className="btn btn-primary">View My Gallery</Link>
            </div>
          </div>
          <div className="col-md-6 sec-one-right">
            <div className="work-content">
              <h3>AMAZING TEAM WORK WITH PROFESSIONAL PHOTOGRAPHER</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus laboriosam facilis repudiandae neque minus in corrupti consequatur illum placeat nam libero adipisci quidem doloribus, numquam eius delectus quaerat omnis illo earum necessitatibus natus soluta deserunt iusto. Modi, soluta quos.</p>
              <Link to="/blog" className="btn btn-primary m-2">View My Blog</Link>
            </div>
            <div className="work-imgs">
              <div className="work-img-1"></div>
              <div className="work-img-2"></div>
            </div>
            <h3>"Taking an image, freezing a moment, reveals how rich reality truly is."</h3>
          </div>
        </div>
      </div>
    </section>
    <section className="section-two">
      <div className="container">
        <h2>FOLLOW ME ON INSTAGRAM</h2>
        <span>@MR.UNMIXED</span>
        <div className="row insta-imgs">
          <div className="col-md-2">
            <div className="position-relative">
              <img src={require('../images/ai.jpg')} alt="Instagram Image 1" />
              <div className="icon-overlay d-flex justify-content-center align-items-center">
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="position-relative">
              <img src={require('../images/amann.jpg')} alt="Instagram Image 1" />
              <div className="icon-overlay d-flex justify-content-center align-items-center">
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="position-relative">
              <img src={require('../images/project.jpg')} alt="Instagram Image 1" />
              <div className="icon-overlay d-flex justify-content-center align-items-center">
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="position-relative">
              <img src={require('../images/ai1.png')} alt="Instagram Image 1" />
              <div className="icon-overlay d-flex justify-content-center align-items-center">
              </div>
            </div>
          </div>
          
          <div className="col-md-2">
            <div className="position-relative">
              <img src={require('../images/img1.jpg')} alt="Instagram Image 1" />
              <div className="icon-overlay d-flex justify-content-center align-items-center">
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="position-relative">
              <img src={require('../images/img2.jpg')} alt="Instagram Image 1" />
              <div className="icon-overlay d-flex justify-content-center align-items-center">
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="position-relative">
              <img src={require('../images/img3.jpg')} alt="Instagram Image 1" />
              <div className="icon-overlay d-flex justify-content-center align-items-center">
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="position-relative">
              <img src={require('../images/img4.jpg')} alt="Instagram Image 1" />
              <div className="icon-overlay d-flex justify-content-center align-items-center">
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="position-relative">
              <img src={require('../images/img5.jpg')} alt="Instagram Image 1" />
              <div className="icon-overlay d-flex justify-content-center align-items-center">
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="position-relative">
              <img src={require('../images/img001.jpg')} alt="Instagram Image 1" />
              <div className="icon-overlay d-flex justify-content-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    </Layout>
  )
}

export default About