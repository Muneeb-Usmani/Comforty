export interface Category {
  _id: string;
  _type: "categories";
  title: string;
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  products: number;
}
