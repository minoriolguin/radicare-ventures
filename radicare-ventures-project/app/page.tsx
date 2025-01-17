import Navbar from './components/navbar';
import QuestionBox from './components/questionBox';

export default function Home() {
  const message = `RadiCare Ventures is innovating a new way of addressing community 
                    safety and cleanliness. We are your partner in revitalising traumatised,  
                    dark spaces. Our staff specialises in the clean up of urban litter, vandalism, 
                    and addressing social disorder in a compassionate and helpful manner.`;

  return (
    <div>
      <header>
        <div className='z-50'>
          <Navbar />
        </div>
      </header>
      <div className="bg-lightGreen min-h-screen min-w-screen gap-16 sm:pb-4 sm:pt-20 sm:px-20 lg:px-28">

        <main className="pt-10 text-lg flex flex-col gap-3 sm:items-start span">
          <div className='ml-4 text-greyText'>
            <h1 className='text-4xl'>Request a service</h1>
            <p>You can request a service by completing the form below.</p>
          </div>

          <div className="w-full bg-white">
            <QuestionBox />
          </div>
        </main>
      </div>


      <footer className="bg-darkGreen row-start-3 flex flex-col items-center justify-center text-white p-8">
        <div className="grid grid-cols-3 items-center justify-items-center gap-6 w-full max-w-screen-xl">
          {/* Column 1 */}
          <div>
            <img src="/license_no.png" />
          </div>

          {/* Column 2 */}
          <div>
            {message}
          </div>

          {/* Column 3 */}
          <div>
            <img src="/buy_social.png" />

          </div>
        </div>

      </footer>
    </div>

  );
}
