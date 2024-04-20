export const getInputValue = (id:string) => {
    return (document.getElementById(id) as HTMLInputElement)?.value
}

export const isChecked = (id:string) =>{
    return (document.getElementById(id) as HTMLInputElement)?.checked ? 1:0
}

