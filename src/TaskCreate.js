import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TaskCreate = () => {

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[cont,contchange]=useState("");
    const[due,duechange]=useState("");
    
    const[validation,valchange]=useState(false);
    const[active,activechange]=useState("High priority");
    const[activem,activemchange]=useState("Medium priority");
    const[activel,activelchange]=useState("Low priority");


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={name,cont,due,active,activem,activel};
      

      fetch("http://localhost:8000/list",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title bg-warning-subtle">
                                <h2 style={{marginLeft:'220px'}}>Create New Task</h2>
                            </div>
                            <div className="card-body bg-warning">

                                <div className="row">

                                   

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                        {name.length==0 && validation && <span className="text-danger">Enter Task title</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input value={cont} onChange={e=>contchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Due Date</label>
                                            <input value={due} type="date" onChange={e=>duechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">checked to set as high priority</label>
                                            
                                        </div>
                                        <div className="form-check">
                                        <input checked={activem} onChange={e=>activemchange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">checked to set as mid priority</label>
                                            
                                        </div>
                                        <div className="form-check">
                                        <input checked={activel} onChange={e=>activelchange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">checked to set as low priority</label>
                                            
                                        </div>
                                    </div>

                                   
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default TaskCreate;
