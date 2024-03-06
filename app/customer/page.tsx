import React from 'react';

const Customer = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/store/customer/2/', {cache: "no-cache"});
    const customer = await res.json();
    console.log(customer)
    return (
        <>
            <h1>{customer.name}</h1>
            <ul>
                {customer.orders.map(order =>
                    <li key={order.id}>
                        {order.id} {order.is_completed}
                    </li>)}
            </ul>
        </>
    );
};

export default Customer;