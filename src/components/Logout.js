import React from 'react'

const Logout = () => {
    const handleClick = ()=>{
        localStorage.removeItem("token")
        window.location.reload();
    }
    
    return (
        <>
        <div>
            <button onClick={handleClick}></button>
        </div>
        </>
    )
}

export default Logout