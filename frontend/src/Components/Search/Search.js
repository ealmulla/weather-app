import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions} from '../../api'

const Search =  ( {onSearchChange}) => {

    const [search, setSearch] = useState(null)

    const loadOptions = async (searchInputValue) => {
        try {
          const response = await fetch(
            `${GEO_API_URL}?minPopulation=1000000&namePrefix=${searchInputValue}`,
            geoApiOptions
          );
          const result = await response.json();
      
          const options = result.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }));
      
          return { options };
        } catch (error) {
          console.error(error);
          return { options: [] };
        }
      };

      

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }
    return(
        <AsyncPaginate 
        placeholder="Search for city"
        debounceTimeout={600}/* so user cant send too many requests?*/
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        />
    )
}

export default Search