function openTab(event, tabName) {
    // Hide all tab contents
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  // Hide all tab content
        tabcontent[i].classList.remove("active"); // Remove active class from all content
    }

    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); // Remove active class
    }

    // Show the current tab, and add the active class to the clicked tab link
    document.getElementById(tabName).style.display = "flex"; // Show the content of the clicked tab
    document.getElementById(tabName).classList.add("active"); // Add active class to the content

    event.currentTarget.className += " active"; // Add active class to the clicked button
}


