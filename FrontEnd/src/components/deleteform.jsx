import React,{useState} from 'react';
//This component will enabling deletion of patients within the database.
export default function Deleteform() {
  const [form, setForm] = useState({
    patientIDSeed:"",
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
  
    const toBeDeleted = { ...form };
    //Currently only works on localhost
    await fetch("http://localhost:8000/routing/:id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toBeDeleted),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({
        patientIDSeed:"",
    });
  }

    return (
      <>
      <div className="max-w-2xl mx-auto bg-white p-16"> 
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="patient_id_seed" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">Input the ID you want to delete</label>
                <input type="text" id="patient_id_seed" className="bg-darkGrayishBlue border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID" value = {form.patientIDSeed} onChange={(e) => updateForm({ patientIDSeed: e.target.value })} required />
            </div>
            <button type="submit" className="py-2 px-4  bg-lightBlue hover:bg-brightBlue focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Delete!
            </button>
        </form>
      </div>
      </>
    );
  }