export default function Left() {
    return (
        <div className="Left bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue p-8 text-center rounded-b-3xl md:flex-1 md:rounded-3xl">
            <h3 className='text-gray-300 mb-6 text-xl pt-2'>
                Your Result
            </h3>

            <div className='flex justify-center items-center'>
                <div className='bg-gradient-to-b from-violetBlueCircle to-PersianBlueCircle w-24 h-24 rounded-full flex flex-col items-center justify-center md:h-52 md:w-52'>
                <h1 className='text-white block font-bold text-3xl gap-1 md:text-6xl'>76</h1>
                <p className='text-gray-400 text-base'>of 100</p>
                </div>
            </div>
            <p className='text-white my-4 text-lg md:text-2xl'>Great</p>
            <p className='text-gray-300'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}