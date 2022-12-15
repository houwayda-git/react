import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoProfile from './Component/Profile/ProfilePhoto.js'
import Mine from './Component/Profile/FullName.js'
import MyCountry from './Component/Profile/Address.js'
import './App.css'


const App = () => (
  <section>
    <div className="card">
      <div className="card-body"><PhotoProfile />
        <h5 className="card-title"><Mine /></h5>
        <p className="card-text"><MyCountry /></p>
      </div>
    </div>
  </section >
);
export default App;
