import React, { useState, Fragment, useEffect } from "react";
import { Card, TextInput, Select, Label, Button } from "flowbite-react";
import { Dialog, Transition } from "@headlessui/react";

const AccountForm = () => {
  const [id, setId] = useState();
  const [firstName, setfirstName] = useState("");
  const [firstNameError, setfirstNameError] = useState("");

  const [middleName, setMiddleName] = useState("");
  const [middleNameError, setMiddleNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [contactNumber, setContactNumber] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [department, setDepartment] = useState("");
  const [departmentError, setDepartmentError] = useState("");

  const [position, setPosition] = useState("");
  const [positionError, setPositionError] = useState("");

  const [status, setStatus] = useState("");
  const [statusError, setStatusError] = useState("");

  const [formValid, setFormvalid] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [departmentList, setDepartmentList] = useState([]);
  const [positionList, setPositionList] = useState([]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const HeadLessModal = () => {
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Message Dialog
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You are about to add information. Proceed?
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex mr-3 justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-neutral-50"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-neutral-50 "
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };
  const handleChange = (e) => {
    if (e.target.id === "firstName") validateFirstName(e.target.value);
    else if (e.target.id === "middleName") validateMiddleName(e.target.value);
    else if (e.target.id === "lastName") validateLastName(e.target.value);
    else if (e.target.id === "address") validateAddress(e.target.value);
    else if (e.target.id === "email") validateEmail(e.target.value);
    else if (e.target.id === "age") validateAge(e.target.value);
    else if (e.target.id === "contactNumber")
      validateContactNumber(e.target.value);
    else if (e.target.id === "username") validateUsername(e.target.value);
    else if (e.target.id === "password") validatePassword(e.target.value);
    else if (e.target.id === "confirmPassword")
      validateConfirmPassword(e.target.value);
    else if (e.target.id === "department") validateDepartment(e.target.value);
    else if (e.target.id === "position") validatePosition(e.target.value);
    else if (e.target.id === "status") validateStatus(e.target.value);
  };
  const validateFirstName = (firstName) => {
    let formIsValid = formValid;
    let firstNameErrorMessage = "";
    let pattern = /^[A-Za-z\s]*$/;

    if (firstName.trim() === "") {
      formIsValid = false;
      firstNameErrorMessage = "This field is required.";
    } else if (!pattern.test(firstName)) {
      formIsValid = false;
      firstNameErrorMessage = "First Name must contains alphabet.";
    } else {
      formIsValid = true;
      firstNameErrorMessage = "";
    }

    setfirstName(firstName);
    setfirstNameError(firstNameErrorMessage);
    return formIsValid;
  };
  const validateMiddleName = (middleName) => {
    let formIsValid = formValid;
    let middleNameErrorMessage = "";
    let pattern = /^[A-Za-z\s]*$/;

    if (middleName.trim() === "") {
      formIsValid = false;
      middleNameErrorMessage = "This field is required.";
    } else if (!pattern.test(middleName)) {
      formIsValid = false;
      middleNameErrorMessage = "Middle Name must contains alphabet.";
    } else {
      formIsValid = true;
      middleNameErrorMessage = "";
    }

    setMiddleName(middleName);
    setMiddleNameError(middleNameErrorMessage);
    return formIsValid;
  };
  const validateLastName = (lastName) => {
    let formIsValid = formValid;
    let lastNameErrorMessage = "";
    let pattern = /^[A-Za-z\s]*$/;

    if (lastName.trim() === "") {
      formIsValid = false;
      lastNameErrorMessage = "This field is required.";
    } else if (!pattern.test(lastName)) {
      formIsValid = false;
      lastNameErrorMessage = "Last Name must contains alphabet.";
    } else {
      formIsValid = true;
      lastNameErrorMessage = "";
    }

    setLastName(lastName);
    setLastNameError(lastNameErrorMessage);
    return formIsValid;
  };
  const validateAddress = (address) => {
    let formIsValid = formValid;
    let addressErrorMessage = "";
    if (address.trim() === "") {
      formIsValid = false;
      addressErrorMessage = "This field is required.";
    } else {
      formIsValid = true;
      addressErrorMessage = "";
    }
    setAddress(address);
    setAddressError(addressErrorMessage);
    return formIsValid;
  };
  const validateEmail = (email) => {
    let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    let formIsValid = formValid;
    let emailErrorMessage = "";

    if (email.trim() === "") {
      formIsValid = false;
      emailErrorMessage = "This field is required.";
    } else if (!pattern.test(email)) {
      formIsValid = false;
      emailErrorMessage = "This email is not valid.";
    } else {
      formIsValid = true;
      emailErrorMessage = "";
    }

    setEmail(email);
    setEmailError(emailErrorMessage);

    return formIsValid;
  };
  const validateAge = (age) => {
    let pattern = /^\d+$/;
    let formIsValid = formValid;
    let ageErrorMessage = "";

    if (age.trim() === "") {
      formIsValid = false;
      ageErrorMessage = "This field is required.";
    } else if (!pattern.test(age)) {
      formIsValid = false;
      ageErrorMessage = "This age is not valid.";
    } else {
      formIsValid = true;
      ageErrorMessage = "";
    }

    setAge(age);
    setAgeError(ageErrorMessage);

    return formIsValid;
  };
  const validateContactNumber = (contactNumber) => {
    let pattern = /^\d+$/;
    let formIsValid = formValid;
    let contactNumberErrorMessage = "";

    if (contactNumber.trim() === "") {
      formIsValid = false;
      contactNumberErrorMessage = "This field is required.";
    } else if (!pattern.test(contactNumber)) {
      formIsValid = false;
      contactNumberErrorMessage = "This contact number is not valid.";
    } else if (contactNumber.trim().length < 10) {
      formIsValid = false;
      contactNumberErrorMessage = "The length of is not valid.";
    } else {
      formIsValid = true;
      contactNumberErrorMessage = "";
    }

    setContactNumber(contactNumber);
    setContactNumberError(contactNumberErrorMessage);

    return formIsValid;
  };
  const validateUsername = (username) => {
    let formIsValid = formValid;
    let usernameErrorMessage = "";

    if (username.trim() === "") {
      formIsValid = false;
      usernameErrorMessage = "This field is required.";
    } else if (username.trim().length <= 7) {
      formIsValid = false;
      usernameErrorMessage = "Minimum of 8 characters.";
    } else {
      formIsValid = true;
      usernameErrorMessage = "";
    }

    setUsername(username);
    setUsernameError(usernameErrorMessage);
    return formIsValid;
  };
  const validatePassword = (password) => {
    let formIsValid = formValid;
    let passwordErrorMessage = "";

    if (password.trim() === "") {
      formIsValid = false;
      passwordErrorMessage = "This field is required.";
    } else if (password.trim().length <= 7) {
      formIsValid = false;
      passwordErrorMessage = "Minimum of 8 characters.";
    } else {
      formIsValid = true;
      passwordErrorMessage = "";
    }
    setPassword(password);
    setPasswordError(passwordErrorMessage);
    return formIsValid;
  };
  const validateConfirmPassword = (confirmPassword) => {
    let formIsValid = formValid;
    let confirmPasswordErrorMessage = "";
    if (confirmPassword.trim() === "") {
      formIsValid = false;
      confirmPasswordErrorMessage = "This field is required.";
    } else if (confirmPassword.trim().length <= 7) {
      formIsValid = false;
      confirmPasswordErrorMessage = "Minimum of 8 characters.";
    } else if (confirmPassword.trim() !== password) {
      formIsValid = false;
      confirmPasswordErrorMessage = "The password is not match.";
    } else {
      formIsValid = true;
      confirmPasswordErrorMessage = "";
    }
    setConfirmPassword(confirmPassword);
    setConfirmPasswordError(confirmPasswordErrorMessage);
    return formIsValid;
  };
  const validateDepartment = (department) => {
    let formIsValid = formValid;
    let departmentErrorMessage = "";
    if (department.trim() == -1) {
      formIsValid = false;
      departmentErrorMessage = "Please select available department.";
    } else {
      formIsValid = true;
      departmentErrorMessage = "";
    }

    setDepartment(department);
    setDepartmentError(departmentErrorMessage);
    return formIsValid;
  };
  const validatePosition = (position) => {
    let formIsValid = formValid;
    let positionErrorMessage = "";
    if (position.trim() == -1) {
      formIsValid = false;
      positionErrorMessage = "Please select available position.";
    } else {
      formIsValid = true;
      positionErrorMessage = "";
    }

    setPosition(position);
    setPositionError(positionErrorMessage);
    return formIsValid;
  };
  const validateStatus = (status) => {
    let formIsValid = formValid;
    let statusErrorMessage = "";
    if (status.trim() == -1) {
      formIsValid = false;
      statusErrorMessage = "Please select status.";
    } else {
      formIsValid = true;
      statusErrorMessage = "";
    }

    setStatus(status);
    setStatusError(statusErrorMessage);
    return formIsValid;
  };

  const handleSave = (e) => {
    e.preventDefault();

    const data = {
      employeeId: 0,
      employeeFirstName: firstName,
      employeeMiddleName: middleName,
      employeeLastName: lastName,
      employeeAddress: address,
      employeeAge: age,
      employeeEmail: email,
      employeeContactNumber: contactNumber,
      employeeStatus: status === "Active" ? true : false,
      departmentName: department,
      positionName: position,
      username: username,
      password: password,
    };
    setIsOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validateFirstName(firstName) &&
      validateMiddleName(middleName) &&
      validateLastName(lastName) &&
      validateAddress(address) &&
      validateAge(age) &&
      validateEmail(email) &&
      validateContactNumber(contactNumber) &&
      validateUsername(username) &&
      validatePassword(password) &&
      validateConfirmPassword(confirmPassword) &&
      validateDepartment(department) &&
      validatePosition(position) &&
      validateStatus(status)
    ) {
      openModal();
      setSubmitError("");
    } else {
      setSubmitError("Please complete all fields.");
    }
  };
  return (
    <>
      <Card>
        <form className="flex flex-col gap-4 text-left" onSubmit={handleSubmit}>
          <div>
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Employee Information
              </h3>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Personal details and application.
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Personal Information
                  </dt>

                  <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex flex-col sm:flex-row">
                    <div className="mb-1 block w-full mr-2 mt-1">
                      <Label
                        value="First name"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <TextInput
                        id="firstName"
                        placeholder="First Name"
                        required
                        type="text"
                        onChange={handleChange}
                        value={firstName}
                      />
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {firstNameError}
                      </p>
                    </div>

                    <div className="mb-1 block w-full mr-2 mt-1">
                      <Label
                        value="Middle name"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <TextInput
                        id="middleName"
                        placeholder="Middle Name"
                        required
                        onChange={handleChange}
                        value={middleName}
                        type="text"
                      />
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {middleNameError}{" "}
                      </p>
                    </div>
                    <div className="mb-1 block w-full mr-2 mt-1">
                      <Label
                        value="Last name"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <TextInput
                        id="lastName"
                        placeholder="Last Name"
                        required
                        onChange={handleChange}
                        value={lastName}
                        type="text"
                      />
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {lastNameError}
                      </p>
                    </div>
                  </div>
                  <dt className="text-sm font-medium leading-6 text-gray-900"></dt>

                  <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex flex-col sm:flex-row">
                    <div className="mb-1 block w-full mr-2">
                      <Label
                        value="Address"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <TextInput
                        id="address"
                        placeholder="Address"
                        required
                        type="text"
                        onChange={handleChange}
                        value={address}
                        className="w-full"
                      />
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {addressError}
                      </p>
                    </div>
                  </div>
                  <dt className="text-sm font-medium leading-6 text-gray-900"></dt>

                  <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex flex-col sm:flex-row">
                    <div className="mb-1 block w-full mr-2">
                      <Label
                        value="Age"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <TextInput
                        id="age"
                        placeholder="Age"
                        required
                        type="text"
                        onChange={handleChange}
                        value={age}
                        className="w-full"
                      />
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {ageError}
                      </p>
                    </div>
                    <div className="mb-1 block w-full mr-2">
                      <Label
                        value="Email"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <TextInput
                        id="email"
                        placeholder="Email"
                        required
                        type="email"
                        onChange={handleChange}
                        value={email}
                        className="w-full"
                      />
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {emailError}
                      </p>
                    </div>
                    <div className="mb-1 block w-full mr-2">
                      <Label
                        value="Contact Number"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <TextInput
                        id="contactNumber"
                        placeholder="Contact Number"
                        required
                        type="text"
                        className="w-full"
                        onChange={handleChange}
                        value={contactNumber}
                      />
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {contactNumberError}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Account Information
                  </dt>
                  <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex flex-col sm:flex-row">
                    <div className="mb-1 block w-full mr-2">
                      <Label
                        value="Department"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <Select
                        id="department"
                        required
                        className="mr-2 w-full mt-1"
                        value={department}
                        onChange={handleChange}
                      >
                        <option value={-1}>Select an option</option>
                        {departmentList.map((dept) => {
                          return (
                            <option key={dept.id} value={dept.name}>
                              {dept.name}
                            </option>
                          );
                        })}
                      </Select>
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {departmentError}
                      </p>
                    </div>
                    <div className="mb-1 block w-full mr-2">
                      <Label
                        value="Position"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <Select
                        id="position"
                        required
                        className="mr-2 w-full mt-1"
                        value={position}
                        onChange={handleChange}
                      >
                        <option value={-1}>Select an option</option>
                        {positionList.map((post) => {
                          return (
                            <option key={post.id} value={post.name}>
                              {post.name}
                            </option>
                          );
                        })}
                      </Select>
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {positionError}
                      </p>
                    </div>
                    <div className="mb-1 block w-full mr-2">
                      <Label
                        value="Status"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <Select
                        id="status"
                        required
                        className="mr-2 w-full mt-1"
                        value={status}
                        onChange={handleChange}
                      >
                        <option value={-1}>Select an option</option>
                        <option value="Active">Active</option>
                        <option value="Inacitve">Inacitve</option>
                      </Select>
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {statusError}
                      </p>
                    </div>
                  </div>
                  <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                  <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex flex-col sm:flex-row">
                    <div className="mb-1 block w-full mr-2">
                      <Label
                        value="Username"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <TextInput
                        id="username"
                        placeholder="Username"
                        required
                        type="text"
                        value={username}
                        onChange={handleChange}
                        className="w-full"
                      />
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {usernameError}
                      </p>
                    </div>
                    <div className="mb-1 block w-full mr-2">
                      <Label
                        value="Password"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <TextInput
                        id="password"
                        placeholder="Password"
                        required
                        type="password"
                        value={password}
                        onChange={handleChange}
                        className="w-full"
                      />
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {" "}
                        {passwordError}
                      </p>
                    </div>
                    <div className="mb-1 block w-full mr-2">
                      <Label
                        value="Confirm Password"
                        className=" block mb-1 text-sm leading-6 text-gray-500"
                      />
                      <TextInput
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        type="password"
                        value={confirmPassword}
                        onChange={handleChange}
                        className="w-full"
                      />
                      <p className="left-0 bottom-0 text-sm text-red-500">
                        {confirmPasswordError}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6 sm:grid sm:gap-4 sm:px-0">
                  <Button type="submit" className="mt-4">
                    Save
                  </Button>
                  <p className="left-0 bottom-0 text-sm text-red-500 text-left">
                    {submitError}
                  </p>
                  <HeadLessModal />
                </div>
              </dl>
            </div>
          </div>
        </form>
      </Card>
      <div
        style={{
          position: "fixed",
          top: "10px", // Adjust the top and right values to position it as desired
          right: "10px",
          display: "flex",
          flexDirection: "column-reverse", // To stack toasts from top to bottom
          alignItems: "flex-end", // To align items to the right
        }}
      ></div>
    </>
  );
};

export default AccountForm;
