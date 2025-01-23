async function getUsers() {
    const resp=await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users=await resp.json();
    const result=users.map(function(user){
        return `<div class="user">
                    <img src="./assets/images/profile.png">
                    <div class="name">
                        <h3>${user.name}</h3>
                       <a href='${user.website}'><i class="fa fa-link" aria-hidden="true"></i></a> 
                    </div>
                    <div class="contact_info">
                        <div class="phone">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <p>${user.phone}</p>
                        </div>
                        <div class="email">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <p>${user.email}</p>
                        </div>
                    </div>
                    <div class="address">
                        <h4>address</h4>
                        <p> city: ${user.address.city}</p>
                        <p> street: ${user.address.street}</p>
                        <p> suite: ${user.address.suite}</p>
                        <p> zipcode: ${user.address.zipcode}</p>
                        <p>geo:(${user.address.geo.lat},${user.address.geo.lng})</p>
                    </div>
                    <div class="company">
                        <h4>company</h4>
                        <p> name: ${user.company.name}</p>
                        <p> catchPhrase:${user.company.catchPhrase}</p>
                        <p> bs: ${user.company.bs}</p>
                    </div>
                </div>`;
    }).join('');
    document.querySelector(".row").innerHTML=result;
}
getUsers();

