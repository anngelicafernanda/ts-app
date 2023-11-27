import { Product } from "./product.model";

// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;
//con omit, te crea el tipo pero sin los elemtos que colocas.
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
  }

  //solo te crea un tipo con los elementos que le estas indicando de Producto.
  type example = Pick<Product, 'color' | 'description'>

  export interface UpdateProductDto extends Partial<CreateProductDto> {  }

  type example2 = Required<Product>



