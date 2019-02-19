const data =[
    {
        name:'John Doe',
        age:34,
        gender:'male',
        lookingFor:'female',
        location:'Boston Ma',
        image:'http://api.randomuser.me/portraits/men/57.jpg'
    },
    {
        name:'Jen Smith',
        age:26,
        gender:'female',
        lookingFor:'male',
        location:'Miami Florida',
        image:'http://api.randomuser.me/portraits/women/67.jpg'
    },
    {
        name:'William Johnson',
        age:35,
        gender:'male',
        lookingFor:'female',
        location:'Paris France',
        image:'http://api.randomuser.me/portraits/men/47.jpg'
    },
    {
        name:'Ines Smith',
        age:27,
        gender:'female',
        lookingFor:'male',
        location:'Lille France',
        image:'http://api.randomuser.me/portraits/women/80.jpg'
    },
];
// Next Event
document.getElementById('next').addEventListener('click',nextProfile);

// NextProfile function
function nextProfile(){
    const currentProfile=profiles.next().value;
    if(currentProfile !=undefined){
        document.getElementById('profileDisplay').innerHTML=`
        <ul class="list-group">
        <li class ="list-group-item"> Name: ${currentProfile.name}</li>
        <li class ="list-group-item">Age : ${currentProfile.age}</li>
        <li class ="list-group-item"> Preferences :
         ${currentProfile.gender} ${currentProfile.lookingFor}</li>
        <li class ="list-group-item">Location: ${currentProfile.location}</li>
        
        </li>
        </ul>
        `;
        document.getElementById('imageDisplay').innerHTML=`
        <img src="${currentProfile.image}">
        `;
    }else {
        // no more profile=> reload
        window.location.reload();

    }

}

function profileIterator(profiles){
 let index =0;
 return {
     next: function(){
         return index<profiles.length?{
             value:profiles[index++], done:false
         }:{
             done:true
         }
     }
 };
}
const profiles = profileIterator(data);
// call First Profile
 nextProfile();
// console.log(profiles.next());
// console.log(profiles.next());
// console.log(profiles.next());
// console.log(profiles.next());
// console.log(profiles.next());