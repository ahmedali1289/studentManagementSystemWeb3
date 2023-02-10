import { showToast } from "../components/Toaster"

export default function checkForEmptyState(states) {
    if(states){
        states?.map(e=>{
            if(e?.value == '' || e?.value == undefined || e?.value == null){
                showToast(e?.name+' is empty','error')
            }
        })
    }
}
