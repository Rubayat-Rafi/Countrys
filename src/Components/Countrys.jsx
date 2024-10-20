export default function Countrys({country}) {

    // console.log("country", country)

    const {name, cca3, flags} = country;

    return(
        <div className="country-container">
            <div>
            <img style={{width: '100%', height: 'auto', borderRadius:'10px', objectFit: 'cover'}} src={flags.png} alt="flag" />
            </div>
            <p>Name: {name.common}</p>
            <p>Code: {cca3}</p>
        </div>
    )
}