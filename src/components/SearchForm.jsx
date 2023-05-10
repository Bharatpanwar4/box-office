import { useState } from "react";
const SearchForm = ({onSearch})=>{

    const [searchStr, setSearchStr] = useState('');

    const [searchOption,setSearchOption]=useState('shows');


    const onSearchInputChange = e => {
        setSearchStr(e.target.value);
      };
      const onRadioChange =(e)=>{
        setSearchOption(e.target.value)
    }

    const onSubmit =(e)=>{
   e.preventDefault()
   const options={
    q:searchStr,
    searchOption
   }

   onSearch(options)

    }
return(
    <div>
          <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchStr}
          onChange={onSearchInputChange}
        ></input>

<label>
    Shows
    <input type='radio' name='search-option' value='shows' checked={searchOption === 'shows'} onChange={onRadioChange}></input>
</label>
<label>
    Actors
    <input type='radio' name='search-option' value='actors' onChange={onRadioChange} checked={searchOption === 'actors'}></input>
</label>

        <button type="submit">Search</button>
      </form>
    </div>
)
}
export default SearchForm;
