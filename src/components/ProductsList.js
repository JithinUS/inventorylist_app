import React from 'react';
import { Table } from 'react-bootstrap';
import '../styles/Style.css';

function ProductsList() {
    let list = JSON.parse(localStorage.getItem('productList'))
    if (list){
        list = JSON.parse(localStorage.getItem('productList'))
    }else {
        list = []
    }
    if (list.length < 1) {
        return (
            <div className="productlist">
                <p className='p1_ProductList'>Empty List</p>
            </div>
        )
    }
    else {
        return (
            <div className="productlist">
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
                            list.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.productCode}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default ProductsList
















// import React from 'react';
// import { Table } from 'react-bootstrap';
// import '../styles/Style.css';

// function ProductsList() {
//     let list = JSON.parse(localStorage.getItem('productList'))
//     if (list.length < 1) {
//         return (
//             <div className="productlist">
//                 <p className='p1_ProductList'>Empty List</p>
//             </div>

//         )
//     }
//     else {
//         return (
//             <div className="productlist">
//                 <Table striped bordered hover variant="dark">
//                     <thead>
//                         <tr>
//                             <th>Index</th>
//                             <th>Product Code</th>
//                             <th>Product Name</th>
//                             <th>Quantity</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             list.map((item, index) => {
//                                 return (
//                                     <tr>
//                                         <td>{index + 1}</td>
//                                         <td>{item.code}</td>
//                                         <td>{item.product_name}</td>
//                                         <td>{item.qty}</td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                 </Table>
//             </div>
//         )
//     }
// }
// export default ProductsList
