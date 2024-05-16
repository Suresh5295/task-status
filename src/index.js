
import ReactDOM from 'react-dom/client';
import "./style.css"
import one from "./assets/images/1.jpg"


const root = ReactDOM.createRoot(document.getElementById('root'));

function Search()
{
  return(
    <div className='ctr'><input type="text" placeholder="Search" style={{width:"410px" ,height:"50px"}} ></input>

    </div>
  )
}

function Contact(props)
{
  return(
  
    
    <div className='container'>
     
          <img src={props.image} alt="contact"  style={{width:"50px",height:"60px"}}></img>
  
    <div className='left'>
    <h5>{props.name}</h5>
    <p>{props.status}</p>
    </div>
    <div className='right'>
    <p>{props.rating}</p>
    <p>{props.time}</p>
    </div>
    </div>
    
  )
}

var namelist =[
  {
    image :one ,
     name:"suresh",
    status : "Busy Work",
    rating : "⭐",
    time :"10:27"
  },
  {
    image :one ,
     name:"kamal",
    status : "Urgent calls",
    rating : "⭐",
    time :"20:33"
  },
  {
    image :one ,
     name:"Keerthi",
    status : "Sleep mode",
    rating : "⭐",
    time :"21:20"
  },
  {
    image :one ,
     name:"Ramya",
    status : "Available now",
    rating : "⭐",
    time :"18:17"
  },
]

root.render(



  <div className='center'>
    <Search></Search>
    {
       
       
      namelist.map(function(item){
        return(
          
    <Contact  image={item.image} name={item.name} status={item.status} rating={item.rating} time={item.time}></Contact>
        )
      })
    }
 </div>
)
   
