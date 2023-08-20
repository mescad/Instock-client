import "./SearchWithNoResult.scss";

function SearchWithNoResult({searchInput, searchObject}) {
	return (
		<section className="no-result">
			<h2 className="no-result__text">{`No ${searchObject} found for the query "${searchInput}"`}</h2>
		</section>
	);
}

export default SearchWithNoResult;
