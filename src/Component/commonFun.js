export const MainObject = {
    alert: (alertVal) => {
        return alert(alertVal)
    },
    button : (classNameVal,textVal,widthVal,heightVal) => {
        return <button className={classNameVal} style={{width: widthVal, height: heightVal}}>{textVal}</button>
      },
    input : (classNameVal,typeVal,widthVal,heightVal) => {
        return <input className={classNameVal} type={typeVal} style={{width: widthVal, height: heightVal}}/>
    },
    dropdown : (dropVal) => {
        return <select>
            {
                dropVal.map((res,i) => {
                        return <option key={i} value={res.value}>{res.value}</option>
                })
            }
        </select>
    },
    section : () => {
        
    }
} 