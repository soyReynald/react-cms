import React, { useEffect, useState } from "react";

import Form from "./Form";
import FormInput from "./FormInput";

const Formulary = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        setMessage(`Hi, please confirm your data`);
    };

    const formInitialState = {
        fullName: "",
        dateBirth: "",
        testType: "",
        testDate: "",
        passport: "",
        age: "",
        gender: "",
        phoneNumber: "",
        patientType: "",
        room: "",
        departureDate: "",
        result: "",
    };

    useEffect(() => {
        if (message !== "") console.log(message); //TODO: to continue tomorrow
    }, [message]);

    return (
        <div className="container mx-auto rounded-lg pt-4">
            <h1 className="font-bold text-4xl text-center">Covid Tests</h1>

            <Form
                className={
                    "bg-cyan-600 shadow-md rounded-lg py-10 px-5 my-10 grid grid-cols-2 gap-10"
                }
                propsInitialState={formInitialState}
                submit={handleSubmit}
                buttonClassName="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-40 shadow-lg"
                buttonLabel="Send"
            >
                <h2 className="font-black text-3xl text-center text-white italic col-span-2">
                    Please fill the{" "}
                    <span className="text-red-800 font-bold">form</span>
                </h2>
                <div className="first-col">
                    <div className="mb-5">
                        <FormInput
                            name="fullName"
                            label="Full Name"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                            labelClassName="block text-white text-sm font-bold"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="mb-5">
                        <FormInput
                            name="testType"
                            label="Test Type"
                            type="select"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                            labelClassName="block text-white text-sm font-bold"
                        >
                            <option value="pcr">PCR</option>
                            <option value="pcr">Antigenyc</option>
                        </FormInput>
                    </div>
                    <div className="mb-5">
                        <FormInput
                            name="passport"
                            label="Passport"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                            labelClassName="block text-white text-sm font-bold"
                        />
                    </div>
                    <div className="mb-5">
                        <FormInput
                            type="select"
                            name="gender"
                            label="Gender"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                            labelClassName="block text-white text-sm font-bold"
                        >
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </FormInput>
                    </div>
                    <div className="mb-5">
                        <FormInput
                            type="select"
                            name="patientType"
                            label="Patient Type"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                            labelClassName="block text-white text-sm font-bold"
                        >
                            <option value="AS">Subvented Antigenyc</option>
                            <option value="AP">Private Antigenyc</option>
                            <option value="AE">Antigenyc Employee</option>
                            <option value="PCRP">Private PCR</option>
                            <option value="PCRE">Employee PCR</option>
                        </FormInput>
                    </div>
                    <div className="mb-5">
                        <FormInput
                            name="departureDate"
                            label="DepartureDate"
                            type="date"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                            labelClassName="block text-white text-sm font-bold"
                        />
                    </div>
                </div>

                <div className="second-col">
                    <div className="mb-5">
                        <FormInput
                            type="date"
                            name="dateBirth"
                            labelClassName="block text-white text-sm font-bold"
                            label="Date of Birth"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <FormInput
                            type="datetime-local"
                            name="testDate"
                            labelClassName="block text-white text-sm font-bold"
                            label="Test Date"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <FormInput
                            name="age"
                            label="Age"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                            labelClassName="block text-white text-sm font-bold"
                        />
                    </div>
                    <div className="mb-5">
                        <FormInput
                            name="phoneNumber"
                            label="Phone Number"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                            labelClassName="block text-white text-sm font-bold"
                        />
                    </div>
                    <div className="mb-5">
                        <FormInput
                            name="room"
                            label="Room"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                            labelClassName="block text-white text-sm font-bold"
                        />
                    </div>
                    <div className="mb-5">
                        <FormInput
                            name="result"
                            label="Result"
                            type="select"
                            className="border-2 w-full p-2 mt-2 placeholder-black italic rounded-md"
                            labelClassName="block text-white text-sm font-bold"
                        >
                            <option value="positive">Positive</option>
                            <option value="negative">Negative</option>
                        </FormInput>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Formulary;
