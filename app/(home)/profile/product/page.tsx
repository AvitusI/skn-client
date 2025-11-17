"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";


type AddProductProps = {
  jwt: string
}

const AddProduct = ({
    jwt
}: AddProductProps) => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("")
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const router = useRouter()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !description || !price) {
      toast.error("Please fill in all fields");
      return;
    }

    const intPrice = Number(price)
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/product`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`,
          },
          body: JSON.stringify({ name, description, price: intPrice }),
        }
    )
    if (response.ok) {
        toast.success("Product added successfully!");
        router.push("/profile");
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 p-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => router.push("/profile")}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">Add Product</h1>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="p-4 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              className="bg-secondary border-0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              className="bg-secondary border-0"
              min="0"
              step="0.01"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              className="bg-secondary border-0 min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Product Image</Label>
            <div className="relative">
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border rounded-lg cursor-pointer bg-secondary hover:bg-muted/50 transition-colors"
              >
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                   />
                ) : (
                  <div className="flex flex-col items-center justify-center py-6">
                    <Upload className="w-12 h-12 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload image
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Submit Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;