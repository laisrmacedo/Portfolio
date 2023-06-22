import styled from "styled-components";
import logo from '../assets/Logo.png'
import map from '../assets/map-icon.png'
import clock from '../assets/clock-icon.png'
import { Link } from 'react-scroll';

const Container = styled.footer`
  height: 150vh;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  position: relative;
  /* border: 1px red solid; */
  img{
    filter: saturate(0);
  }


  .location{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px yellow solid; */
    p{
      margin-top: 60px;
      width: 100%;
      font-size: 48px;
      text-align: center;
      font-weight: 500;
      @media screen and (max-width: 481px){
        padding: 30px;
      }
    }
  }

  .info{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    /* border: 1px blue solid; */
    @media screen and (max-width: 481px){
      height: 40%;
      flex-direction: column;
      justify-content: space-evenly;;
      align-items: center;
      padding: 0 30px;
    }
    div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
      span{
        display: flex;
        align-items: start;
        gap: 10px;
        font-size: 20px;
        /* color: #943208; */
      }
    }

    button{
      background-color: #943208;
      color: #fff;
      border: none;
      padding: 20px 80px;
      font-size: 20px;
      &:hover{
        background-color: #908471;
        transition: background-color 300ms ease-in-out;
      }
      /* margin: 0 auto; */
      /* border-radius:  */
    }
  }

  .footer{
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 481px){
        padding: 0 30px;

      }
    img{
      height: 40px;
    }
    span{
      /* width: 50%; */
      display: flex;
      gap:60px;
      @media screen and (max-width: 481px){
        gap: 30px;
      }
    }

    a{
      color: #333;
      &:hover{
        color: #f8a481;
        cursor: pointer;
      }
      &:active{
        color: #908471;
      }
    }
    .me{
      color: #999
    }
  }
`


export const Footer = () => {

  return (
    <Container>
      <div className="location">
        <p>Need That Fresh Cut?</p>
        <div className="info">
          <div>
            <span><img src={map}/> 2118 Thornridge Cir. Syracuse, Connecticut 35624</span>
            <span>
              <img src={clock}/>
              <ul>
                <li>Mondays - Fridays: 9am - 7pm</li>
                <li>Saturdays: 10am - 6pm</li>
                <li>Sundays: Closed</li>
              </ul>
            </span>
          </div>
          <div>
            <button>Book An  Appointment</button>
          </div>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3032210215547!2d-76.15304750002252!3d43.047996926330555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f39bbf979a0d%3A0xd50ce2d7ad9545!2sSyracuse%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sde!4v1686587585138!5m2!1spt-BR!2sde" width={1200} height={300} loading={"lazy"} style={{border:0}} referrerpolicy={"no-referrer-when-downgrade"} allowfullscreen={""}></iframe>
        </div>
      </div>
      <div className="footer">
        <img src={logo}/>
        <span>
          <Link to="home" smooth={true} duration={500}>Home</Link>
          <Link to="about-us" smooth={true} duration={500}>About Us</Link>
          <Link to="services" smooth={true} duration={500}>Services</Link>
          <Link to="team" smooth={true} duration={500}>The Team</Link>
        </span>
        <p>	&copy; 2023 - All right reserved</p>
        <p className="me">Build by @laisrmacedo</p>
      </div>
    </Container>
  );
}