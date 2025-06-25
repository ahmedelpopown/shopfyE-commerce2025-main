 
const RequestBox = () => {
//     padding: 1rem;
//     display: flex
// ;
//     gap: 1rem;
//     flex-direction: column;
//     flex-wrap: wrap;
//     align-items: flex-start;
  return (
    
    <div className="p-4 flex gap-4 flex-col flex-wrap items-start bg-[#f5f5f5]">
        <h1 className="text-2xl">Request Box</h1>
        <p className="text-[16px] block text-[#666] ">If your  unable to find the item your looking for here, you can request us what you want via this request box. We will do our best to find that item for you.</p>
        <input type="text" placeholder="Email Address" className="w-[100%] h-12 p-2 outline-0 focus:outline-customTeal focus:outline-1 "  />
        <textarea name="" id="" placeholder="Pleas Enter Your Massage" className="p-2 w-full h-32 outline-0 focus:outline-customTeal focus:outline-1"  ></textarea>
        <button className="w-full h-12 bg-black text-white" >Send your Request</button>
    </div>
    
  )
}

export default RequestBox