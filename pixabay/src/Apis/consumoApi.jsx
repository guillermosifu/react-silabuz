
export const getApi =async(valor)=>{
    let response =await fetch(`https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=${valor}&per_page=40`);
    let data =await response.json();
    return data
}