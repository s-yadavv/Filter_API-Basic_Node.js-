export const filterDatabyPath = (data,locationType,locationName) =>{
    return data.filter( (eachobj) => {
        return eachobj[locationType].toLowerCase() === locationName.toLowerCase();
    })
}