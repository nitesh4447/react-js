import "../components/Home.css"
import { FaInstagram } from "react-icons/fa"
import { FaCompactDisc } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
export default function Home()
 {
  return (
    <div>
     <header>
      <ul>
      <h1><FaInstagram/></h1>
      <a href=""><li>Home</li></a>
        <a href=""><li>Blog</li></a>
        <a href=""><li>Service</li></a>
        <a href=""><li>Contact</li></a>
        <a href=""><li><FaCompactDisc /></li></a>
        <input placeholder="Email"></input>
        <button><FaRegUserCircle/>LOGIN</button>
      </ul>
     </header>
    </div>
  )
}
