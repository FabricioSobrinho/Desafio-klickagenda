import Styles from "../../../styles/SearchInput.module.css";

// eslint-disable-next-line react/prop-types
function SearchInput({ text, handleChange, value }) {
  return (
    <>
      <input
        type="search"
        placeholder={text}
        className={Styles.searchInput}
        onChange={handleChange}
        value={value}
        results={5}
      />

      
    </>
  );
}

export default SearchInput;
