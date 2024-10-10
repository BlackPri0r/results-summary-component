type ItemProps = {
    category: string;
    score: number;
    icon: string;
    color: string;
}

export default function Score({ category, score, icon, color }: ItemProps){
    return(
        <div style={{backgroundColor: `${color}20`}} className='flex items-center justify-between p-4 rounded-lg'>
            <div className='flex items-center gap-2'>
                <img src={icon}></img>
                <p style={{color: color}}>{category}</p>
            </div>
            <div className='flex gap-2'>
                <p className='text-black'>{score}</p>
                <p className='text-gray-500'>/ 100</p>
            </div>
        </div>
    )
}