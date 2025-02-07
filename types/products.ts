export interface Product {
  _id: string;
  _type: "products";
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  category: { _ref: string; title: string };
  description: string;
  inventory: number;
  tags: string[];
}

export interface CartItem {
  id: string;
  _id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}
