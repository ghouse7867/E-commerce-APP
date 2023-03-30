// import './usercard.css';

function UserCard({values}){

    return(
        <article className="user--card">
            <div className="user--basicInfo">
              <h2>{values.title}</h2>
              <h2>{values.description}</h2>
              <h3>{values.content}</h3>
              </div>
            {/* <h3>{user.title}</h3>
            <h4>{user.username}</h4>
            <h4>{user.email}</h4>
            </div>
            <div className="user--address">
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>{user.address.city} | {user.address.zipcode}</p>
            </div>

            <div className="user--contact">
                <p>Phone : {user.phone}</p>
                <p>{user.website}</p>
            </div>

            <div className="user--company">
                <h4>{user.company.name}</h4>
                <p>{user.company.catchPhrase}</p>
            </div> */}
        </article>
    )

}

export default UserCard