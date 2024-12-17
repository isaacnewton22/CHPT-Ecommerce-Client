import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import axios from "axios";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  const [imageData, setImageData] = useState("")

  useEffect(() => {
    if (product !== undefined && product.image) {
      axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/image/download/${product.image}`).then((response) => {
        setImageData(  response.data.data)
      })
    }

  }, []);

  useEffect(() => {
  //  console.log("imageData : ", imageData)
  }, [imageData]);

  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={`data:image/*;base64,${imageData}`}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-bold">${product?.salePrice}</span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
            className="bg-blue-600 hover:bg-slate-700"
          >
            Edit
          </Button>
          <Button className="bg-red-600 hover:bg-slate-700" onClick={() => handleDelete(product?._id)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default AdminProductTile;
