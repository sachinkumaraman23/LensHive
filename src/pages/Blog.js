import React from 'react';
import './styles/Blog.css';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import PDFs correctly
import CameraBasicsPDF from '../PDFs/Camera Basics.pdf';
import PhotographyBasicsPDF from '../PDFs/Photography Basics.docx';

const Blog = () => {
  return (
    <Layout>
      <section className="section-four">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="video">
                <video controls className="w-100">
                  <source
                    src={require('../videos/PHOTOGRAPHY BASICS in 10 MINUTES.mp4')}
                    type="video/mp4"
                  />
                  Your browser does not support the video element.
                </video>
              </div>
            </div>

            <div className="col-md-6">
              <div className="blog mt-4">
                <img
                  src={require('../images/blog1.jpg')}
                  alt="Camera Basics"
                  className="img-fluid blog-image"
                />
                <div className="blog-content p-4">
                  <span className="badge bg-dark">Photography</span>
                  <span className="misc-info">
                    Published: 1 Week Ago | 25 Comments
                  </span>
                  <h3 className="blog-title">Camera Basics</h3>
                  <p className="blog-text">
                    Some important camera tips and equipment ideas
                  </p>
                  <a href={CameraBasicsPDF} className="btn btn-success" download>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="blog mt-4">
                <img
                  src={require('../images/blog2.jpg')}
                  alt="Photography Basics"
                  className="img-fluid blog-image"
                />
                <div className="blog-content p-4">
                  <span className="badge bg-dark">Photography</span>
                  <span className="misc-info">
                    Published: 1 Week Ago | 25 Comments
                  </span>
                  <h3 className="blog-title">Photography Basics</h3>
                  <p className="blog-text">
                    How to photograph, and tips
                  </p>
                  <a href={PhotographyBasicsPDF} className="btn btn-success" download>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
