import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';



class ForwardButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <MuiThemeProvider>
        <div>
         <IconButton onClick={this.props.onForward}tooltip="View tomorrow's history" tooltipPosition="top-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg>
         </IconButton>
        </div>
      </MuiThemeProvider>
    );
  }

}



export default ForwardButton;