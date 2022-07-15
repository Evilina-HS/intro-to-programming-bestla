const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "Evilina Pustynskaya " + thisYear;
footer.appendChild(copyright);

const skills = ['HTML', 'JavaScript', 'CSS'];
const skillsSection = document.getElementById('skills');
var skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}