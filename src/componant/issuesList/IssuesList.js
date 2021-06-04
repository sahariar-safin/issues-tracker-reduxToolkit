import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeIssue, deleteIssue } from '../../redux/issues';

function IssuesList() {
    const issues = useSelector(state => state.issues)
    const dispatch = useDispatch();
    return (
        <div id="issuesList">
            {issues.map(issue => (
                <div className="well">
                    <h6>Issue ID: {issue.issueID} </h6>
                    <p><span className={issue.issueClosed ? "label label-danger" : "label label-info"}> {issue.issueClosed ? "Close" : "Open"}  </span></p>
                    <h3> {issue.issueDescription} </h3>
                    <p><span className="glyphicon glyphicon-time"> {issue.issueSeverity}</span> </p>
                    <p><span className="glyphicon glyphicon-user"> {issue.issueAssignedTo}</span> </p>
                    <button onClick={() => dispatch(closeIssue(issue.issueID))} className="btn btn-warning">Close</button>
                    <button onClick={() => dispatch(deleteIssue(issue.issueID))} className="btn btn-danger">Delete</button>
                </div>
            ))
            }
        </div>
    )
}

export default IssuesList
