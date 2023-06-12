import styled from "styled-components";
import logo from '../assets/Logo.png'

const Container = styled.footer`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px red solid;
  
  .location{
    width: 100%;
    height: 70%;
    border: 1px yellow solid;
    display: flex;
    flex-wrap: wrap;
    p{
    width: 100%;
    }
    div{
    width: 50%;

    }
  }

  .footer{
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px blue solid;
    justify-content: space-evenly;
    
    img{
      height: 40px;
    }
    span{
      /* width: 50%; */
      display: flex;
      /* justify-content: end; */
      gap:60px;
    }

    a{
      color: #333;
    }
  }
`


export const Footer = () => {

  return (
    <Container>
      <div className="location">
        <p>Need That Fresh Cut?</p>
        <div>
          <span>2118 Thornridge Cir. Syracuse, Connecticut 35624</span>
          <ul>
            <li>Mondays - Fridays: 9am - 7pm</li>
            <li>Saturdays: 10am - 6pm</li>
            <li>Sundays: Closed</li>
          </ul>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3032210215547!2d-76.15304750002252!3d43.047996926330555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f39bbf979a0d%3A0xd50ce2d7ad9545!2sSyracuse%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sde!4v1686587585138!5m2!1spt-BR!2sde" width={600} height={350} loading={"lazy"} style={{border:0}} referrerpolicy={"no-referrer-when-downgrade"} allowfullscreen={""}></iframe>
        </div>
      </div>
      <div className="footer">
        <img src={logo}/>
        <span>
          <a>Home</a>
          <a>About Us</a>
          <a>The Team</a>
          <a>Services</a>
        </span>
        <p>2023 - All right reserved</p>
      </div>
    </Container>
  );
}