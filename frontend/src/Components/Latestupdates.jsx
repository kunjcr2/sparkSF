function Latestupdates(){
    const date = new Date();

    return (
        <div className="latest-updates-container">
            <h2>Latest Updates</h2>
            <div className="updates">
                <p># This is where the update goes</p>
                <p>Posted on: ##/##/#### at ##:## AM/PM</p>
            </div>
        </div>
    )
}

export default Latestupdates;   