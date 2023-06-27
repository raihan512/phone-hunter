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
            newPhone.classList.add("col-sm-4", "col-lg-3", "col-xl-2")
    
            newPhone.innerHTML = `
                <div class="card">
                    <img src="${phone.image}" class="card-img-top py-3 p-5" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${phone.phone_name}</h5>
                        <p class="card-text">This is a longer card with supporting text. This content is a little bit longer.</p>
                        <button type="button" onClick=(getPhoneDetails('${phone.slug}')) class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button>
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

const getPhoneDetails = async id => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const details = await res.json();
    const phoneDetails = details.data;
    console.log(phoneDetails);

    
    const phoneName = document.getElementById("phone-name");
    phoneName.innerHTML = phoneDetails.name;

    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
    <div>
        <img src="${phoneDetails.image}" class="p-3" />
    </div>
    <div>
        <p class="fw-bold my-0 py-0">${phoneDetails.name}</p>
        <p class="my-0 py-0">Brand: ${phoneDetails.brand}</p>
        <p class="my-0 py-0">${phoneDetails.releaseDate}</p>
        
        <p class="border-bottom mt-1 mb-1 fw-bold my-0 py-0 mb-1">Main Features</p>

        ${Object.keys(phoneDetails.mainFeatures).map( (item) => `<p class="my-0 py-0"><small><span class="fw-bold text-uppercase">${item}:</span> ${phoneDetails.mainFeatures[item]}</small></p>`).join('')}



        <p class="border-bottom mt-1 mb-1 fw-bold my-0 py-0 mb-1">Others</p>
        ${Object.keys(phoneDetails.others).map( (item) => `<p class="my-0 py-0"><small><span class="fw-bold text-uppercase">${item}:</span> ${phoneDetails.others[item]}</small></p>`).join('')}


    </div>
    `


}
loadPhones('a');