import data from './data.json'
import Score from './Scores'

export default function Right() {
    return(
        <div className="Right flex flex-col p-8 md:flex-1">
            <h2 className='text-black mb-6 text-lg font-bold'>Summary</h2>

            <div className='flex flex-col gap-4'>
                {data.map((item) => (
                    <Score
                        category={item.category}
                        score={item.score}
                        icon={item.icon}
                        color={item.color}
                    />
                ))}
            </div>
            <button className='bg-darkGrayBlue rounded-full py-4 px-6 text-white mt-6 w-full block hover:bg-lightRoyalBlue select-none transition-all duration-250'>
                Continue
            </button>
        </div>
    )
}