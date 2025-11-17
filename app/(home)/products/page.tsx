"use client"

import { useEffect } from "react";
import { toast } from "sonner";
import { getToken, onMessage, getMessaging, isSupported } from 'firebase/messaging'

import { app } from "@/app/firebase/firebaseConfig"
import { Card } from "@/components/ui/card";
import { Heart, Share2 } from "lucide-react";
import { Message } from "@/app/_components/Message";


type ProductsProps = {
  jwt: string
}

const Products = ({
  jwt
}: ProductsProps) => {

  useEffect(() => {
  async function setupMessaging() {
    const supported = await isSupported();
    if (!supported) return;

    const msg = getMessaging(app);

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(msg, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      });

      const url = `${process.env.NEXT_PUBLIC_API_URL}/fcm-token`
      const response = await fetch(
        url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`,
          },
          body: JSON.stringify({ token }),
        }
      )
      if (response.ok) {
        toast("fcm registered")
      }

      console.log("Token generated:", token);
    }

    onMessage(msg, (payload) => {
      console.log("incoming msg", payload);
      toast(<Message notification={payload.notification} />);
    });
  }

  setupMessaging();
}, []);


  const stories = [
    { id: 1, name: "Linda", color: "from-orange-400 to-pink-500" },
    { id: 2, name: "James", color: "from-blue-400 to-cyan-500" },
    { id: 3, name: "Michael", color: "from-green-400 to-emerald-500" },
    { id: 4, name: "Annabel", color: "from-amber-400 to-orange-500" },
  ];

  const products = [
    { id: 1, name: "Minimalist Chair", price: "Tsh 30,000", image: "🪑" },
    { id: 2, name: "Ceramic Vase", price: "Tsh 20,000", image: "🏺" },
    { id: 3, name: "Wool Blanket", price: "Tsh 45,000", image: "🧺" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 p-4">
          <h1 className="text-2xl font-bold">Products</h1>
        </header>

        {/* Instagram-style Stories */}
        <div className="px-4 py-6 overflow-x-auto">
          <div className="flex gap-4">
            {stories.map((story) => (
              <div key={story.id} className="flex flex-col items-center gap-2 shrink-0">
                <div className={`w-20 h-20 rounded-full bg-linear-to-br ${story.color} p-1`}>
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className={`w-[90%] h-[90%] rounded-full bg-linear-to-br ${story.color}`} />
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{story.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="px-4 space-y-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-0 shadow-sm">
              <div className="aspect-square bg-linear-to-br from-muted to-secondary flex items-center justify-center text-8xl">
                {product.image}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-accent font-bold">{product.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center active:scale-95 transition-transform">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center active:scale-95 transition-transform">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;