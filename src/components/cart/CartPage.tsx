import CartItems from "./cartitems/CartItems";
import CartMain from "./CartMain";
import EmptyCart from "./emptycart/EmptyCart";

function CartPage() {
    return(
        <div>

            <CartMain />
            {/* <EmptyCart /> */}
            <CartItems />

        </div>
    )
}

export default CartPage;