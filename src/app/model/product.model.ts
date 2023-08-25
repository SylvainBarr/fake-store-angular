import {Category, CategoryHttp} from "./category.model";

export interface ProductHttp{
  id: number,
  title: string,
  price: number,
  category: CategoryHttp,
  description: string,
  image: string
}

export interface Product{
  id: number,
  title: string,
  price: number,
  category: Category,
  description: string,
  image: string
}

export namespace Product{
  import fromCategoryHttpToCategory = Category.fromCategoryHttpToCategory;

  export function fromProductHttpToProduct(productHttp: ProductHttp): Product {
    return {
      id: productHttp.id,
      title: productHttp.title,
      price: productHttp.price,
      category: Category.fromCategoryHttpToCategory(productHttp.category),
      description: productHttp.description,
      image: productHttp.image
    }
  }
}
