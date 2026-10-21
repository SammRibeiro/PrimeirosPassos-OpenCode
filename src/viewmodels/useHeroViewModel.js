// Supplies product and hero image content to the hero view.
import{product}from'../models/product';import{images}from'../models/images'
export default function useHeroViewModel(){return{product,image:images.hero}}
