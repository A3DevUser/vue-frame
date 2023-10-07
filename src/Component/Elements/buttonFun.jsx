export const buttonFun = {
    button : (classNameVal,textVal,widthVal,heightVal) => {
        return <button className={classNameVal} style={{width: widthVal, height: heightVal}}>{textVal}</button>
      }
}