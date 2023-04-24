/*eslint-disable */
import React from "react";

const Message = ({ message }) => {
    if (!message) { return <h4>No messages</h4>}
    return ( <>
        <div >
            <table>
                <tbody>
                    <tr >
                        <td className="car-desc-text">Client`s name` </td>    
                        <td className="car-detail">{message.name}</td>    
                    </tr>    
                    <tr>
                        <td className="car-desc-text">Client`s email:</td>      
                        <td className="car-detail" >{message.email}</td>        
                    </tr> 
                    <tr>
                        <td className="car-desc-text">Message:</td>      
                        <td className="car-detail" >{message.message}</td>        
                    </tr>    
                    
                </tbody>
            </table>
            </div>
        </>
    );
}
    
export default Message;