export function FormatDate(date){
    return new Date(date).toLocaleDateString()
}

export function ParseJsonData(dataList){
    // data must be of type ['','']
    return dataList.map(data => JSON.parse(data))
}