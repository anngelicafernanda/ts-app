export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

///operador ?? nullish-coalescing
/// 0 === false cuando se usa ||
/// '' === false cuando se usa ||
///false === false cuando se usa ||

createProduct(1,true, 12)
 const p1= createProduct(1,true,12)
 console.log(p1)
 const p2= createProduct(1,true)
 console.log(p2)
 const p3= createProduct(1,false, 0)
 console.log(p3)
