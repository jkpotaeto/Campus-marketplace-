document.addEventListener("DOMContentLoaded", function() {
    const userListings = document.getElementById("user-listings");
    const userNameDisplay = document.getElementById("userName");
    const editUserNameInput = document.getElementById("editUserName");

    // Sample User Listings
    const listings = [
        { title: "Used Laptop", price: "$250", image: "assets/laptop.jpg" },
        { title: "Textbooks", price: "$30", image: "assets/books.jpg" }
    ];

    listings.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("col-md-6");
        div.innerHTML = `
            <div class="card">
                <img src="${item.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.price}</p>
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        `;
        userListings.appendChild(div);
    });

    // Edit Profile Modal Handling
    document.getElementById("profileForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const newUserName = editUserNameInput.value.trim();
        if (newUserName) {
            userNameDisplay.textContent = newUserName;
            alert("Profile Updated Successfully!");
            var modal = bootstrap.Modal.getInstance(document.getElementById("editProfileModal"));
            modal.hide();
        }
    });
});
