export const schema = yup.object().shape({

  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(30),
  
  role: yup.string().required().min(3).max(4)
  
  name: yup.string().required().min(2).max(100)
  mobile: yup.string().required().min(10).max(10)
  bio: yup.object().required()
  age: yup.date().required().min(13)

  profile_image: yup.object().required()
  profile_image_url: yup.string().required()

  addrress: yup.string().required().min(2).max(100)
  addrress_type: yup.string().required().min(2).max(100)

  street_name: yup.string().required().min(2).max(100)
  city: yup.string().required()
  state: yup.string().required()
  country: yup.string().required()
  pincode: yup.number().required()
  currency: yup.type().required()
  location: yup.type().string().required()

  product_id: yup.number().required()
  product_title: yup.string().required()
  product_images: yup.number().required()
  product_category: yup.string().required()
  product_keywords: yup.list().string().required()
  product_ingredient: yup.list().string().required()
  product_benifit: yup.list().string().required()

  cart_id: yup.number().required()
  cart_product_title: yup.number().required()
  cart_product_price: yup.number().required()
  cart_product_quantity: yup.number().required()
  cart_total: yup.number().required()

  payment_id: yup.number().required()
  payment_from: yup.number().required()
  payment_to: yup.number().required()
  payment_amount: yuup.number().required().min(100)

  order_id: yup.number().required()
  order_amount: yup.number().required()
  order_status: yup.string().required()




});

schema global = yup.object.shape({
  //active coma, nds inputs
}) 