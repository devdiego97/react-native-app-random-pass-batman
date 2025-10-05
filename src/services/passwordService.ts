

export default  function generatePass(){
  let pass:string=""
 let caracteres:string="Aa@#123456789abcdefghijFGHIJKLMNOPQ!"
 let passwordLenght=8
  for (let Index=0;Index<passwordLenght;Index++){
    pass+=caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
    )
  }

  return pass




}