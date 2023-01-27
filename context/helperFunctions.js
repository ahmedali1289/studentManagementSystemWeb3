export default function checkForEmptyState(states) {
    if(states){
        states?.map(e=>{
            if(e?.value == '' || e?.value == undefined || e?.value == null){
                alert(e?.name,'is empty')
            }
        })
    }
}
