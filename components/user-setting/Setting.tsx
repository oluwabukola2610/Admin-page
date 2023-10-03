import { Avatar } from "antd";

const Setting = () => {
  return (
    <div className="flex flex-col px-10 py-4 w-full">
      <h1 className="text-2xl font-semibold">Settings </h1>
      <div className="mt-8 space-y-4">
        <div className="py-4 px-4 text-sm font-medium">
          <span className="relative">
            <span className="text-base border-b border-gray-700 inline-block w-full">
              user information
            </span>
            <span className="text-base border-b-2 border-blue-600 absolute -bottom-1 left-0 w-[120px]" />
          </span>
        </div>

        <div className="p-3 w-full lg:max-w-5xl shadow-md rounded-md border bg-white/80">
          {/* profil Section */}
          <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-semibold font-serif">Profile Image</h1>
            <div className="flex items-center space-x-5 w-full md:w-[400px]">
              <div>
                <Avatar style={{ backgroundColor: "#CDA4FF" }}>JD</Avatar>
                <p className="text-xs text-blue-400 mt-1"> add photo</p>
              </div>
              <input
                type="file"
                id="avatar"
                accept="image/*"
                className="hidden w-full h-full cursor-pointer "
              />
              <p className="text-xs">
                we only accept this type of format (PNG, JPG). <br /> kindly
                upload photo not more that 5mb
              </p>
            </div>
          </div>
          <hr />
          {/* First Name Section */}
          <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 flex-col flex">
              <h1 className="font-semibold">First Name</h1>{" "}
              <span className="text-xs mt-2">
                You won&rsquo;t be able to change your name.{" "}
              </span>
            </div>
            <div className="space-x-2 flex flex-col md:flex-row w-full md:w-[400px]">
              <div className="w-full space-y-1">
                <label htmlFor="firstName" className="font-semibold text-sm">FirstName</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  disabled
                  className=" disabled:bg-blue-50 w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                />
              </div>
              <div className="w-full  space-y-1">
                <label htmlFor="firstName" className="font-semibold text-sm">
                  LastName</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  disabled
                  className=" disabled:bg-blue-50 w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                />
              </div>
            </div>
          </div>
          <hr />
          {/* Email Section */}
          <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 flex-col flex">
              <h1 className="font-semibold ">Email Adress</h1>
              <span className="text-xs mt-2">
                Your email address will receive all <br />
                communications and activity notifications from your account.{" "}
              </span>
            </div>
            <div className="flex flex-col space-y-1 w-full md:w-[400px]">
              <label htmlFor="email" className="font-semibold text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                disabled
                className=" disabled:bg-blue-50 w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
            </div>
          </div>
          <hr />
          {/* Phone Number Section */}
          <div className="mb-4 p-2 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 flex-col flex">
              <h1 className="font-semibold">Phone Number</h1>
              <span className="text-xs mt-2">
                OTP is sent to your phone number for verification purposes.{" "}
              </span>
            </div>
            <div className="flex flex-col space-y-1 w-full md:w-[400px]">
              <label htmlFor="" className="font-semibold text-sm">
                Phone Number
              </label>
              <div className="flex items-center">
                <select
                  id="countryCode"
                  disabled
                  className="w-1/4 px-3 py-[9px] disabled:bg-blue-50 border border-gray-300 text-gray-800 text-sm rounded-l-md focus:outline-none"
                >
                  <option value="+234">+234</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  disabled
                  className="w-3/5 px-3 disabled:bg-blue-50 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-r-md focus:outline-none"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-center items-center my-3">
            <button
              disabled
              className="btn w-[400px]   disabled:bg-blue-200 disabled:text-white"
            >
              Save Changes
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default Setting;
