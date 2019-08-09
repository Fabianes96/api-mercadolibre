export async function getItem(q){

    const res = await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${q}`)
    const resJson = await res.json()
    return resJson    
}
export default{
    getItem
}