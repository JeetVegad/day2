import React, { useState } from 'react';

function Greater() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [res, setRes] = useState("")

    const check = () => {
        if (num1 > num2) {
            setRes(num1);
        } else {
            setRes(num2);
        }
    }
    return (
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
                <button className="btn text-black bg-light my-3" type="button"
                    onClick={check}>Check
                </button>
                <div className='mb-5'>
                    {(res === num1) && <h1 className='text-white'>{num1} is greater than {num2}</h1>}
                    {(res === num2) && <h1 className='text-white'>{num2} is greater than {num1}</h1>}
                </div>
            </form>
        </div>
    )
}

export default Greater