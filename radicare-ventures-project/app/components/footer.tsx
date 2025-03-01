import Image from "next/image";

export default function Footer() {
    const message = `RadiCare Ventures is innovating a new way of addressing community 
    safety and cleanliness. We are your partner in revitalising traumatised,  
    dark spaces. Our staff specialises in the clean up of urban litter, vandalism, 
    and addressing social disorder in a compassionate and helpful manner.`;
    return (
        <footer className="bg-darkGreen max-w-screen flex flex-row items-center justify-between text-white w-full py-8">
            
            {/* Column 1 */}
            <div className='basis-1/4 flex flex-col'>
                <Image src="/license_no.png" alt="" width={150} height={150} />
            </div>

            {/* Column 2 */}
            <div className='basis-1/2 text-xs sm:text-sm flex flex-col'>
                {message}
            </div>

            {/* Column 3 */}
            <div className='basis-1/4 flex flex-col'>
                <Image src="/buy_social.png" alt="" width={150} height={150}/>

            </div>

        </footer>
    )
}
