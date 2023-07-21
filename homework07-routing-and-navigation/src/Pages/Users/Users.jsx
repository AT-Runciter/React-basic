/*import { Link } from 'react-router-dom';

export default function Users() {
    return (
        <div className="Main">
            <h1>USERS</h1>
            <ul>
                <li><Link to='/users/walles'>John Walles</Link></li>
                <li><Link to='/users/beanit'>Jim Beanit</Link></li>
            </ul>
        </div>
    )
}*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users data:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="Main">
            <h1>USERS</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
