export const getDataByQueryParam = (data,obj) => {

    const { continent , country ,isOpenToPublic }  = obj;

    if(continent){
        data = data.filter(destinations=> 
            destinations.continent.toLowerCase() === continent.toLowerCase()
        )
    }
    if(country){
        data = data.filter(destinations=> 
            destinations.country.toLowerCase() === country.toLowerCase()
        )
    }
    if(isOpenToPublic){
        data = data.filter(destinations => {
            return destinations.isOpenToPublic === JSON.parse(isOpenToPublic.toLowerCase())
            //console.log(JSON.parse(isOpenToPublic),destinations.isOpenToPublic); 
        }
        )
    }
    return data
}