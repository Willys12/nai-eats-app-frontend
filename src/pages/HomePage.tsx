import LandingPage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
        <div className='bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center'>
            <h1 className='text-5xl font-bold tracking-tight text-orange-600'>
                Order your favourite meals Today
            </h1>
            <span className='text-xl'>Your food is just a click away</span>
        </div>
        <div className='grid md:grid-cols-2 gap-5'>
            <img src={LandingPage}/>
            <div className='flex flex-col items-center justify-center text-center gap-4'>
                <span className='font-bold text-3xl tracking-tighter'>
                    Takeaway made faster!
                </span>
                <span>
                    For faster ordering, download our App for convenience.
                </span>
                <img src={appDownloadImage}/>
            </div>
        </div>
    </div>
  )
}

export default HomePage;