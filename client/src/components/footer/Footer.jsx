import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGoogleSquare,
} from 'react-icons/ai';
function Footer() {
  return (
    <section className='footer__section bg-black py-5 text-white overflow-hidden'>
      <div className='container'>
        <div className='row text-center'>
          <div className='offset-md-2 col-md-3'>
            <h5 className='text-capitalize mb-4'> about us</h5>
            <ul className='list-unstyled'>
              <li className='text-capitalize mb-3'>
                <a href='/' className='text-decoration-none text-white'>
                  about shop
                </a>
              </li>
              <li className='text-capitalize mb-3'>
                <a href='/' className='text-decoration-none text-white'>
                  our shop
                </a>
              </li>
              <li className='text-capitalize mb-3'>
                <a href='/' className='text-decoration-none text-white'>
                  our partners
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="col-md-3">
              <h5 className='text-capitalize mb-3'> quick links</h5>
              <ul className='list-unstyled'>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div> */}
          <div className='col-md-3'>
            <h5 className='text-capitalize mb-4'> important links</h5>
            <ul className='list-unstyled'>
              <li className='text-capitalize mb-3'>
                <a href='/' className='text-decoration-none text-white'>
                  privacy police
                </a>
              </li>
              <li className='text-capitalize mb-3'>
                <a href='/' className='text-decoration-none text-white'>
                  cookies police
                </a>
              </li>
              <li className='text-capitalize mb-3'>
                <a href='/' className='text-decoration-none text-white'>
                  terms & conditions
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-3 mx-auto'>
            <h5 className='text-capitalize mb-4'> contact info</h5>
            <ul className='list-unstyled d-flex flex-column align-items-center d-md-block'>
              <li className='mb-3'>
                <div className='footer__contact__listItem d-flex'>
                  <HiLocationMarker className='fs-5 me-3' />
                  <span className='text-capitalize'>address: cairo</span>
                </div>
              </li>
              <li className='mb-3'>
                <div className='footer__contact__listItem d-flex'>
                  <BsFillTelephoneFill className='fs-5 me-3' />
                  <span className='text-capitalize'>
                    phone:<br></br> 0123-456-789
                  </span>
                </div>
              </li>
              <li className='mb-3'>
                <div className='footer__contact__listItem d-flex'>
                  <MdAlternateEmail className='fs-5 me-3' />
                  <span className='text-capitalize'>
                    address: info.team4.com
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__copyright mt-4'>
          <p className='text-capitalize'>
            copyright &copy; 2022 created by team4
          </p>
          <ul className='list-unstyled d-flex'>
            <li className='me-4'>
              <FaFacebookSquare className='fs-4' />
            </li>
            <li className='me-4'>
              <AiFillTwitterCircle className='fs-4' />
            </li>
            <li className='me-4'>
              <AiFillInstagram className='fs-4' />
            </li>
            <li className='me-4'>
              <AiFillGoogleSquare className='fs-4' />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
