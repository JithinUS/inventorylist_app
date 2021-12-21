import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Style.css';
import { useState } from 'react';


export default function AddProduct() {
    const navigate = useNavigate();
    const [numberOfRows, setNumberOfRows] = useState(0);

    function handleSubmit() {
        localStorage.setItem('numdata', numberOfRows);
        navigate('/inventorylist/addproductdetails');
    }

    return (
        <div className='addproduct'>
            <div className='addproduct1'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="row-count">Number of Products: </label>
                    <input id="row-count" type="number" required onChange={(e) => setNumberOfRows(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
