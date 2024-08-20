const getDataFromLocalStore = () => {
    const getData = localStorage.getItem('items');
    if(getData){
        return JSON.parse(getData)
    }
    else{
        return [];
    }
}

const setDataFromLocalStore = (id) =>{
    const oldData = getDataFromLocalStore();
    const exist = oldData.find(data => data == id);
    if(!exist){
        oldData.push(id);
        localStorage.setItem('items', JSON.stringify(oldData))
    }
}

export {getDataFromLocalStore, setDataFromLocalStore}