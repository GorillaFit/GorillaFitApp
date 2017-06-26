import React from 'react';

class MatchingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listClear: false
    };
    this.addFood = this.addFood.bind(this);
  }


  addFood() {
    console.log('this is this.props.meal', this.props.item);
    this.props.addFood(this.props.meal, this.props.item[0].food_name, this.props.item[0].nf_calories, this.props.item[0].nf_total_fat, this.props.item[0].nf_total_carbohydrate, this.props.item[0].nf_protein);
    this.setState({ listClear: true });
    //this.render()
  }


  render() {
    return (
      <div>
        <h5 > {!this.state.listClear && (this.props.item[0].food_name + ' (' + this.props.item[0].nf_calories + ' cals)')} </h5>
        {!this.state.listClear && <button onClick={this.addFood}> Add! </button>}
      </div>
    );
  }

}



export default MatchingItem;
