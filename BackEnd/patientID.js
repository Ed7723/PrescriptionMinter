class PatientID{
    constructor(firstname, surname, dob, sex){
    this.firstname = firstname;
    this.surname = surname;
    this.dob = dob;
    this.sex = sex;
    }
}

async function create_patient(){

    let patient = new PatientID(document.getElementById("firstname").value, document.getElementById("surname").value, document.getElementById("dob").value, document.getElementById("sex").value)

    localStorage.setItem(document.getElementById('patIDSeedField').value, JSON.stringify(patient))

    results += '\nPatient profile created.'
    document.getElementById('PatientResultField').value = results
}

async function get_patient(){
    seed = document.getElementById('patIDField').value
    patient_profile = JSON.parse(localStorage.getItem(seed))
    document.getElementById("firstname") = patient_profile.firstname
    document.getElementById("surname") = patient_profile.surname
    document.getElementById("dob") = patient_profile.dob
    document.getElementById("sex") = patient_profile.sex
}