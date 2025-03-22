import React from 'react';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Home.css';

const Home = () => {
  return (
    <Layout>
      <div>
        <header className="header">
          <div className="container about">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>MR. SACHIN KUMAR AMAN</h2>
                <h3 className="photographer-title">PHOTOGRAPHER</h3>
                <blockquote className="blockquote-content">
                  “When you photograph people in color, you photograph their clothes. But when you photograph people in Black and white, you photograph their souls!”
                  <span>- TED GRANT</span>
                </blockquote>
              </div>
            </div>
          </div>
        </header>
      </div>
    </Layout>
  );
};

export default Home;
