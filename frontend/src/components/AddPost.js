import React, {Component} from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import AddIcon from '@material-ui/icons/Add'

class AddPost extends Component {
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>ADD POST</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            add a text area here -- wysiwig text editor? see wordpress
          </p>
          <button type="submit">SUBMIT</button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default AddPost