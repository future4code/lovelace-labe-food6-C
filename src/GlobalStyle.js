import {createGlobalStyle} from 'styled-components'
import Logo from './img/logo-future-eats-invert_2021-09-06/logo-future-eats-invert.png'

const GlobalStyle = createGlobalStyle`
  .olho{
  	position: absolute;
  	left: 16.5vw;
  }

  .loadContainer{
    display: flex;
    justify-content: center;
    margin-top: 10vh;
  }

  .carregando{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid red;
    background-image: url(${Logo});
    background-position: center;
    animation: girar 1s infinite;   
  }

  @keyframes girar{
    from{
      transform: scale(0)
    }
    to{
      transform: scale(1);
    }
  }
`
export default GlobalStyle