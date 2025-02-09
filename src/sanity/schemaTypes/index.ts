import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
//import productSchema from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  //types: [productSchema],
   types: [product]
}
