import "./SearchBar.scss";
import searchIcon from "../../asset/Icons/search-24px.svg";

function SearchBar() {
	return (
		<form className="search">
			<input
				type="search"
				className="search__input"
				name="search_input"
				id="search_input"
				placeholder="Search..."
			/>
			<button className="search__button" type="submit">
				<img src={searchIcon} alt="Add warehouse" className="search__icon" />
			</button>
		</form>
	);
}

export default SearchBar;
