import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import "../style-default/style-footer.css"

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        
        <Container fluid>
        <footer className="page-footer font-small special-color-dark">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h4 className="text-uppercase mb-4">Footer Content</h4>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <h4 className="text-uppercase">Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link</a>
                </li>
                <li>
                  <a href="#!">Link</a>
                </li>
                <li>
                  <a href="#!">Link</a>
                </li>
                <li>
                  <a href="#!">Link</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h4 className="text-uppercase">Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link</a>
                </li>
                <li>
                  <a href="#!">Link</a>
                </li>
                <li>
                  <a href="#!">Link</a>
                </li>
                <li>
                  <a href="#!">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a href="fb.com" className="btn-floating btn-fb mx-1">
                <i className="fab fa-facebook-f fb-icon"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="fb.com" className="btn-floating btn-tw mx-1">
                <i className="fab fa-twitter twitter-icon"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="fb.com" className="btn-floating btn-gplus mx-1">
                <i className="fab fa-google-plus-g gg-icon"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="fb.com" className="btn-floating btn-li mx-1">
                <i className="fab fa-linkedin-in in-icon"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="fb.com" className="btn-floating btn-li mx-1">
                <i className="fab fa-youtube youtube-icon"> </i>
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center py-3 " />
      </footer>
     
        </Container>
        
       
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
