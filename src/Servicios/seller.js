export async function getSeller(q){
    
    const res = await fetch(`https://api.mercadolibre.com/users/${q}`)
    const resJson = await res.json()
    return resJson
    
}
export default{
    getSeller
}