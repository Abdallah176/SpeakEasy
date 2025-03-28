import axios from "axios";

export const indexProducts = async () => {
    let final = [];
    await axios.get("https://fakestoreapi.com/products").then((res)=> {
        final = res.data;
    }) 
    return final;
}
