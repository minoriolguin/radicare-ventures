import Footer from './components/footer';
import Navbar from './components/navbar';
import ServiceRequestForm from './components/serviceRequestForm';
import Link from 'next/link';

export default function Home( ) {


  return (
    <div className="w-full max-w-full flex flex-col items-center">
      <header>
        <div className='z-50'>
          <Navbar />
        </div>
      </header>
      <div className="bg-lightGreen min-h-screen gap-16 mt-16 sm:pt-2 px-2 sm:px-8 lg:px-16 w-full">

        <main className="pt-10 text-lg flex flex-col gap-3 sm:items-start span">
          <div className='ml-4 text-greyText'>
            <h1 className='text-4xl'><Link href="/">Request a service</Link></h1>
            <p>You can request a service by completing the form below.</p>
          </div>

          <div className="w-full max-w-screen bg-white">
            <ServiceRequestForm />
          </div>
        </main>
      </div>
      <Footer />
    </div>

  );
}
