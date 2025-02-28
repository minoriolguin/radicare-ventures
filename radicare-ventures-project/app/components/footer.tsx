export default function Footer() {
    const message = `RadiCare Ventures is innovating a new way of addressing community 
    safety and cleanliness. We are your partner in revitalising traumatised,  
    dark spaces. Our staff specialises in the clean up of urban litter, vandalism, 
    and addressing social disorder in a compassionate and helpful manner.`;
    return (
        <footer className="bg-darkGreen flex flex-row items-center justify-between text-white md:p-4 md:gap-6 w-full">
            {/* Column 1 */}
            <div className='basis-1/4 p-24 md:p-36 flex flex-col'>
                <img src="/license_no.png" />
            </div>

            {/* Column 2 */}
            <div className='basis-1/2 p-24 flex flex-col'>
                {message}
            </div>

            {/* Column 3 */}
            <div className='basis-1/4 p-24 md:p-36 flex flex-col'>
                <img src="/buy_social.png" />

            </div>

        </footer>
    )
}
