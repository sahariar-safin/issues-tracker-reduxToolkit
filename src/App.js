import './App.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addIssue } from './redux/issues';
import IssuesList from './componant/issuesList/IssuesList';

function App() {

  const issues = useSelector((state) => state.issues)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    dispatch(addIssue(data));
    document.getElementById('issueInputForm').reset();
  };
  return (
    <div className="container">
      <h1>Issue Tracker: {issues.length} (Closed: {(issues.filter(issue => issue.issueClosed)).length} ) </h1>
      <div className="jumbotron">
        <h3>Add New Issue:</h3>
        <form onSubmit={handleSubmit(onSubmit)} id="issueInputForm">
          <div className="form-group">
            <label for="issueDescription">Description</label>
            <input {...register("issueDescription", { required: true })} type="text" className="form-control" id="issueDescription" placeholder="Describe the issue ..." />
          </div>
          <div className="form-group">
            <label for="issueSeverity">Severity</label>
            <select {...register("issueSeverity", { required: true })} id="issueSeverity" className="form-control">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="form-group">
            <label for="issueAssignedTo">Assigned To</label>
            <input {...register("issueAssignedTo", { required: true })} type="text" className="form-control" id="issueAssignedTo" placeholder="Enter responsible ..." />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
      <div className="col-lg-12">
        <IssuesList></IssuesList>
      </div>
    </div>
  );
}

export default App;
