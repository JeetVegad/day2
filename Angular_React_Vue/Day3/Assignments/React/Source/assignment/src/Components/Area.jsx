import React , {useState} from "react";

const Area = () =>{
    const [height,setHeight] = useState(0);
    const [width,setWidth] = useState(0);
    const [result,setResult]= useState(0);

    const calculate = () =>{
        setResult(height * width);
    };
    return(
        <div>
            <h1 className="mb-3">Find Area of Rectangle </h1>
            <div>
                <label className="form-label">Enter hieght </label>
                <input 
                className="form-control"
                type="number"
                value={height}
                onChange ={(e)=>setHeight(e.target.value)}
                id="hieght"
                />
    </div>
    <div>
<label className="form-label">Enter width </label>
                <input 
                className="form-control"
                type="number"
                value={width}
                onChange ={(e)=>setWidth(e.target.value)}
                id="width"
                />
                
            </div>
            <button className="mt-5 btn btn-primary" onClick={calculate}>Calculate</button>
            <br />
            {result != 0 && (<label className="mt-3 text-success">
                Area of Rectangle is {result}
            </label>)}
            
        </div>
    )
}

export default Area;