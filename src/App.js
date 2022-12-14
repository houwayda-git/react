import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const hello = () => {

  return (
    <div class="container">
      <form>
        <div class="form-row">
          <div class="form-group">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="form-group">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label for="phone">Phone number</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>Male</option>
              <option>female</option>
            </select>
          </div>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label" for="defaultCheck1">
            I agree
          </label>
        </div>
        <p></p>
        <div class="form-group col-md-4">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  )
};

export default hello;
