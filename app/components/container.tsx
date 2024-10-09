import { ReactNode } from "react";

interface props {
    children :ReactNode
}

 export const Container:React.FC<props> =({children})=>{
    return (
        <div className="mx-auto max-w-7xl p-5 lg:p-10">
            {children}
        </div>
    )
}
