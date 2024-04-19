export const ArrowPrev = ({isActive , activeColor = "#FFF" , disableColor = "#4D4F56"})=>{
    return (<>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke= {isActive ? activeColor : disableColor } >
<path d="M15 5L8 12L15 19"  fill="" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </>)
}

export const ArrowNext = ({isActive , activeColor = "#FFF" , disableColor = "#4D4F56"})=>{
    return (<>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke= {isActive ? activeColor : disableColor } >
        <path d="M9 5L16 12L9 19"  fill="" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </>)
}

