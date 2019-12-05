<select
            value={this.state.query.categoryType}
            onChange={this.inputChanged2}
            style={{
              backgroundColor: "white",
              textAlign: "center",
              marginLeft: "10px"
            }}
          >
            <option selected disabled>
              Category
            </option>
            <option value="Young+Adult">Young Adult</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Adventure">Adventure</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Children">Children</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Western">Western</option>
            <option value="Fantasy">Fantasy</option>
            <option value="IT+Horror">IT Horror</option>
            <option value="Computer+Science+Horror">
              Computer Science Horror
            </option>
          </select>

          <select
            style={{
              backgroundColor: "white",
              textAlign: "center",
              marginLeft: "10px"
            }}
          >
            <option selected disabled>
              Rating
            </option>
            <option value="Horror">5</option>
            <option value="Fantasy">4</option>
            <option value="Adventure">3</option>
            <option value="Drama">2</option>
            <option value="Drama">1</option>
          </select>




<div>
          <h1> Simple Popup Example In React Application </h1>
          <button onClick={this.togglePopup.bind(this)}>
            Click To Launch Popup
          </button>

          {this.state.showPopup ? (
            <Popup
              text='Click "Close Button" to hide popup'
              closePopup={this.togglePopup.bind(this)}
            />
          ) : null}
        </div>



const addToCart = event => {
  fetch(
    "http://ec2-34-214-249-60.us-west-2.compute.amazonaws.com/api/orderitems",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials)
    }
  )
    .then(data => data.json())
    .then(data => {
      this.props.userLogin(data.token);
      console.error("!");
    })
    .catch(error => console.error(error));
};