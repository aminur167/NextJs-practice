import React from 'react';

const UserDetailPage = async({params}) => {
    const {userId} = await params;
    console.log('Show me userId',userId);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await res.json();
    return (
        <div>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UserDetailPage;