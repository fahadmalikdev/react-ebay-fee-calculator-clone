import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div class="container">
      <header class="header">
        {/* Add header content here */}
      </header>
      <div class="form-wrap">
        <form id="survey-form">
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label id="name-label" for="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label id="email-label" for="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label id="email-label" for="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label id="email-label" for="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  class="form-control"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label id="number-label" for="number">
                  Age <small>(optional)</small>
                </label>
                <input
                  type="number"
                  name="age"
                  id="number"
                  min="10"
                  max="99"
                  class="form-control"
                  placeholder="Age"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>current role</label>
                <select id="dropdown" name="role" class="form-control" required>
                  <option disabled selected value>
                    Select
                  </option>
                  <option value="student">Student</option>
                  <option value="job">Full Time Job</option>
                  <option value="learner">Full Time Learner</option>
                  <option value="preferNo">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>current role</label>
                <select id="dropdown" name="role" class="form-control" required>
                  <option disabled selected value>
                    Select
                  </option>
                  <option value="student">Student</option>
                  <option value="job">Full Time Job</option>
                  <option value="learner">Full Time Learner</option>
                  <option value="preferNo">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label id="number-label" for="number">
                  Age <small>(optional)</small>
                </label>
                <input
                  type="number"
                  name="age"
                  id="number"
                  min="10"
                  max="99"
                  class="form-control"
                  placeholder="Age"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>current role</label>
                <select id="dropdown" name="role" class="form-control" required>
                  <option disabled selected value>
                    Select
                  </option>
                  <option value="student">Student</option>
                  <option value="job">Full Time Job</option>
                  <option value="learner">Full Time Learner</option>
                  <option value="preferNo">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>current role</label>
                <select id="dropdown" name="role" class="form-control" required>
                  <option disabled selected value>
                    Select
                  </option>
                  <option value="student">Student</option>
                  <option value="job">Full Time Job</option>
                  <option value="learner">Full Time Learner</option>
                  <option value="preferNo">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row form-border">
            <p class="sales-tax-border">Sales Tax</p>
            <div class="col-md-4">
              <div class="form-group">
                <label id="number-label" for="number">
                  Age <small>(optional)</small>
                </label>
                <input
                  type="number"
                  name="age"
                  id="number"
                  min="10"
                  max="99"
                  class="form-control"
                  placeholder="Age"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>current role</label>
                <select id="dropdown" name="role" class="form-control" required>
                  <option disabled selected value>
                    Select
                  </option>
                  <option value="student">Student</option>
                  <option value="job">Full Time Job</option>
                  <option value="learner">Full Time Learner</option>
                  <option value="preferNo">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>current role</label>
                <select id="dropdown" name="role" class="form-control" required>
                  <option disabled selected value>
                    Select
                  </option>
                  <option value="student">Student</option>
                  <option value="job">Full Time Job</option>
                  <option value="learner">Full Time Learner</option>
                  <option value="preferNo">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row justify-content-center mt-5">
            <div class="col-md-6">
                <label>Item category</label>
            <select id="dropdown" name="role" class="form-control" required>
                  <option disabled selected value>
                    Select
                  </option>
                  <option value="student">Student</option>
                  <option value="job">Full Time Job</option>
                  <option value="learner">Full Time Learner</option>
                  <option value="preferNo">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
            </div>
          </div>
          <div class="row justify-content-center mt-3 mb-5">
            <div class="col-md-6">
                <label>Clothing, Shoes & Accessories subcategory</label>
            <select id="dropdown" name="role" class="form-control" required>
                  <option disabled selected value>
                    Select
                  </option>
                  <option value="student">Student</option>
                  <option value="job">Full Time Job</option>
                  <option value="learner">Full Time Learner</option>
                  <option value="preferNo">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
            </div>
          </div>

          <div class="row calculator-value">
            <div class="col-md-4">
            <span>eBay Fee:</span>  <span class="price">$9.37</span><br/>
            <span class="percentage">Fee percentage:</span> <span class="percentage">25.31% + $0.30</span>
              </div>
            <div class="col-md-4">
            <span>eBay Fee:</span>  <span class="price">$9.37</span><br/>
            <span class="percentage">Fee percentage:</span> <span class="percentage">25.31% + $0.30</span>
            </div>
            <div class="col-md-4">
            <span>eBay Fee:</span>  <span class="price-green">$9.37</span><br/>
            <span class="percentage">Fee percentage:</span> <span class="percentage">25.31% + $0.30</span>
            </div>
          </div>

          <div class="row justify-content-center mt-5">
            <div class="col-md-4">
              <button
                type="submit"
                id="reset"
                class="btn btn-primary btn-block reset"
              >
                Reset calculator
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
