import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './selectedItem.css';



const SelectedItem = props => {
    const [count] = useState(props);
    const [price, setPrice] = useState();
    const [availability, setAvailability] = useState();

    useEffect(() => {
        setAvailability(count.location.state.available);
        setPrice(count.location.state.price)
    }, []);
    //function to handle the change of price
    const handleChange = (e) => {
        console.log(e.target.value)
        setPrice(e.target.value);
    }

    //function to change the availability
    const changeValue = () => {
        setAvailability(!availability);
    }
    console.log(price, "updated price", availability)
        return (
            <div className="cardItem" >
                < img src={count.location.state.image} alt="Image_unavailable" style={{ width: "100%" }} />
                <h1>{count.location.state.itemName}</h1>
                <label><b>Price:</b><input  className="cost" onChange={handleChange} defaultValue={price}  /> </label>

                <p>Item {availability == true ? ' is_Available' : 'Not_Available'}</p>
                <button onClick={changeValue}>Click to change availability </button>{' '}
                <Link to="/"><button style={{color:'red'}} ><b>Back To Menu List</b></button></Link>
            </div>
        );
    
}
export default SelectedItem;
