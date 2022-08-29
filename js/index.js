const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "Evilina Pustynskaya " + thisYear;
footer.appendChild(copyright);

const skills = ['HTML', 'JavaScript', 'CSS'];
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

var githubRequest = new XMLHttpRequest();
    githubRequest.open("GET", "https://api.github.com/users/Evilina-HS/repos");
    githubRequest.send();
    githubRequest.addEventListener("load", () => {
    var repositories = JSON.parse(githubRequest.response);
    console.log(repositories);
      
const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');
for (let i = 0; i < repositories.length; i += 1) {
    var project = document.createElement('li');
    var projectDate = document.createElement('span');
    var projectLanguage = document.createElement('span');
    project.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a>`;
    projectDate.innerHTML = `created: ${repositories[i].created_at}`;
    if (repositories[i].language === null) {
        projectLanguage.innerHTML = `language: -`;
    } else {
    projectLanguage.innerHTML = `language: ${repositories[i].language}`;
    }
    projectList.appendChild(project);
    projectList.appendChild(projectDate);
    projectList.appendChild(projectLanguage);
}
 });
