import React from 'react';
import {Link} from 'react-router-dom';


export class Head extends React.Component{
  render(){
    return (
      <div className="head">
        <img src={require('./img/ck-logo.png')} alt={'ck fysio'} height="100%" />
        <Link className="fb" to="https://www.facebook.com/cecilia.kalla">
          <img src={require('./img/fb-logo.png')} alt={'Facebook'} height="40%" />
        </Link>
      </div>
    )
  }
}
