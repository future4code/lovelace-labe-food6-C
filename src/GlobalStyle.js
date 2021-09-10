import {createGlobalStyle} from 'styled-components'
import Logo from './img/logo-future-eats-invert.png'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }

  
  .loading{
    border: 2px solid lightgray;
    width: 50px;
    height: 50px;
    border-top-color: red;
    border-radius: 50%;
    animation: girar 1s infinite;
    margin: 15px;
  }

  @keyframes girar{
    to{
      transform: rotate(1turn)
    }
  } 

  .loadContainer{
    display: flex;
    justify-content: center;
    margin-top: 10vh;
  }

  
  .legenda{
  position: absolute;
  margin-top: -30vh;
  color: whitesmoke;
  font-weight: bolder;
  background-color: red;
  padding: 30px;
  border-radius: 10px;
  animation: legenda 5s infinite;
  cursor: pointer; 
}

  @keyframes legenda{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }  

}
`
export default GlobalStyle