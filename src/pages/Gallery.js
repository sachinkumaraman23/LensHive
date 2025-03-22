import React from 'react'
import Layout from './Layout'
import "./styles/Gallery.css"

const Gallery = () => {
  return (
    <Layout>
    <div>
    <section className="section-three">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('../images/image1.jpg')} className="card-img-top" alt="Gallery Image 1" />
              <div className="card-body">
                <h5 className="card-title">Outdoor Click</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('../images/image2.jpg')} className="card-img-top" alt="Gallery Image 1" />
              <div className="card-body">
                <h5 className="card-title">picture</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('../images/image3.jpg')} className="card-img-top" alt="Gallery Image 1" />
              <div className="card-body">
                <h5 className="card-title">Beautiful Work</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('../images/image4.jpg')} className="card-img-top" alt="Gallery Image 1" />
              <div className="card-body">
                <h5 className="card-title">Outdoor Click</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('../images/image5.jpg')} className="card-img-top" alt="Gallery Image 1" />
              <div className="card-body">
                <h5 className="card-title">picture</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('../images/image6.jpg')} className="card-img-top" alt="Gallery Image 1" />
              <div className="card-body">
                <h5 className="card-title">Beautiful Work</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('../images/image7.jpg')} className="card-img-top" alt="Gallery Image 1" />
              <div className="card-body">
                <h5 className="card-title">picture</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('../images/image8.jpg')} className="card-img-top" alt="Gallery Image 1" />
              <div className="card-body">
                <h5 className="card-title">Outdoor Click</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={require('../images/image9.jpg')} className="card-img-top" alt="Gallery Image 1" />
              <div className="card-body">
                <h5 className="card-title">Beautiful Work</h5>
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

export default Gallery