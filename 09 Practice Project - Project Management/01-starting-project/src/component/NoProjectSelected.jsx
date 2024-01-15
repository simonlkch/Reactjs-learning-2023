import ICON from '../assets/no-projects.png'
import Button from './Button.jsx'

export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img src={ICON} className="rounded-full w-32 h-32 content-center object-contain mx-auto" />
      <h1 className="text-xl font-bold text-stone-600 my-4">No Project Selected</h1>
      <p className="text-stone-400 mb-4">Select a project or get start with new one</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  )
}