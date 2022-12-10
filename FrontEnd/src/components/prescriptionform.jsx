//This component submits a form to create a new prescription.
import React, { useState } from 'react'

export function Prescriptform() {
    const [form, setForm] = useState({
        patientName:"",
        drugName:"",
        expiryDate:"",
    });

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        const newPrescript = { ...form };
        await fetch("http://localhost:8000/routing/addPrescript", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPrescript),
            })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({
            patientName:"",
            drugName:"",
            expiryDate:"",
        });
    }

    return (
        <div className="max-w-2xl mx-auto bg-white p-16 h-screen">
            <form onSubmit={onSubmit}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label htmlFor="drugName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Drug Name</label>
                        <input type="text" id="drugName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" value={form.drugName} onChange={(e) => updateForm({ drugName:e.target.value })} required />
                    </div>
                    <div>
                        <label htmlFor="patientName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Patient Name</label>
                        <input type="text" id="patientName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" value={form.patientName} onChange={(e) => updateForm({ patientName: e.target.value })} required />
                    </div>
                </div>
                <div className="grid gap-6 mb-6">
                    <div>
                        <label htmlFor="expiryDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expiry Date</label>
                        <input type="date" id="expiryDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value={form.expiryDate} onChange={(e) => updateForm({ expiryDate: e.target.value })} required />
                    </div>
                    <button type="submit" className="text-whiteTwo bg-lightBlue hover:bg-brightBlue focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </div>
    )
}