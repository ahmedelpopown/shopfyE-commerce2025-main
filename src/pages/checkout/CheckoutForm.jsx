import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Country, City } from "country-state-city";
import Select from "react-select";
import axios from "axios";

const CheckoutForm = () => {
  const location = useLocation();
  const { cart, total } = location.state || { cart: [], total: 0 };
console.log(cart)
  const [method, setMethod] = useState("bank");
  const [agree, setAgree] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
    const [cityOptions, setCityOptions] = useState([]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    address: "",
    zip_code: "",
    phone: "",
    email: "",
    country: "",
    city: "",
  });

  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const handleCountryChange = (option) => {
    setSelectedCountry(option);
    const cities = City.getCitiesOfCountry(option.value);
    setCityOptions(
      cities.map((city) => ({ value: city.name, label: city.name }))
    );
    setFormData({ ...formData, country: option.label });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    ...formData,
    payment_method: method,
    country: selectedCountry?.label || "",
    city: selectedCity?.label || "",
    total,
    cart: cart.map((item) => ({
      product_id: item.product_id, // ✅ استخدم id من داخل الكائن product
      variant_id: item.variant_id,
      price: parseFloat(item.price),
      quantity: item.quantity,
      subtotal: item.subtotal ,
    })),
  };

  console.log("Payload to send:", payload); // useful debug

  try {
    const response = await axios.post("http://localhost:8000/api/checkout", payload);
    console.log("Order Created:", response.data);
    alert("Order placed successfully!");
  } catch (error) {
    console.error("Order Error:", error);
    console.log("Response:", error.response?.data);
    alert("هناك خطأ في البيانات، راجع الكونسول.");
  }
};


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
                         value={formData.first_name}
                         
          onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
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
                          value={formData.last_name}
          onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}

                className="p-2 transition duration-200 rounded-sm text-textColor h-11 col-12 border-1 focus:outline-none focus:ring-customTeal focus:border-customTeal"
              />
            </div>{" "}
            <div className="flex flex-row flex-wrap items-start w-full gap-2 mt-2">
              {" "}
              <label
                htmlFor=""
                className="flex flex-row flex-wrap gap-2 text-textColor"
              >
                company_name name (optional)<span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                          value={formData.company_name}
          onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}

                className="p-2 transition duration-200 rounded-sm text-textColor h-11 col-12 border-1 focus:outline-none focus:ring-customTeal focus:border-customTeal"
              />
            </div>{" "}
            <div className="flex flex-row flex-wrap items-start w-full gap-2 mt-2">
              <label className="flex flex-row flex-wrap gap-2 text-textColor">
                Country <span className="text-[red]">*</span>
              </label>
              <Select
                options={countries}
                onChange={handleCountryChange}
                placeholder="Select Country"
                className="col-12 text-textColor"
                styles={{
                  control: (base, state) => ({
                    ...base,
                    padding: "0.25rem",
                    minHeight: "2.75rem",
                    borderRadius: "0.125rem",
                    borderColor: state.isFocused ? "#04d39f" : "#e5e7eb", // customTeal / gray-200
                    boxShadow: state.isFocused ? "0 0 0 1px #0f766e" : "none",
                    "&:hover": {
                      borderColor: "#04d39f",
                    },
                  }),
                  option: (base, { isFocused }) => ({
                    ...base,
                    backgroundColor: isFocused ? "#04d39f" : "white",
                    color: isFocused ? "white" : "black",
                  }),
                }}
              />
            </div>
            <div className="flex flex-row flex-wrap items-start w-full gap-2 mt-2">
              <label className="flex flex-row flex-wrap gap-2 text-textColor">
                City <span className="text-[red]">*</span>
              </label>
              <Select
                 options={cityOptions}
  onChange={(option) => {
    setSelectedCity(option);
    setFormData({ ...formData, city: option.label });
  }}
  value={selectedCity}
  isDisabled={!selectedCountry}

                placeholder="Select City"
                className="col-12 text-textColor"
                styles={{
                  control: (base, state) => ({
                    ...base,
                    padding: "0.25rem",
                    minHeight: "2.75rem",
                    borderRadius: "0.125rem",
                    borderColor: state.isFocused ? "#04d39f" : "#e5e7eb",
                    boxShadow: state.isFocused ? "0 0 0 1px #04d39f" : "none",
                    "&:hover": {
                      borderColor: "#04d39f",
                    },
                  }),
                  option: (base, { isFocused }) => ({
                    ...base,
                    backgroundColor: isFocused ? "#04d39f" : "white",
                    color: isFocused ? "white" : "black",
                  }),
                }}
              />
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
                        value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}

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
                        value={formData.zip_code}
          onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })}

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
                                        value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}

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
                                        value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}

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
            <p>Girls Lace Mock Neck Dress - art class - M × 1</p> <h3>32.00</h3>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-between p-2 border-b col-10">
            <div className="">
              <h1>shipping</h1>
            </div>
            <div className=" col-3">
              <span className="flex flex-row flex-wrap items-center gap-2 p-2 text-sm col-12">
                {" "}
                <input type="radio" /> <h3>Flat rate</h3>
              </span>
              <span className="flex flex-row flex-wrap items-center gap-2 p-2 text-sm col-12">
                {" "}
                <input type="radio" /> <h3>Local Pickup</h3>
              </span>
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
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
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
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <a href="#" className="text-green-500 underline">
                privacy policy
              </a>
              .
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
           onClick={handleSubmit}
              className={`w-full py-3 text-white font-semibold ${
                agree
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-gray-400 cursor-not-allowed"
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
