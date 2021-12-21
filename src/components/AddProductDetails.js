import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import '../styles/Style.css';

export default function AddProductDetails() {
    const numberOfRows = JSON.parse(localStorage.getItem('numdata'))
    const list = JSON.parse(localStorage.getItem('productList'))
    if (list) {
        const list = JSON.parse(localStorage.getItem('productList'))
    } else {
        const list = []
        localStorage.setItem('productList', JSON.stringify(list))
    }

    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState(Array(numberOfRows).fill().map(() => {
        return ({
            productCode: 0,
            productName: '',
            quantity: 0,
        })
    }));

    function handleSubmit() {
        let list1 = JSON.parse(localStorage.getItem('productList'))
        let list2 = list1.concat(productDetails)
        localStorage.setItem('productList', JSON.stringify(list2))
        alert("Products Added Successfully....!")
        navigate('/inventorylist/productslist');
    }

    return (
        <div className="productlist">
            <form onSubmit={handleSubmit}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product Code</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productDetails.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <input
                                                type="number"
                                                required
                                                placeholder="Enter Product code"
                                                value={item.productCode || ''}
                                                onChange={(e) => {
                                                    const newDetails = [...productDetails];
                                                    newDetails[index].productCode = e.target.value;
                                                    setProductDetails(newDetails);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter Product Name"
                                                value={item.productName}
                                                onChange={(e) => {
                                                    const newDetails = [...productDetails];
                                                    newDetails[index].productName = e.target.value;
                                                    setProductDetails(newDetails);
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                required
                                                placeholder="Enter Product Quantity"
                                                value={item.quantity || ''}
                                                onChange={(e) => {
                                                    const newDetails = [...productDetails];
                                                    newDetails[index].quantity = e.target.value;
                                                    setProductDetails(newDetails);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <button type="submit">ADD</button>
            </form>
        </div>
    );
}