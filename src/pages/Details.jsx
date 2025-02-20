import { useNavigate } from "react-router-dom"

export default function Details() {
   const navigate = useNavigate()
  return (
    <div className='h-[90vh] bg-purple-500 text-amber-100 flex justify-center items-center'>Details
     <button
        className=" px-3 py-2 bg-amber-300 hover:bg-amber-500 text-amber-950"
        onClick={() => navigate(-1)}
      >
       Back
      </button>
    </div>
  )
}

  