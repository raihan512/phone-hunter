const phoneSearchField = document.getElementById("phone-search-field");
const phoneSearchBtn = document.getElementById("phone-search-btn");
const phoneContainer = document.getElementById("phone-container");
const loader = document.getElementById("loader");
const noPhone = document.getElementById("no-phone");

// Search phone by click search button
phoneSearchBtn.addEventListener("click", function(){
    searchValue();
})

// Search phone by pressing enter button
phoneSearchField.addEventListener("keyup" , function (e) {
    if(e.key === "Enter"){
        searchValue();
    }
})

// Get search value
const searchValue = () => {
const phoneSearchValue = phoneSearchField.value;
    phoneSearchField.value = '';
    loadPhones(phoneSearchValue);
    // Clear phone container section for each search
    phoneContainer.innerHTML = '';
    // Turn on loader
    loading(true);
}

// Load phones from API
const loadPhones = async brand => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brand}`);
    const phones = await res.json();
    displayPhone(phones.data)
}

const displayPhone = phones => {

    if(phones.length < 1){
        noPhone.classList.remove('d-none')
    }else{
        // Show every phone by looping
        noPhone.classList.add('d-none')
        phones.forEach(phone => {
            const newPhone = document.createElement("div");
            newPhone.classList.add("col-md-3")
    
            newPhone.innerHTML = `
                <div class="card">
                    <img src="${phone.image}" class="card-img-top py-3 p-5" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            `
            phoneContainer.appendChild(newPhone);
        })
    }
    // Turn off loader
    loading(false);
}

// Loader
const loading = isLoading => {
    if(isLoading){
        loader.classList.remove("d-none");
    }else{
        loader.classList.add("d-none");
    }
}

loadPhones('a');