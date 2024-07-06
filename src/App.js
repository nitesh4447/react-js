import { useState } from 'react'
import './App.css'

function App() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [city, setcity] = useState("")
  const [male, setmale] = useState("")
  const [married, setmarried] = useState(false)


  const handle = (e) => {
    e.preventDefault()

    let userdata = {
      name,
      email,
      password,
      male,
      city,
      married
    }
    console.log(userdata)

    setcity("")
    setemail("")
    setmale("")
    setmarried(false)
    setpassword("")
    setname("")
  }
  return (
    <>
      <div>
        <form action="" onSubmit={(e) => handle(e)}>
          <input type="text" placeholder='Full Name' value={name} onChange={(e) => setname(e.target.value)} /> <br /> <br />
          <input type="email" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} /> <br /> <br />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} /> <br /> <br />
          <select name="" id="" value={city} onChange={(e) => setcity(e.target.value)}>
            <option value="" >grade</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>  <br /> <br />
          male: <input type="radio" name='gender' value={male} onChange={() => setmale("male")} />
          female: <input type="radio" name='gender' value={male} onChange={(e) => setmale("female")} />  <br /> <br />
         
          <button>submit</button>
        </form>
      </div>
    </>
  )
}

export default App
//ab
