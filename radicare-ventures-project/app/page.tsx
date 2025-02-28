import Footer from './components/Footer';
import Navbar from './components/Navbar';
import QuestionBox from './components/ServiceRequestForm';
import Link from 'next/link';

export default function Home( ) {


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
            <h1 className='text-4xl'><Link href="/">Request a service</Link></h1>
            <p>You can request a service by completing the form below.</p>
          </div>

          <div className="w-full bg-white">
            <QuestionBox />
          </div>
        </main>
      </div>
      <Footer />
    </div>

  );
}
