import React,{useState} from 'react'
export const App = () => {
  const [data,setData]=useState([{name:"nikhil",id:"79"}])
  const sub=(e)=>{
    e.preventDefault()
    setData([...data,{name:[e.target.name.value],id:[e.target.id.value]}])
    e.target.name.value=""
    e.target.id.value=""
  }
  const del=(id)=>{
    var newlist=data.filter((e)=>{
      return e.id!==id;
    })
    
  setData(newlist)
  }
  const [isedit,setisedit]=useState(0)
  const [edititem,setEdititem]=useState({})
 const setisEdit=(id)=>{
  setisedit(id)
  var eitem=data.filter((e)=>{
    return e.id===id
  })
  setEdititem({...edititem,name:eitem[0].name,id:eitem[0].id})

 }

const namechange=(e)=>{
  setEdititem({...edititem,name:e.target.value})
}

const edt=(e)=>{
  e.preventDefault()
  var newlist=data.map((ele)=>{
    if(ele.id===edititem.id)
    {
      return edititem
    }
    else{
      return ele
    }
  })
  setData(newlist)
  setisedit(0)
}

  return(
    <div>
      <center>
        {data.length===0 && <h1>No data to display</h1>}
        {data.map((e,i)=>{
          return(
            <div key={i}>
              <li>{e.name}</li>
              <li>{e.id}</li>
              {isedit===e.id && 
                    <form onSubmit={edt}>
                    <input type="text" placeholder='name' name="name" value={edititem.name} onChange={namechange} /><br/>
                    <input type="text" placeholder='id' name="id" value={edititem.id} readOnly  /><br/>
                    <input type="submit" />
                  </form>}
              <button onClick={()=>setisEdit(e.id)}>edit</button>
              <button onClick={()=>del(e.id)}>delete</button>
            </div>
          )
        })}

      <form onSubmit={sub}>
        <input type="text" placeholder='name' name="name" /><br/>
        <input type="text" placeholder='id' name="id" /><br/>
        <input type="submit" />
      </form>
      </center>
         
    </div>
  )
}
export default App