import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import '../styles/Style.css';


export default function RemoveProductDetails() {
    const numberOfRows = JSON.parse(localStorage.getItem('numdata'))
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState(Array(numberOfRows).fill().map(() => {
        return ({
            productCode: 0,
            quantity: 0,
        })
    }));

    function handleSubmit() {
        
        localStorage.setItem('removeproductList', JSON.stringify(productDetails))
        const removelist = JSON.parse(localStorage.getItem('removeproductList'))
        let productlist = JSON.parse(localStorage.getItem('productList'))
        let a = 0
        for (let i = 0; i < removelist.length; i++) {
            for (let j = 0; j < productlist.length; j++) {
                if (removelist[i].productCode == productlist[j].productCode) {
                    const removecode = removelist[i].productCode
                    let productlist = JSON.parse(localStorage.getItem('productList'))
                    const filterList = productlist.filter((item) => item.productCode !== removecode)
                    localStorage.setItem('productList', JSON.stringify(filterList))
                    a++
                    alert("Product Removed Successfully...!")
                    navigate('/inventorylist/productslist')
                }
            }
        }
        if (a == 0) {
            alert("Product code does not exist in the list , Please enter a correct code...!")
        }


    }

    return (
        <div className="productlist">
            <form onSubmit={handleSubmit}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product Code</th>
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
                <button type="submit">REMOVE</button>
            </form>
        </div>
    );
}