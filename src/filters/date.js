export default function(timestamp) {
    const newDate = new Date(timestamp*1000);
    
    const yyyy = newDate.toLocaleDateString().slice(0,4)
    const MM = (newDate.getMonth()+1<10 ? '0' : '')+(newDate.getMonth()+1);
    const dd = (newDate.getDate()<10 ? '0' : '')+newDate.getDate();
    const date = yyyy + '/' + MM + '/' + dd ;
    return date;
}