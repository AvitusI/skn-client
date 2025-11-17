import { ShoppingBag } from "lucide-react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 p-4">
          <h1 className="text-2xl font-bold">Cart</h1>
        </header>

        <div className="flex flex-col items-center justify-center h-[60vh] px-4">
          <ShoppingBag className="w-20 h-20 text-muted-foreground mb-4" />
          <p className="text-muted-foreground text-center">Your cart is empty</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;