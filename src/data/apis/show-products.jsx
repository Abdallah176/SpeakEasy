import axios from "axios"

export const showProducts = async (id) => {
let final = {};
    await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        final = res.data;
    })
    return final;
}