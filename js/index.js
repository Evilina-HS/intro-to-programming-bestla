const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "Evilina Pustynskaya " +'<i class="far fa-copyright"></i>'+ thisYear;
footer.appendChild(copyright);

const skills = ['HTML', 'JavaScript', 'CSS', 'SQL', 'Quality Assurance'];
const skillsSection = document.getElementById('skills');
var skillsList = skillsSection.querySelector('ul');

const messageForm = document.getElementsByName('leave_message')[0];

for(let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
    
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(name, email, message);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name} wrote  </a>`;
    newMessage.innerHTML += `<span>${ message }</span>`;
        
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.setAttribute('type','button');
    removeButton.addEventListener ('click', () => {
    const entry = removeButton.parentNode;
    entry.remove();
    });

    newMessage.appendChild(removeButton);
            
    messageList.appendChild(newMessage);
    messageForm.reset();
});

 fetch('https://api.github.com/users/Evilina-HS/repos')
 .then(checkStatus)
 .then(response => response.json())
 .then(data => reposList(data))
 .catch(error => alert(`Houston, we have a problem: ${error.message}`))

 function reposList (data){
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');
    for (let i = 0; i < data.length; i += 1) {
        var project = document.createElement('li');
        var projectDate = document.createElement('span');
        var projectLanguage = document.createElement('span');
        project.innerHTML = `<a href="${data[i].html_url}">${data[i].name}</a>`;
        projectDate.innerHTML = `created at: ${data[i].created_at}`;
            if (data[i].language === null) {
                 projectLanguage.innerHTML = ` programming language: -`;
            } else {
            projectLanguage.innerHTML = ` programming language: ${data[i].language}`;
    }
    projectList.appendChild(project);
    projectList.appendChild(projectDate);
    projectList.appendChild(projectLanguage);
}
 }
 
 function checkStatus(response) {
    if(response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response.statusText);
    }
 }