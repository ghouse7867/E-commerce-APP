import React from'react';
import { useParams } from 'react-router-dom';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Card extends React.Component {

  state = { user: ''}

componentDidMount(props) {
  
  let user = this.props.params.id
  console.log(this.props)
  this.setState({ user })
  
}
render() {
  
  const {user} = this.state
return(
  <div className="ui raised very padded text constainer segment"
    style={{marginTop:"80px"}}
    >
     <h3 className = "ui header">{ user }</h3>
    
    </div>
)

}

}

export default withParams(Card);