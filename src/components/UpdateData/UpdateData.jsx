import { useContext, useEffect, useState } from "react";
import { DataRoutesContext } from "../../context/DataRoutes";
import { DataApiContext } from "../../context/DataApi";
import FormProduct from '../Forms/FormProduct/FormProduct';

const UpdateData = () => {

    const { pathname } = useContext(DataRoutesContext);

    const { product, client, seller, category, sale } = useContext(DataApiContext);

    const [data, setData] = useState();

    const endpointID = Number(pathname.slice(-1));
    const endpointName = pathname.slice(6).slice(0, -2);



    useEffect(() => {

        if (endpointName === 'product') {
            let data = product.filter((item) => {
                return Number(item.id) === endpointID;
            })
            setData(data);
        }

        if (endpointName === 'client') {
            let data = client.filter((item) => {
                return Number(item.id) === endpointID;
            })
            setData(data);
        }

        if (endpointName === 'seller') {
            let data = seller.filter((item) => {
                return Number(item.id) === endpointID;
            })
            setData(data);
        }

        if (endpointName === 'category') {
            let data = category.filter((item) => {
                return Number(item.id) === endpointID;
            })
            setData(data);

        }

        if (endpointName === 'sale') {
            let data = sale.filter((item) => {
                return Number(item.id) === endpointID;
            })
            setData(data);

        }



    }, [])




    return (
        <>
            {data != undefined ? (

                <>

                    {product != undefined && endpointName === 'product' && data != undefined && <FormProduct data={data}/> }

                    {client != undefined && endpointName === 'client' && <h1> Form Client</h1>}

                    {seller != undefined && endpointName === 'seller' && <h1> Form Seller</h1>}

                    {category != undefined && endpointName === 'category' && <h1> Form Category</h1>}

                    {sale != undefined && endpointName === 'sale' && <h1> Form Sale</h1>}



                </>




            ) : 'Loading'}





        </>
    )
}

export default UpdateData;














