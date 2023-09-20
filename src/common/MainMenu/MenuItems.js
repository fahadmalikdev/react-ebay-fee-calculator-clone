import companyLogo from "../../assets/images/logo.jpg";
import usFlag from "../../assets/images/flags/small-flag/american-small.svg";
import ekFlag from "../../assets/images/flags/small-flag/uk-small.svg";
import ausFlag from "../../assets/images/flags/small-flag/australia-small.svg";
import canFlag from "../../assets/images/flags/small-flag/canada-small.svg";
import gerFlag from "../../assets/images/flags/small-flag/german-small.svg";
import frsFlag from "../../assets/images/flags/small-flag/france-small.svg";
import itFlag from "../../assets/images/flags/small-flag/italy.svg";

const menuItems = [
  {
    menuHeading: "Home",
    isDropDown: false,
    isMenuImage: false,
    menuImagePath: "",
    href: "/",
    dropdownArr: [],
  },
  {
    menuHeading: "",
    isDropDown: true,
    isMenuImage: true,
    menuImagePath: usFlag,
    dropdownArr: [
      {
        title: "eBay US",
        href: "/usa-ebay-calculator",
      },
      {
        title: "PayPal US",
        href: "/",
      },
      {
        title: "Amazon US",
        href: "/",
      },
      {
        title: "Etsy US",
        href: "/",
      },
      {
        title: "Cash App US",
        href: "/",
      },
      {
        title: "Square US",
        href: "/",
      },
      {
        title: "Copart US",
        href: "/",
      },
      {
        title: "Stripe US",
        href: "/",
      },
      {
        title: "Depop US",
        href: "/",
      },
    ],
  },
  {
    menuHeading: "",
    isDropDown: true,
    isMenuImage: true,
    menuImagePath: ekFlag,
    dropdownArr: [
      {
        title: "eBay Uk",
        href: "/",
      },
      {
        title: "Paypal UK",
        href: "/",
      },
      {
        title: "Amazon UK",
        href: "/",
      },
      {
        title: "Etsy UK",
        href: "/",
      },
      {
        title: "Depop UK",
        href: "/",
      },
      {
        title: "Copart UK",
        href: "/",
      },
      {
        title: "Stripe UK",
        href: "/",
      },
    ],
  },
  {
    menuHeading: "",
    isDropDown: true,
    isMenuImage: true,
    menuImagePath: ausFlag,
    dropdownArr: [
      {
        title: "eBay AU",
        href: "/",
      },
      {
        title: "Paypal AU",
        href: "/",
      }
    ],
  },
  {
    menuHeading: "",
    isDropDown: true,
    isMenuImage: true,
    menuImagePath: canFlag,
    dropdownArr: [
      {
        title: "eBay CA",
        href: "/",
      },
      {
        title: "PayPal CA",
        href: "/",
      }
    ],
  },
  {
    menuHeading: "",
    isDropDown: true,
    isMenuImage: true,
    menuImagePath: gerFlag,
    dropdownArr: [
      {
        title: "eBay DE",
        href: "/",
      },
      {
        title: "Paypal DE",
        href: "/",
      }
    ],
  },
  {
    menuHeading: "",
    isDropDown: true,
    isMenuImage: true,
    menuImagePath: frsFlag,
    dropdownArr: [
      {
        title: "eBay FR",
        href: "/",
      },
      {
        title: "PayPal FR",
        href: "/",
      }
    ],
  },
  {
    menuHeading: "",
    isDropDown: true,
    isMenuImage: true,
    menuImagePath: itFlag,
    dropdownArr: [
      {
        title: "eBay IT",
        href: "/",
      },
      {
        title: "Paypal IT",
        href: "/",
      }
    ],
  },
  {
    menuHeading: "Contact",
    isDropDown: false,
    isMenuImage: false,
    menuImagePath: "",
    href: "/",
    dropdownArr: [],
  },
];

export default menuItems;
