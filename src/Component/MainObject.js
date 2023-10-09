export const commonFunc = {
    alert: (alertVal) => {
        return alert(alertVal)
    },
    input : (inputDetails,doSomething) =>{
        if(inputDetails.category == 'input'){
        return <input type={inputDetails.type} key={inputDetails.id} id={inputDetails.id} onBlur={(e)=>{doSomething(e,inputDetails)}}/>
        }
    },
    button : (btnDetails,doSomething) =>{
        return <button key={btnDetails.value}  className={btnDetails.class} onClick={(e)=>{doSomething(e,btnDetails)}}>{btnDetails.value}</button>
    }
}
