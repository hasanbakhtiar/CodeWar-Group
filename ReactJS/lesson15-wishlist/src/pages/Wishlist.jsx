import { Link } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";

const Wishlist = () => {

    const {
        isWishlistEmpty,
        totalWishlistItems,
        items,
        removeWishlistItem,
      } = useWishlist();
    
      if (isWishlistEmpty) return <p>Your wishlist is empty</p>;
    

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
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                {items.map((i,c) => (
                    <tr>
                    <th scope="row">{c+1}</th>
                    <td><img width={70} src={i.images[0]} alt="" /></td>
                    <td><Link to={`/products/${i.id}`}>{i.title}</Link></td>
                    <td>{i.price}$</td>
                    <td><button onClick={()=>{removeWishlistItem(i.id)}} className="btn btn-danger">X</button></td>
                </tr>
                       ))}
                </tbody>
            </table>
        </>
    )
}

export default Wishlist