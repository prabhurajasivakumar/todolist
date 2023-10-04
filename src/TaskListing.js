import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TaskListing = () => {
    const [empdata, empdatachange] = useState(null);
    
    const navigate = useNavigate();
 
    
    
    

   
    const LoadEdit = (id) => {
        navigate("/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/list/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

   


    useEffect(() => {
        fetch("http://localhost:8000/list").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container ">
            <div className="card bg-warning-subtle ">
                <div className="card-title bg-warning-subtle">
                    <h2>Tasks To do</h2>

                </div>
                
                <div className="card-body bg-warning ">
                    <div className="divbtn">
                        <Link to="/create" className="btn btn-success " style={{marginLeft:'550px'}}>Add New Task +</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td><h5>Mark As Done</h5></td>
                                <td><h5>Title</h5></td>
                                <td><h5>description</h5></td>
                                <td><h5>Due Date</h5></td>
                                <td><h5>Priority</h5></td>
                                <td><h5>Activity</h5></td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td><input  type="checkbox"></input></td>
                                        <td >{item.name}</td>
                                        <td>{item.cont}</td>
                                        <td>{item.due}</td>
                                        
                                        <td> <p className="bg-danger text-white" style={{borderRadius:'5px'}}>{item.active}</p> <p className="bg-success text-white" style={{borderRadius:'5px'}}>{item.activem}</p> <p className="bg-info text-white" style={{borderRadius:'5px'}}>{item.activel}</p></td>
                                        
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-info">Edit Task</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Delete Task</a>
                                           
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default TaskListing;