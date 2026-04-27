export const AmiiboSearchUI = ({ term, setTerm, searchAmiibo, setResults }) => {
    return (
        <div>
            <button onClick={() => {
                searchAmiibo(term)
                    .then(data => setResults(data.amiibo || []))
                    .catch(error => console.error(error));
            }}>Search</button>
            <label>
                Name:
                <input
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
            </label>
        </div>
    );
};