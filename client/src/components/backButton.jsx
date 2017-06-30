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
         <IconButton tooltip="View yesterdays's history" tooltipPosition="top-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/></svg>
         </IconButton>
        </div>
      </MuiThemeProvider>
    );
  }

}



export default ForwardButton;