import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addIssue, deleteIssue, closeIssue } from './redux/issues';
import IssuesList from './componant/issuesList/IssuesList';

function App() {

  const issues = useSelector((state) => state.issues)
  const dispatch = useDispatch()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    dispatch(addIssue(data));
    document.getElementById('issueInputForm').reset();
  };
  return (
    <div class="container">
      <h1>Issue Tracker: {issues.length} (Closed: {(issues.filter(issue => issue.issueClosed)).length} ) </h1>
      <div class="jumbotron">
        <h3>Add New Issue:</h3>
        <form onSubmit={handleSubmit(onSubmit)} id="issueInputForm">
          <div class="form-group">
            <label for="issueDescription">Description</label>
            <input {...register("issueDescription", { required: true })} type="text" class="form-control" id="issueDescription" placeholder="Describe the issue ..." />
          </div>
          <div class="form-group">
            <label for="issueSeverity">Severity</label>
            <select {...register("issueSeverity", { required: true })} id="issueSeverity" class="form-control">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div class="form-group">
            <label for="issueAssignedTo">Assigned To</label>
            <input {...register("issueAssignedTo", { required: true })} type="text" class="form-control" id="issueAssignedTo" placeholder="Enter responsible ..." />
          </div>
          <button type="submit" class="btn btn-primary">Add</button>
        </form>
      </div>
      <div class="col-lg-12">
        <IssuesList></IssuesList>
      </div>
    </div>
  );
}

export default App;
