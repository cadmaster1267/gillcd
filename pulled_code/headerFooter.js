const header = document.querySelector('#header');

window.addEventListener('load', function () {
    header.innerHTML = `
    <div class="center_logo">
            <img src="Photos/Logos/GCD Logo Light Grey Long.png" alt="Gill Construction and Development" class="logo">
        </div>

        <ul class="menu_bar">
            <li class="li_menu"><a href="index.html" class="menu_text">Home</a></li>
            <!-- <li class="li_menu"><a href="maintenance.html" class="menu_text">Maintenance</a></li>
            <li class="li_menu"><a href="custom_home.html" class="menu_text">Custom Homes</a></li>
            <li class="li_menu"><a href="remodel_repair.html" class="menu_text">Remodel & Repair</a></li>
            -->
            <li class="li_menu"><a href="contact.html" class="menu_text">Contact</a></li>

        </ul>`;

    footer.innerHTML = `
        <br>

    <div>
        <img src="Photos/Logos/GCD Logo Black Long.png" alt="Gill Construction & Development" class="footer_logo">

        <ul class="footer_list">
            <li class="footer_li"><a href="index.html" class="footer_links">Home</a></li>
            <!-- <li class="footer_li"><a href=" maintenance.html" class="footer_links">Maintenance</a></li>
            <li class="footer_li"><a href=" custom_home.html" class="footer_links">Custom Homes</a></li>
            <li class="footer_li"><a href=" remodel_repair.html" class="footer_links">Remodel & Repair</a></li>
            -->
            <li class="footer_li"><a href=" contact.html" class="footer_links">Contact</a></li>
        </ul>
    </div>
    <br>
    <p class="footer_footnotes">
        All projects are completed under the General Contracting License held by Two Step LLC - License # 0095074
    </p>
    <br>
    
    `
});