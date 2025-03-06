import LandingPage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`,
        });
    };

  return (
    <div className='flex flex-col gap-12'>
        <div className='md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center'>
            <h1 className='text-5xl font-bold tracking-tight text-orange-600'>
                Order your favourite meals Today
            </h1>
            <span className='text-xl'>Your food is just a click away</span>
            <SearchBar placeHolder="Seach by City or Town" onSubmit={handleSearchSubmit}/>
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