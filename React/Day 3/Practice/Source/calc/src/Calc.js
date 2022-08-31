import React,{ useState } from "react";
const Calc = () =>{
    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [res, setRes] = useState("")
    const [opr, setOpr] = useState()
    const Calculate = () =>{
        if(opr){
            switch(opr){
                case "add":
                    setRes(num1 + num2);
                    break;

                    case "sub":
                    setRes(num1 - num2);
                    break;

                    case "mul":
                    setRes(num1 * num2);
                    break;

                    case "div":
                    setRes(num1 / num2);
                    break;

                    default :
                    setRes(0);
            }
        } else {
            setRes("err")
        }
    }
    return(
        <div className="container bg-dark d-flex justify-content-center ">
            <form className="d-flex flex-column align-items-center mt-5">
            <div>
                  <label className="text-white mb-2">Number 1:</label>
                  <input className="form-control mt-2 mb-4" type="number" value={num1}
                  onChange={(e) => setNum1(parseInt(e.target.value))}
                  ></input>
             </div>
             <div>
                  <label className="text-white mb-2">Number 2:</label>
                  <input className="form-control mt-2 mb-4" type="number" value={num2}
                  onChange={(e) => setNum2(parseInt(e.target.value))}
                  ></input>
             </div>
             <div className="d-flex gap-3">
                 <div className="form-check">
                     <input type="radio" name="operater" className="form-check-input" value="add"
                     onClick={(e)=>setOpr(e.target.value)}>
                     </input>
                     <label className="text-white">Addition</label>
                 </div>
                 
                 <div className="form-check">
                     <input type="radio" name="operater" className="form-check-input" value="sub"
                     onClick={(e)=>setOpr(e.target.value)}>
                     </input>
                     <label className="text-white">Substraction</label>
                 </div>

                 <div className="form-check">
                     <input type="radio" name="operater" className="form-check-input" value="mul"
                     onClick={(e)=>setOpr(e.target.value)}>
                     </input>
                     <label className="text-white">Multiply</label>
                 </div>

                 <div className="form-check">
                     <input type="radio" name="operater" className="form-check-input" value="div"
                     onClick={(e)=>setOpr(e.target.value)}>
                     </input>
                     <label className="text-white">Divide</label>
                 </div>
             </div>
             <button className="btn text-black bg-light my-3" type="button"
             onClick={Calculate}>Calculate

             </button>
             {
                 (res === "err" ? <label className="text-danger">Error 
                 <span className="text-white">  Please choose an operater</span></label>:
                 <label className="text-white mb-4">Result is : {res}</label>)
             }
            </form>
        </div>
)
}

export default Calc