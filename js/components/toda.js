export const getAllRopa = async()=>{
    const response = await fetch('https://6687e1af0bc7155dc01985b7.mockapi.io/ropa');
    return await response.json();
}