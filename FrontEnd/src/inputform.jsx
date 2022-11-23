import React, { useState} from 'react'
import "./index.css"

export default function Inputform(){
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        patientIDResult:"",
        patientIDSeed:"",
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
      
        const newPerson = { ...form };
      
        await fetch("http://localhost:8000/record/add", {
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
            patientIDResult:"",
            patientIDSeed:"",
          });
    }

    return(
        <div className ="max-w-2xl mx-auto bg-white p-16">
            <form onSubmit = {onSubmit}>
                <div className ="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" value = {form.firstName} onChange={(e) => updateForm({ firstName: e.target.value })} required />
                    </div>
                    <div>
                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" value = {form.lastName} onChange={(e) => updateForm({ lastName: e.target.value })} required />
                    </div>
                    <div>
                        <label for="date_of_birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date of Birth</label>
                        <input type="date" id="date_of_birth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value = {form.dateOfBirth} onChange={(e) => updateForm({ dateOfBirth: e.target.value })} required />
                    </div>  
                    <div>
                        <label for="sex" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select Gender</label>
                        <select id="sex" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value ="male">Male</option>
                            <option value = "female">Female</option>
                            <option value = "other">Other</option>
                        </select>
                    </div>
                </div>
                <div className ="grid gap-6 mb-6">
                    <div>
                        <label for="patient_id_seed" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Patient ID Seed</label>
                        <input type="text" id="patient_id_seed" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value = {form.patientIDSeed} onChange={(e) => updateForm({ patientIDSeed: e.target.value })} required />
                    </div>
                    <div className="mb-6">
                        <label for="patient_id_result" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Patient ID Result</label>
                        <textarea id="patient_id_result" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value = {form.patientIDResult} onChange={(e) => updateForm({ patientIDResult: e.target.value })} required />
                    </div> 
                    <button type="submit" className="text-whiteTwo bg-blueOne hover:bg-blueTwo focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </div>
    )
}