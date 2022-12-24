import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'
import {handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function laptop(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('laptop');
    const [hotlaptop, setHotlaptop] = useState([])
    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:4000/products/${name}`)
                setHotlaptop(data)
            } catch (error) {
            }
        }
        FetchApi()
    }, [])

   

    return (
        <section id="hotsale laptop">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                    hotlaptop ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotlaptop)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default laptop;