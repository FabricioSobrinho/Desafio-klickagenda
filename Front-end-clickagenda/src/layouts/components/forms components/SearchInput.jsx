import Styles from "../../../styles/SearchInput.module.css";

// eslint-disable-next-line react/prop-types
function SearchInput({ text }) {
  return (
    <>
      <input
        type="search"
        placeholder={text}
        className={Styles.searchInput}
        results={5}
      />

      
    </>
  );
}

export default SearchInput;
