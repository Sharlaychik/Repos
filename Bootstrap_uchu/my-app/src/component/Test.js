// JavaScript source code
function Test() {
    return (

        // перебор через мап.
        const names = ["whale", "squid", "turtle", "coral", "starfish"];

        const NamesList = () => (
        <div>
            <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
        </div>
        );

    
    );
}

export default Test;