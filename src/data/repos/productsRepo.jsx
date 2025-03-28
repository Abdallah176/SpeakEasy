import { indexProducts } from "../apis/index-products"
import { showProducts } from "../apis/show-products";

export const productsRepo = {
    get_all_products : async () => {
        return await indexProducts();
    },

    show_product_details : async (id) => {
        return await showProducts(id);
    },

}