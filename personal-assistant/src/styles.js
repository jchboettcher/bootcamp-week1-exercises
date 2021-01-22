import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FancyButton = styled.button`
  background: lightgreen;
  border: black 1px;
  border-style: solid;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: green;
  }
`

export const OuterDiv = styled.div`
  padding: 10px 20px;
`

export const BackgroundDiv = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://prod-tab2017-media.gladly.io/img/backgrounds/b910c7db0caa4e4b95f87f69f80820d4.jpg');
`

export const WeatherDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border: rgba(40,40,40,0.5) 4px;
  border-style: solid;
  text-align: center;
  position: fixed;
  width: 400px;
  height: 490px;
  top: 50vh;
  left: 50vw;
  margin-top: -294px;
  margin-left: -204px;
  /* background-color: rgba(108,128,150,0.8); */
  animation: color-change 40s infinite;
  position: center;
  @keyframes color-change {
    0% { background-color: rgba(100,128,150,0.8); }
    20% { background-color: rgba(128,128,100,0.8); }
    40% { background-color: rgba(100,128,128,0.8); }
    60% { background-color: rgba(150,100,128,0.8); }
    80% { background-color: rgba(128,150,100,0.8); }
    100% { background-color: rgba(108,128,150,0.8); }
  }
`

export const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const EvenEntryDiv = styled.div`
  padding: 10px 10px;
  border: black 1px;
  border-style: none solid solid solid;
  background-color: rgb(200,200,200);
  display: flex;
  justify-content: space-between;
`

export const OddEntryDiv = styled.div`
  padding: 10px 10px;
  border: black 1px;
  border-style: none solid solid solid;
  background-color: rgb(230,230,230);
  display: flex;
  justify-content: space-between;
`

export const TopEntryDiv = styled.div`
  margin: 10px 0 0 0;
  padding: 10px 10px;
  border: black 1px;
  border-style: solid;
  background-color: rgb(200,200,200);
  display: flex;
  justify-content: space-between;
`

export const TodoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: url('https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png');
  position: fixed;
  width: 60px;
  height: 60px;
  border: black 1px;
  border-style: solid;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50px;
  background-color: rgba(20,20,255,0.8);
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 35px;
  top: 100vh;
  left: 100vw;
  margin-top: -90px;
  margin-left: -90px;
  cursor: pointer;
  transition: width 0.5s ease, margin-left 0.5s ease;

  &:hover {
    width: 150px;
    margin-left: -180px;
  }
`

export const WelcomeLink = styled(Link)`
  color: blue;
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover {
    color: orange;
  }
`
