import React, { useState } from 'react'

export const Addtodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            props.showAlert("NONE OF THE FIELDS CAN BE BLANK!!", "danger")
        }
        else {
            props.showAlert("TASK ADDED!", "success")

            props.addtodo(title, desc);
            setTitle("");
            setDesc("");
        }

    }
    const myStyle = {
        marginTop: "3em",
        color: props.mode === "dark" ? 'white' : 'black',
        width: "55%"
    }
    const input = {
        background: props.mode === "dark" ? '#4a4948' : '#e6f0e8',
        color: props.mode === "dark" ? 'white' : 'black',
    }
    
    return (
        <div className="container" style={myStyle} >
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" style={input} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    {/* <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  className="form-control" id="desc"/> */}
                    <textarea name="desc" type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" style={input} id="desc" cols="30" rows="5"></textarea>
                </div>
                <div className="container text-center">
                <button type="submit" className="btn btn-sm btn-success">Submit</button>

                </div>
            </form>
            <hr />
        </div>
    )
}
