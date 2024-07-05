export const getAllAbrigo = async()=>{
    const response = await fetch('https://6687e1af0bc7155dc01985b7.mockapi.io/ropa');
    let res = await response.json();
    let data = res[[0]]
    return data;
}

