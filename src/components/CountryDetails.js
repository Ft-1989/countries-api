import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import "../styles/CountryDetails.css"

function CountryDetails(props){

    const { name } = useParams();
    const navigate = useNavigate();

    const country = props.data.find((item) => item.name.toLowerCase() === name);

    const arrowWhite = `${process.env.PUBLIC_URL}/images/arrow-left-solid-white.svg`;
    const arrowBlack = `${process.env.PUBLIC_URL}/images/arrow-left-solid-black.svg`;

    if (!country) return <div>Country not found</div>

    return (
        <div className='CountryDetails mb-5'>
            <div className="container">
                <button onClick={() => navigate(-1)} className='d-flex align-items-center justify-content-center px-3 py-1 my-5'>
                    <img src={props.darkMode ? arrowWhite : arrowBlack} alt="" className='me-2'/>
                Back</button>
                <div className='row d-flex align-items-center'>
                    <div className='col-12 col-md-6'>
                        <img src={country.flags.svg} alt="" />
                    </div>
                    <div className='col-12 col-md-6'>
                        <h3 className='mb-3 mt-4 mt-md-0'>{country.name}</h3>
                        <div className='row'>
                            <div className='col-12 col-xl-6'>
                                <p>Native Name: <span>{country.nativeName}</span></p>
                                <p>Population: <span>{country.population}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                <p>Sub Region: <span>{country.subregion}</span></p>
                                <p>Capital: <span>{country.capital}</span></p>
                            </div>
                            <div className='col-12 col-xl-6 mt-3 mt-md-0'>
                                <p>Top Level Domain: <span>{country.topLevelDomain.map((i) => i).join(', ')}</span></p>
                                <p>Currencies: <span>{country.currencies.map((i) => i.name).join(', ')}</span></p>
                                <p>Languages: <span>{country.languages.map((i) => i.name).join(', ')}</span></p>
                            </div>
                        </div>
                        <div className='borders d-flex flex-column flex-xl-row mt-3 gx-0'>
                            <p className='me-2 pt-1 mb-1 mb-xl-0'>Border Countries: </p>
                            <div className='row gx-0 gy-2'>
                                {country.borders
                                    ? country.borders.map((borderCode) => {
                                        const borderCountry = props.data.find((item) => item.alpha3Code === borderCode);
                                        return borderCountry ? (
                                        <div key={borderCode} className='col-auto p-1 mx-1'>{borderCountry.name}</div>
                                        ) : null;
                                    })
                                    : '/'}
                            </div>
                            
                        </div>                     
                    </div>
                </div>
            </div>
        </div>
    );
    
}
export default CountryDetails;