import React ,  { useState } from 'react';
import '../styles/Style.css';
import { useNavigate } from 'react-router-dom';


export default function RemoveProduct() {
    const navigate = useNavigate();
    const [numberOfRows, setNumberOfRows] = useState(0);

    function handleSubmit() {
        localStorage.setItem('numdata', numberOfRows);
        navigate('/inventorylist/removeproductdetails');
    }

    return (
        <div className='addproduct'>
            <div className='addproduct1'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="row-count">Number of Products Going to Remove: </label>
                    <input id="row-count" type="number" required onChange={(e) => setNumberOfRows(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}






// import React from 'react';
// import { Form, Button } from 'react-bootstrap';
// import '../styles/Style.css';
// import { useNavigate } from 'react-router-dom';
// import {useEffect } from 'react';

// export default function RemoveProduct() {
//     const navigate = useNavigate();
//     const deleteItem = (event) => {
//         event.preventDefault()
//         const formData = event.target
//         const newProduct = {
//             code: formData.productcode.value
//         }
//         const list = JSON.parse(localStorage.getItem('productList'))
//         const removecode = newProduct.code
//         let i=0
//         let a=0
//         for(i=0;i<list.length;i++)
//         {
//             if(removecode==list[i].productCode)
//             {
//                 const filterList = list.filter((item) => item.productCode !== removecode)
//                 localStorage.setItem('productList', JSON.stringify(filterList))
//                 a++
//                 alert("Product Removed Successfully...!")
//                 navigate('/inventorylist/productslist')
//             }
//         }
//         if(a==0)
//         {
//             alert("Product code does not exist in the list , Please enter a correct code...!")
//         }
//     }
//     return (
//         <div className='removeproduct'>
//             <div className='removeproduct1'>
//                 <Form onSubmit={deleteItem}>
//                     <Form.Group controlId="formBasicProductCode">
//                         <Form.Label>Product Code</Form.Label>
//                         <Form.Control type="number" className='input1' placeholder="Enter the Product Code" name="productcode" />
//                         <Form.Text className="text-muted">
//                             Enter the Product code for remove the item
//                         </Form.Text>
//                     </Form.Group>
//                     <Button variant="primary" type="submit">
//                         Remove
//                     </Button>
//                 </Form>
//             </div>
//         </div>
//     )
// }