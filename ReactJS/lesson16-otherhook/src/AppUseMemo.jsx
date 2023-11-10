import React, { useMemo, useState } from 'react'
import user from './data/user';

const AppUseMemo = () => {

    const [email, setEmail] = useState();
    const [count, setCount] = useState(0);
    
    const userRows = () => {
        console.log('user list is running');
        return (
            user.map(i => (
                <li onClick={() => { setEmail(i.email) }} key={i.id}>{i.name}</li>
            ))
        )
    }
    const userRowsMemo = useMemo(()=>userRows(),[email])
    return (
        <div>
            <div>
                {count}
                <button onClick={() => {
                    console.log("count is runngin");
                    setCount(count + 1)
                }}>increment</button>
            </div>
            {email}
            {userRowsMemo}
        </div>
    )
}

export default AppUseMemo