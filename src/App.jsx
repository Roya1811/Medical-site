import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2-card'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Counter from './components/Counter'
import Home from './view/pages/Home'




function App() {
  const [ data,setData] = useState([])
  useEffect(( )=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
},[])
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
      {/* <Counter /> */}
      {/* <Home />



    {data.map((item) => (<div>{item.title}</div>))} */}
 
    </div>
  );
}

export default App;
