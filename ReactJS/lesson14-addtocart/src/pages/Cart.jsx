import { useCart } from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();
    if (isEmpty) return <div className="d-flex justify-content-center">
        <img src="https://cdnl.iconscout.com/lottie/premium/thumb/shopping-bag-6866084-5624247.gif" alt="err" />
    </div>;
    return (
        <>
            <h1 className="text-center my-4">Product cart</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Count</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {items.map(i => (

                        <tr>
                            <th scope="row">1</th>
                            <td><img width={70} src={i.images[0]} alt="" /></td>
                            <td>{i.title}</td>
                            <td>{i.price*i.quantity}$</td>
                            <td><button onClick={() => updateItemQuantity(i.id, i.quantity - 1)} className="btn btn-danger">-</button><span className="mx-3">{i.quantity}</span><button onClick={() => updateItemQuantity(i.id, i.quantity + 1)} className="btn btn-success">+</button></td>
                            <td><button onClick={()=>{removeItem(i.id)}} className="btn btn-danger">X</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </>
    )
}

export default Cart