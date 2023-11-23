import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <div class='container'>
      <footer class='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <div class='col-md-4 d-flex align-items-center'>
          <a
            href='/'
            class='mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1'
          ></a>
          <span class='mb-3 mb-md-0 text-body-secondary'>
            © 2023 E-Commerce Company, Inc
          </span>
        </div>

        <ul class='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li class='ms-3'>
            <a class='text-body-secondary' href='#'>
              <FaInstagram />
            </a>
          </li>
          <li class='ms-3'>
            <a class='text-body-secondary' href='#'>
              <FaSquareXTwitter />
            </a>
          </li>
          <li class='ms-3'>
            <a class='text-body-secondary' href='#'>
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
