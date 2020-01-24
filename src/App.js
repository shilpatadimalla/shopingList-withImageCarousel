import React, { Component } from "react";
import data from "./data.json";
import ImageCarousel from "./ImageCarousel";
import './App.css';


let groups = Object.keys(data).map(o => data[o]);
groups = groups[0].groups;
console.log(groups);

let res = groups.map(i => {
  for (let j in i) {
    if (j === "price" || j === "priceRange") {
      for (let k in i[j]) {
        if (typeof i[j][k] === "object") {
          //let obj = Object.values(i[j][k]);
          //console.log(i[j][k])
          let res1 = Object.values(i[j][k]);
          res1.push("special");
          //console.log(res1.push("special"))
          return res1;
        } else {
          return Object.values(i[j]);
        }
      }
    }
  }
});
// console.log(res.length);

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      products: [],
      groups: groups,
      res: res,
      str: ["Regular", "Selling", "type"],
      display: false
    };
  }

    clickHandle = () => {
      //if(document.getElementByClassNames('show-carousel').style.visibility === 'hidden') {
        //document.getElementByClassNames('show-carousel').style.display = 'visible';
      //}
      if(!this.state.display) {
        this.setState({ display: true })
      }
    }

  /*async componentDidMount() {
    try {
      let response = await fetch('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json', {
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin':'*',
        }
      });
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      let data = await response().json();
      console.log(data);
      this.setState({ 
        products: data
      });
    } catch(err) {
      console.log(err);
    }
  }
*/
  render() {
    //let { display } = this.state;
    return (
      <div className="App">
        {this.state.groups.map((item, index) => (
          //console.log(item),
          //(
          <div key={index}>
            <a href={item.links.www}>
              <h3>{item.name}</h3>
            </a>
            <span>
              <img
                src={item.hero.href}
                alt={item.hero.rel}
                height={item.hero.width}
                width={item.hero.width}
                onClick = {this.clickHandle}
              />
            </span>
            <br />
            <ImageCarousel display={this.state.display} images={item.images} />
            
            {this.state.res[index].map((i, index) =>
              index === 2 ? (
                <p key={index}>
                  {this.state.str[index]} - {i}
                </p>
              ) : (
                <p key={index}>
                  {this.state.str[index]} - ${i}
                </p>
              )
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default App;