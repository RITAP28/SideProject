'use client'

export default function Page(): JSX.Element {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted');
  };
  
  return (
    <>
    <div className="bg-black">
      <div className="">
        <form action="" onSubmit={handleSubmit} className="flex flex-col">
          <div className="my-2">
            <input type="file" className="bg-white text-black" />
          </div>
          <div className="my-2">
            <button type="submit" className="bg-white text-black px-8 py-1 rounded-md">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}