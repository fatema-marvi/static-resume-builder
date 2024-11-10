// listing element
document.getElementById('resumeform')?.addEventListener('submit', function(event){
    event.preventDefault();

    //type assertion
    const profilePictureInput = document.getElementById("profilePicture")as HTMLInputElement;
    
    const nameElement = document.getElementById('name')as HTMLInputElement;
    const emailElement = document.getElementById('email')as HTMLInputElement;
    const contactElement = document.getElementById('contact number')as HTMLInputElement;
    const educationElement = document.getElementById('education')as HTMLInputElement;
    const experienceElement = document.getElementById('experience')as HTMLInputElement;
    const skillsElement = document.getElementById('skills')as HTMLInputElement;

    if (profilePictureInput && nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement){
       
        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
    
        //picture elements
        const profilePicturefile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";

    //create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL} alt="profile picture" class="profilePicture">` : ""}
    <p><strong>Name: </strong> ${name} </p>
    <p><strong>Email Address: </strong> ${email} </p>
    <p><strong>Name: </strong> ${contact} </p>

    <h3>Education</h3>
    <p>${education}</p>

     <h3>Experience</h3>
    <p>${experience}</p>

     <h3>Skills</h3>
    <p>${skills}</p>    
    `;

    const resumeOutputElement =document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }
    else {
        console.error ("the resume output elements are missing")
    }
}})