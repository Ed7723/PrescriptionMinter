//This component submits a form to create a new patient.
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export function Inputform() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        sex: "Male",
    });

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    const sex = [
        {
            label: "Male",
            value: "Male",
        },
        {
            label: "Female",
            value: "Female",
        },
        {
            label: "Other",
            value: "Other",
        },
    ];

    // This function will handle the submission.
    async function handleSubmit(e) {
        e.preventDefault();
        const newPerson = { ...form };
        //Currently only works on localhost
        await fetch("http://localhost:8000/routing/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
            })
            .catch(error => {
                window.alert(error);
                return;
            });
        setForm({
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            sex: "Male",
        });
        //navigate(`/`,{replace : true});

    }

    return (
        <div className="max-w-2xl mx-auto bg-white p-16 h-screen">
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                        <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" value={form.firstName} onChange={(e) => updateForm({ firstName: e.target.value })} required />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                        <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" value={form.lastName} onChange={(e) => updateForm({ lastName: e.target.value })} required />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date of Birth</label>
                        <input type="date" id="dateOfBirth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value={form.dateOfBirth} onChange={(e) => updateForm({ dateOfBirth: e.target.value })} required />
                    </div>
                    <div>
                        <label htmlFor="sex" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select Sex</label>
                        <select id="sex" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={form.sex} onChange={(e) => updateForm({ sex: e.target.value })} required>
                            {sex.map((sex) => (
                                <option key={sex.value} value={sex.value}>{sex.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="grid gap-6 mb-6">
                    <button type="submit" className="text-whiteTwo bg-lightBlue hover:bg-brightBlue focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </div>
    )
}