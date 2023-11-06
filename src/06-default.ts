
export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock,
    isNew
  }
}

///operador ?? nullish-coalescing
/// 0 === false cuando se usa ||
/// '' === false cuando se usa ||
///false === false cuando se usa ||

createProduct(1,true, 12)
 const p1= createProduct(1,true,12)
 console.log(p1)
 const p2= createProduct(1)
 console.log(p2)
 const p3= createProduct(1,false, 0)
 console.log(p3)
 const p4= createProduct(1,false, 100)
 console.log(p4)
 const p5= createProduct(5,true)
 console.log(p5)
