import React, { useState, useEffect } from "react";

const UsaEbayCalculator = () => {
  // Step 1: Create state to store values
  const [formData, setFormData] = useState({
    soldPrice: 0,
    shippingCharged: 0,
    itemCost: 0,
    shippingCost: 0,
    numberOfOrders: 1,
    ebayStore: "no",
    sellerLevel: "above-standard",
    overseaSales: "no",
    promotedAdRate: 0,
    donatedToCharity: 0,
    calculationMethod: "percentage",
    salesTaxAmount: 0,
    salesTaxIncludeShipping: "yes",
    itemCategory: "Everything else",
  });

  // Step 2: Event handlers for input and dropdown onChange
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Step 3: Calculation function
  const calculateValues = () => {
    const soldPrice = parseFloat(formData.soldPrice);
    const numberOfOrders = parseFloat(formData.numberOfOrders);
  
    
    const ebayFee = (soldPrice * 0.1325) + (numberOfOrders * 0.30);
    const feePercentage = ((ebayFee / soldPrice) * 100).toFixed(2);
    const feePercentageV = (numberOfOrders * 0.30).toFixed(2);
  
    const salesTax = (parseFloat(formData.salesTaxAmount) / 100).toFixed(2);
    const totalProfit = (soldPrice - ebayFee - (soldPrice * salesTax)).toFixed(2);
    const profitMargin = (((totalProfit - soldPrice * salesTax) / soldPrice) * 100).toFixed(2);
  
    return {
      ebayFee: ebayFee.toFixed(2),
      feePercentage,
      feePercentageV,
      salesTax,
      totalProfit,
      profitMargin,
    };
  };
  

  // State to store result values
  const [resultValues, setResultValues] = useState({
    ebayFee: 0,
    feePercentage: 0,
    feePercentageV: 0,
    salesTax: 0,
    totalProfit: 0,
    profitMargin: 0,
  });

  // Step 4: Render the result values
  useEffect(() => {
    setResultValues(calculateValues());
  }, [formData]);

  return (
    <div className="container">
      <header className="header">{/* Add header content here */}</header>
      <div className="form-wrap">
        <form id="survey-form">
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label id="sold-price-label" for="soldPrice">
                  Sold Price
                </label>
                <input
                  type="number"
                  name="soldPrice"
                  id="soldPrice"
                  placeholder=""
                  className="form-control"
                  value={formData.soldPrice}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label id="shipping-charged-label" for="shippingCharged">
                  Shipping charged
                </label>
                <input
                  type="number"
                  name="shippingCharged"
                  id="shippingCharged"
                  placeholder=""
                  className="form-control"
                  value={formData.shippingCharged}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label id="item-cost-label" for="itemCost">
                  Item cost
                </label>
                <input
                  type="number"
                  name="itemCost"
                  id="itemCost"
                  placeholder=""
                  className="form-control"
                  value={formData.itemCost}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label id="shipping-cost-label" for="shippingCost">
                  Shipping cost
                </label>
                <input
                  type="number"
                  name="shippingCost"
                  id="shippingCost"
                  placeholder=""
                  className="form-control"
                  value={formData.shippingCost}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label id="number-of-orders-label" for="numberOfOrders">
                  No. of orders
                </label>
                <input
                  type="number"
                  name="numberOfOrders"
                  id="numberOfOrders"
                  className="form-control"
                  placeholder=""
                  value={formData.numberOfOrders}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>eBay store?</label>
                <select id="ebay-store" name="ebayStore" className="form-control" value={formData.ebayStore} onChange={handleDropdownChange}>
                  <option value="no">
                    No
                  </option>
                  <option value="starter">Starter</option>
                  <option value="basic">Basic</option>
                  <option value="premium">Premium</option>
                  <option value="anchor">Anchor</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Seller level</label>
                <select id="seller-level" name="sellerLevel" className="form-control" value={formData.sellerLevel} onChange={handleDropdownChange}>
                  <option value="top-rated">Top Rated</option>
                  <option value="above-standard">
                    Above Standard
                  </option>
                  <option value="below-standard">Below Standard</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Oversea sales?</label>
                <select id="oversea-sale" name="overseaSales" className="form-control" value={formData.overseaSales} onChange={handleDropdownChange}>
                  <option value="no">No</option>
                  <option value="yes">
                    Yes
                  </option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label id="promoted-ad-rate-label" for="promotedAdRate">
                  Promoted ad rate (%)
                </label>
                <input
                  type="number"
                  name="promotedAdRate"
                  id="promotedAdRate"
                  className="form-control"
                  placeholder=""
                  value={formData.promotedAdRate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label id="donated-to-charity-label" for="donatedToCharity">
                  Donated to charity (%)
                </label>
                <input
                  type="number"
                  name="donatedToCharity"
                  id="donatedToCharity"
                  className="form-control"
                  placeholder=""
                  value={formData.donatedToCharity}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="row form-border">
            <p className="sales-tax-border">Sales Tax</p>
            <div className="col-md-4">
              <div className="form-group">
                <label>Calculation method</label>
                <select id="calculation-method" name="calculationMethod" className="form-control" value={formData.calculationMethod} onChange={handleDropdownChange}>
                  <option value="percentage">
                    % Percentage
                  </option>
                  <option value="fixed-amount">$ Fixed Amount</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label id="sales-tax-amount-label" for="salesTaxAmount">
                  Amount
                </label>
                <input
                  type="number"
                  name="salesTaxAmount"
                  id="salesTaxAmount"
                  className="form-control"
                  placeholder=""
                  value={formData.salesTaxAmount}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Sales tax includes shipping?</label>
                <select id="sales-tax-include-shipping" name="salesTaxIncludeShipping" className="form-control" value={formData.salesTaxIncludeShipping} onChange={handleDropdownChange}>
                  <option value="yes">
                    Yes
                  </option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <label>Item category</label>
              <select id="item-category" name="itemCategory" className="form-control" value={formData.itemCategory} onChange={handleDropdownChange}>
                <option value="Everything else">Everything else</option>
                <option value="2.12">Antiques</option>
                <option value="Art">Art</option>
                <option value="2">Baby</option>
                <option value="1">Books &amp; Magazines</option>
                <option value="Business &amp; Industrial">Business &amp; Industrial</option>
                <option value="Cameras &amp; Photo">Cameras &amp; Photo</option>
                <option value="Cell Phones &amp; Accessories">Cell Phones &amp; Accessories</option>
                <option value="Clothing, Shoes &amp; Accessories">Clothing, Shoes &amp; Accessories</option>
                <option value="Coins &amp; Paper Money">Coins &amp; Paper Money</option>
                <option value="Collectibles">Collectibles</option>
                <option value="Computers/Tablets &amp; Networking">Computers/Tablets &amp; Networking</option>
                <option value="Consumer Electronics">Consumer Electronics</option>
                <option value="2">Crafts</option>
                <option value="2">Dolls &amp; Bears</option>
                <option value="eBay Motors">eBay Motors</option>
                <option value="2">Entertainment Memorabilia</option>
                <option value="2">Health &amp; Beauty</option>
                <option value="2">Home &amp; Garden</option>
                <option value="Jewelry &amp; Watches">Jewelry &amp; Watches</option>
                <option value="Movies &amp; TV">Movies &amp; TV</option>
                <option value="Music">Music</option>
                <option value="Musical Instruments &amp; Gear">Musical Instruments &amp; Gear</option>
                <option value="2">Pet Supplies</option>
                <option value="2">Pottery &amp; Glass</option>
                <option value="2">Specialty Services</option>
                <option value="2">Sporting Goods</option>
                <option value="Sports Mem, Cards &amp; Fan Shop">Sports Mem, Cards &amp; Fan Shop</option>
                <option value="5.1">Stamps</option>
                <option value="Toys &amp; Hobbies">Toys &amp; Hobbies</option>
                <option value="Video Games &amp; Consoles">Video Games &amp; Consoles</option>
              </select>
            </div>
          </div>
          <div className="row justify-content-center mt-3 mb-5">
            {/* <div className="col-md-6">
              <label>Clothing, Shoes & Accessories subcategory</label>
              <select id="dropdown" name="role" className="form-control" required>
                <option disabled selected value>
                  Select
                </option>
                <option value="student">Student</option>
                <option value="job">Full Time Job</option>
                <option value="learner">Full Time Learner</option>
                <option value="preferNo">Prefer not to say</option>
                <option value="other">Other</option>
              </select>
            </div> */}
          </div>

          <div className="row calculator-value">
            <div className="col-md-4">
              <span>eBay Fee:</span> <span className="price">${resultValues.ebayFee}</span>
              <br />
              <span className="percentage">Fee percentage:</span>{" "}
              <span className="percentage">{resultValues.feePercentage}% + ${resultValues.feePercentageV}</span>
            </div>
            <div className="col-md-4">
              <span>Sales Tax:</span> <span className="price">${resultValues.salesTax}</span>
              <br />
              <span className="percentage">Charged to buyer only</span>
            </div>
            <div className="col-md-4">
              <span>Total Profit:</span> <span className="price-green">${resultValues.totalProfit}</span>
              <br />
              <span className="percentage">Profit margin:</span>{" "}
              <span className="percentage">{resultValues.profitMargin}% of sold price</span>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-md-4">
              <button
                type="submit"
                id="reset"
                className="btn btn-primary btn-block reset"
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

export default UsaEbayCalculator;
