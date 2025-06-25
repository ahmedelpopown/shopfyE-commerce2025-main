import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";

const CheckoutForm = () => {
  const countries = [
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
  ];
  const [selected, setSelected] = useState("Ethiopia");
  const [isOpen, setIsOpen] = useState(false);
  const [method, setMethod] = useState("bank");
  const [agree, setAgree] = useState(false);

  return (
    <Layout>
      <div className="flex flex-row flex-wrap items-center justify-center col-12">
        <div className="px-[7%] py-[1%] col-12 flex flex-row flex-wrap items-center justify-between shadow-sm  bg-[#fbfbfbfd] text-2xl ">
          <h1 className="font-bold">Checkout</h1>
          <h1 className="text-sm">Home / Checkout</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-start mt-12 col-10">
          <div className="px-4 col-4 shadow-sm  bg-[#fbfbfbfd] p-4">
            <h1>
              Have a coupon?
              <Link>Click here to enter your code</Link>
            </h1>
          </div>
        </div>

        <div className="gap-4 px-4 mt-4 col-5">
          <h1 className="text-xl font-semibold">Billing details </h1>
          <form action="">
            <div className="flex flex-row flex-wrap items-start w-full gap-2 mt-4">
              {" "}
              <label
                htmlFor=""
                className="flex flex-row flex-wrap gap-2 text-textColor"
              >
                First name <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                className="p-2 transition duration-200 rounded-sm text-textColor h-11 col-12 border-1 focus:outline-none focus:ring-customTeal focus:border-customTeal"
              />
            </div>
            <div className="flex flex-row flex-wrap items-start w-full gap-2 mt-2">
              {" "}
              <label
                htmlFor=""
                className="flex flex-row flex-wrap gap-2 text-textColor"
              >
                Last name<span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                className="p-2 transition duration-200 rounded-sm text-textColor h-11 col-12 border-1 focus:outline-none focus:ring-customTeal focus:border-customTeal"
              />
            </div>{" "}
            <div className="flex flex-row flex-wrap items-start w-full gap-2 mt-2">
              {" "}
              <label
                htmlFor=""
                className="flex flex-row flex-wrap gap-2 text-textColor"
              >
                Company name (optional)<span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                className="p-2 transition duration-200 rounded-sm text-textColor h-11 col-12 border-1 focus:outline-none focus:ring-customTeal focus:border-customTeal"
              />
            </div>{" "}
            <div className="relative w-full gap-2 mt-2">
              <label
                htmlFor=""
                className="flex flex-row flex-wrap gap-2 text-textColor"
              >
                Country / Region{" "}
              </label>
              <div
                className="p-2 mt-2 bg-white border cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selected}
              </div>

              {isOpen && (
                <ul className="absolute z-10 w-full mt-1 overflow-y-auto bg-white border max-h-60">
                  {countries.map((country) => (
                    <li
                      key={country}
                      className={`p-2 hover:bg-customTeal hover:text-white cursor-pointer ${
                        selected === country
                          ? "bg-customTeal text-white"
                          : "text-gray-700"
                      }`}
                      onClick={() => {
                        setSelected(country);
                        setIsOpen(false);
                      }}
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex flex-row flex-wrap items-start w-full gap-2 mt-2">
              {" "}
              <label
                htmlFor=""
                className="flex flex-row flex-wrap gap-2 text-textColor"
              >
                Street address<span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                className="p-2 transition duration-200 rounded-sm text-textColor h-11 col-12 border-1 focus:outline-none focus:ring-customTeal focus:border-customTeal"
              />
            </div>
            <div className="flex flex-row flex-wrap items-start w-full gap-2 mt-2">
              {" "}
              <label
                htmlFor=""
                className="flex flex-row flex-wrap gap-2 text-textColor"
              >
                Town / City<span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                className="p-2 transition duration-200 rounded-sm text-textColor h-11 col-12 border-1 focus:outline-none focus:ring-customTeal focus:border-customTeal"
              />
            </div>
            <div className="flex flex-row flex-wrap items-start w-full gap-2 mt-2">
              {" "}
              <label
                htmlFor=""
                className="flex flex-row flex-wrap gap-2 text-textColor"
              >
                Postcode / ZIP<span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                className="p-2 transition duration-200 rounded-sm text-textColor h-11 col-12 border-1 focus:outline-none focus:ring-customTeal focus:border-customTeal"
              />
            </div>
            <div className="flex flex-row flex-wrap items-start w-full gap-2 mt-2">
              {" "}
              <label
                htmlFor=""
                className="flex flex-row flex-wrap gap-2 text-textColor"
              >
                Phone<span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                className="p-2 transition duration-200 rounded-sm text-textColor h-11 col-12 border-1 focus:outline-none focus:ring-customTeal focus:border-customTeal"
              />
            </div>
            <div className="flex flex-row flex-wrap items-start w-full gap-2 mt-2">
              {" "}
              <label
                htmlFor=""
                className="flex flex-row flex-wrap gap-2 text-textColor"
              >
                Email address <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                className="p-2 transition duration-200 rounded-sm text-textColor h-11 col-12 border-1 focus:outline-none focus:ring-customTeal focus:border-customTeal"
              />
            </div>
          </form>
        </div>



        
        <div className="flex flex-col flex-wrap items-center justify-between p-2 border col-5">
          <div className="flex flex-row flex-wrap items-center justify-between p-2 border-b col-10">
            <h1>product</h1> <h2>subtotal</h2>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-between p-2 border-b col-10">
            <p>Girls  Lace Mock Neck Dress - art class - M  × 1</p> <h3>32.00</h3>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-between p-2 border-b col-10">
             <div className=""><h1>shipping</h1></div>
             <div className=" col-3">
<span className="flex flex-row flex-wrap items-center gap-2 p-2 text-sm col-12">            <input type="radio" /> <h3>Flat rate</h3></span>
<span className="flex flex-row flex-wrap items-center gap-2 p-2 text-sm col-12">        <input type="radio" /> <h3>Local Pickup</h3></span>
             </div>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-between p-2 col-10">
<div className="">
            <h1>total</h1>

</div>
<div className="">
            <h1>39.00</h1>

</div>
          </div>
           <div className="max-w-xl p-4 mx-auto space-y-4 bg-white">

      {/* طرق الدفع */}
      <div className="space-y-4">
        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={method === "bank"}
              onChange={() => setMethod("bank")}
              className="mt-1"
            />
            <div>
              <span className="font-semibold">Direct bank transfer</span>
              {method === "bank" && (
                <div className="p-2 mt-2 text-sm text-gray-700 bg-gray-100 rounded">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </div>
              )}
            </div>
          </label>
        </div>

        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="check"
              checked={method === "check"}
              onChange={() => setMethod("check")}
            />
            <span>Check payments</span>
          </label>
        </div>

        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={method === "cod"}
              onChange={() => setMethod("cod")}
            />
            <span>Cash on delivery</span>
          </label>
        </div>

        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={method === "paypal"}
              onChange={() => setMethod("paypal")}
              className="mt-1"
            />
            <div>
              <span>PayPal</span>
              <div className="mt-1">
                <img
                  src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"
                  alt="PayPal"
                  className="w-48"
                />
                <a href="#" className="ml-2 text-sm text-green-500">
                  What is PayPal?
                </a>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* وصف الخصوصية */}
      <p className="text-sm text-gray-600">
        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
        <a href="#" className="text-green-500 underline">
          privacy policy
        </a>.
      </p>

      {/* الموافقة على الشروط */}
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
        I have read and agree to the website{" "}
        <a href="#" className="text-green-500 underline">
          terms and conditions
        </a>{" "}
        <span className="text-red-500">*</span>
      </label>

      {/* زر الطلب */}
      <button
        disabled={!agree}
        className={`w-full py-3 text-white font-semibold ${
          agree ? "bg-gray-800 hover:bg-black" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        PLACE ORDER
      </button>
    </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutForm;
