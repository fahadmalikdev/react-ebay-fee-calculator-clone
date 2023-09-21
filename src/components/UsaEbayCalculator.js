import React, { useState, useEffect } from "react";
import itemCategories from "./usaEbayCalculatorData";

const UsaEbayCalculator = () => {
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
    itemCategory: "everythingelse",
    subCategory: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getParentOptions = () => {
    return itemCategories.map((category) => (
      (category.selected)
      ? <option key={category.value} value={category.value} selected>{category.displayName}</option>
      : <option key={category.value} value={category.value}>{category.displayName}</option>
    ));
  };

  const calculateValues = () => {
    let feePercentage;
    const soldPrice = parseFloat(formData.soldPrice);
    const shippingCharged = parseFloat(formData.shippingCharged);
    const itemCost = parseFloat(formData.itemCost);
    const shippingCost = parseFloat(formData.shippingCost);

    const numberOfOrders = parseFloat(formData.numberOfOrders);
    const ebayStore = formData.ebayStore;
    const sellerLevel= formData.sellerLevel;

    const overseaSales = formData.overseaSales;
    const promotedAdRate = parseFloat(formData.promotedAdRate);
    const donatedToCharity = parseFloat(formData.donatedToCharity);

    const calculationMethod = formData.calculationMethod;
    const salesTaxAmount = parseFloat(formData.salesTaxAmount);
    const salesTaxIncludeShipping = formData.salesTaxIncludeShipping


    const selectedCategoryObj = itemCategories.find((category) => category.value === formData.itemCategory);
    const selectedSubcategoryObj = selectedCategoryObj?.childArr.find((child) => child.value === formData.subCategory);

    console.log("Selected Parent Category:", selectedCategoryObj);
    console.log("Selected Child Category:", selectedSubcategoryObj);

    if(selectedCategoryObj){
      if(selectedCategoryObj?.value === 'everythingelse'){
        if(ebayStore === 'no') {
          if(soldPrice < selectedCategoryObj.percentageValue.sellerLevel.portionUpAmount) {
            feePercentage = selectedCategoryObj.percentageValue.sellerLevel.portionUpPercent;
          } else {
            feePercentage = selectedCategoryObj.percentageValue.sellerLevel.portionAbovePercent;
          }
        } else {
          if(soldPrice < selectedCategoryObj.percentageValue.ebayStore.portionUpAmount) {
            feePercentage = selectedCategoryObj.percentageValue.ebayStore.portionUpPercent;
          } else {
            feePercentage = selectedCategoryObj.percentageValue.ebayStore.portionAbovePercent;
          }
        }
      } else if(selectedSubcategoryObj?.value === 'art'){
        feePercentage = selectedCategoryObj.childArr[0].percentageValue.sellerLevel.percentageValue;
      }
    }
    
    const feePercentageParsed = parseFloat(feePercentage).toFixed(2);
    const ebayFee = ((((soldPrice + shippingCharged) * numberOfOrders) / 100) * feePercentageParsed) + (numberOfOrders * 0.30);

    // Old Code:
    // const ebayFee = (soldPrice * 0.1325) + (numberOfOrders * 0.30);
    // const feePercentage = ((ebayFee / soldPrice) * 100).toFixed(2);
    const feePercentageV = (numberOfOrders * 0.30).toFixed(2);

    // Sales Tax Calculation
    let salesTax;
    let salesTaxInitalY = (soldPrice + shippingCharged) * numberOfOrders;
    let salesTaxInitalN = (soldPrice * numberOfOrders);
    if(calculationMethod === 'percentage') {
      if(salesTaxIncludeShipping === 'yes'){
        salesTax = (salesTaxInitalY / 100) * salesTaxAmount;
      } else {
        salesTax = (salesTaxInitalN / 100) * salesTaxAmount;
      }
    } else {
      salesTax = salesTaxAmount;
    }
    
    // const salesTax = ((soldPrice * numberOfOrders) + shippingCharged).toFixed(2);
    // const totalProfit = (soldPrice - ebayFee - (soldPrice * salesTax)).toFixed(2);
    // const profitMargin = (((totalProfit - soldPrice * salesTax) / soldPrice) * 100).toFixed(2);

    const totalProfit = (((soldPrice + shippingCharged) * numberOfOrders) - ((itemCost + shippingCost) * numberOfOrders)) - ebayFee;
    const profitMargin = (totalProfit * 100) / ((soldPrice + shippingCharged) * numberOfOrders);

    return {
      ebayFee: ebayFee.toFixed(2),
      feePercentage: feePercentageParsed,
      feePercentageV,
      salesTax: salesTax.toFixed(2),
      totalProfit: parseFloat(totalProfit).toFixed(2),
      profitMargin: parseFloat(profitMargin).toFixed(2)
    };
  };
  
  const [resultValues, setResultValues] = useState({
    ebayFee: 0,
    feePercentage: 0,
    feePercentageV: 0,
    salesTax: 0,
    totalProfit: 0,
    profitMargin: 0,
  });

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
            { formData.calculationMethod === 'percentage' && (
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
            )}
          </div>

          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-md-6">
              <label>Item category</label>
              <select id="item-category" name="itemCategory" className="form-control" value={formData.itemCategory} onChange={handleDropdownChange}>
                {getParentOptions()}
              </select>
            </div>
          </div>
          {itemCategories
            .find((category) => category.value === formData.itemCategory)
            ?.haveChild && (
            <div className="row justify-content-center mb-5">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  {formData.itemCategory !== "Everything else" && (
                    <label>{formData.itemCategory} subcategory</label>
                  )}
                  <select
                    id="sub-category"
                    name="subCategory"
                    className="form-control"
                    value={formData.subCategory}
                    onChange={handleDropdownChange}
                  >
                    <option value="" disabled selected>Select</option>
                    {itemCategories
                      .find((category) => category.value === formData.itemCategory)
                      ?.childArr.map((child) => (
                        <option key={child.value} value={child.value}>
                          {child.displayName}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          )}

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
