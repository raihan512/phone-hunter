const phoneSearchField = document.getElementById("phone-search-field");
const phoneSearchBtn = document.getElementById("phone-search-btn");

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
    console.log(phoneSearchValue);
}