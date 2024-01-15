export default function Button({children, ...props}){
    return (
        <button type="button"
        className=" px-4 py-2 text-xs md:text-base rounded-md bg-stone-500 text-stone-100 hover:bg-stone-600"
        {...props} >{children}</button>
    )
}