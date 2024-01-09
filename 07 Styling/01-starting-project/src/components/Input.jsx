export default function Input({ label, invalid, ...props }) {
  // handle tailwind
  let labelStyle = "block mb-2 text-xs font-bold tracking-wide uppercase"
  let inputStyle = "w-full px-3 py-2 leading-tight border rounded shadow"
  if (invalid) {
    labelStyle += " bg-red-600 text-red-200"
  }
  if (invalid){
    inputStyle += " bg-red-600"
  }
  return (
    <p>
      <label className={labelStyle}>{label}</label>
      <input className={inputStyle} type={label} {...props} />
    </p>
  )
}