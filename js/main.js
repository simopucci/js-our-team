// array con i dati delle persone del team
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// recupero il contenitore dei profili del team
const profileContainer = document.getElementById('profile');

// for loop che genera le card per ogni persona
for (let person of team) {
    console.log(person);
    
    const profileHtml = `
    <div class="col">
        <div class="card">
            <img src="./img/${person.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-center">${person.name}</h5>
                <p class="card-text text-center">${person.role}</p>
            </div>
        </div>
    </div>
    `;

    profileContainer.innerHTML += profileHtml;
}
