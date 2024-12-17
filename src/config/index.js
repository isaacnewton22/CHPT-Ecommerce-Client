export const registerFormControls = [
  {
    name: "userName",
    label: "Nom utilisateur",
    placeholder: "Entrez votre Nom utilisateur",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Entrez votre email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Mot de passe",
    placeholder: "Entrez votre pmot de passe",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Entrez votre email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Mot de passe",
    placeholder: "Entrez votre mot de passe",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  },
  {
    label: "Prix",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Entrez le prix du produit",
  },
  {
    label: "Prix de vente",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Entrez le prix de vente (optional)",
  },
  {
    label: "Disponible en stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Produits",
    path: "/shop/listing",
  },
  {
    id: "men",
    label: "Homme",
    path: "/shop/listing",
  },
  {
    id: "women",
    label: "Femme",
    path: "/shop/listing",
  },
  {
    id: "kids",
    label: "Enfant",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessoires",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Recherche...",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Accessories",
};

export const brandOptionsMap = {
  nike: "Nike",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M",
};

export const filterOptions = {
  category: [
    { id: "men", label: "Homme" },
    { id: "women", label: "Femme" },
    { id: "kids", label: "Enfants" },
    { id: "accessories", label: "Accessoires" },
  ],
  // brand: [
  //   { id: "nike", label: "Nike" },
  //   { id: "adidas", label: "Adidas" },
  //   { id: "puma", label: "Puma" },
  //   { id: "levi", label: "Levi's" },
  //   { id: "zara", label: "Zara" },
  //   { id: "h&m", label: "H&M" },
  // ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Adresse",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Entrez votre adresse",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Entrez votre ville",
  },
  {
    label: "Code pin",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Entrez toutes notes additionnelles",
  },
];
