import Home from './Home.js'
import About from './About.js'
import MyProjects from './MyProjects.js'
import MyBestFriend from './MyBestFriend.js'
import {Route,Routes,Link,useParams} from 'react-router-dom'

function App(){
  return (
    <>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/projects'>My Projects</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<MyProjects/>}/>
      <Route path='/bff/:name' element={<MyBestFriend hobby="swim"/>}/>
    </Routes>
    </>
  )
}

export default App