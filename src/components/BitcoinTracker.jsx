// A component to check and update the USA $dollar value of Bitcoin

import { Component } from 'react';

class BitcoinTracker extends Component {
  // Initialize state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      bitcoinValue: '', // To store the current Bitcoin value
      message: '', // To store the status message
      messageType: '', // To store the type of the status message
    };
  }

  // Fetch the current Bitcoin value when the component mounts
  componentDidMount() {
    this.getCurrentValue();
  }

  // Method to fetch the current Bitcoin value
  getCurrentValue = () => {
    fetch("https://blockchain.info/q/24hrprice")  
      .then(response => response.text())
      .then(data => {
        // Update the state with the fetched Bitcoin value and a success message
        this.setState({
          bitcoinValue: `Current Bitcoin value: ${data} (USD)`,
          message: 'The value has been updated successfully!',
          messageType: 'success',
        });
        // Clear the message after 5 seconds
        setTimeout(() => {
          this.setState({ message: '' });
        }, 5000);
        // Fetch the current Bitcoin value again after 1 minute
        setTimeout(this.getCurrentValue, 60000);
      })
      .catch(() => {
        // Update the state with an error message if fetching fails
        this.setState({
          message: 'Error fetching data.',
          messageType: 'error',
        });
        // Clear the message after 5 seconds
        setTimeout(() => {
          this.setState({ message: '' });
        }, 5000);
      });
  }

  // Render the component
  render() {
    const { bitcoinValue, message, messageType } = this.state;

    return (
      <div className = "bitcoinBacking">
        <button className="button" onClick={this.getCurrentValue}>
          Click for current value
        </button>
        <p id="bitcoinValue">{bitcoinValue}</p>
        {/* Render the status message if it exists */}
        {message && (
          <div id={messageType}>
            {message}
          </div>
        )}
      </div>
    );
  }
}

export default BitcoinTracker;