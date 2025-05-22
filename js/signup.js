// Country list with flag images (ISO 3166-1 with ISO2 codes)
        const countries = [
            { name: "Afghanistan", iso2: "af", flag: "https://flagcdn.com/24x18/af.png" },
            { name: "Albania", iso2: "al", flag: "https://flagcdn.com/24x18/al.png" },
            { name: "Algeria", iso2: "dz", flag: "https://flagcdn.com/24x18/dz.png" },
            { name: "Andorra", iso2: "ad", flag: "https://flagcdn.com/24x18/ad.png" },
            { name: "Angola", iso2: "ao", flag: "https://flagcdn.com/24x18/ao.png" },
            { name: "Antigua and Barbuda", iso2: "ag", flag: "https://flagcdn.com/24x18/ag.png" },
            { name: "Argentina", iso2: "ar", flag: "https://flagcdn.com/24x18/ar.png" },
            { name: "Armenia", iso2: "am", flag: "https://flagcdn.com/24x18/am.png" },
            { name: "Australia", iso2: "au", flag: "https://flagcdn.com/24x18/au.png" },
            { name: "Austria", iso2: "at", flag: "https://flagcdn.com/24x18/at.png" },
            { name: "Azerbaijan", iso2: "az", flag: "https://flagcdn.com/24x18/az.png" },
            { name: "Bahamas", iso2: "bs", flag: "https://flagcdn.com/24x18/bs.png" },
            { name: "Bahrain", iso2: "bh", flag: "https://flagcdn.com/24x18/bh.png" },
            { name: "Bangladesh", iso2: "bd", flag: "https://flagcdn.com/24x18/bd.png" },
            { name: "Barbados", iso2: "bb", flag: "https://flagcdn.com/24x18/bb.png" },
            { name: "Belarus", iso2: "by", flag: "https://flagcdn.com/24x18/by.png" },
            { name: "Belgium", iso2: "be", flag: "https://flagcdn.com/24x18/be.png" },
            { name: "Belize", iso2: "bz", flag: "https://flagcdn.com/24x18/bz.png" },
            { name: "Benin", iso2: "bj", flag: "https://flagcdn.com/24x18/bj.png" },
            { name: "Bhutan", iso2: "bt", flag: "https://flagcdn.com/24x18/bt.png" },
            { name: "Bolivia", iso2: "bo", flag: "https://flagcdn.com/24x18/bo.png" },
            { name: "Bosnia and Herzegovina", iso2: "ba", flag: "https://flagcdn.com/24x18/ba.png" },
            { name: "Botswana", iso2: "bw", flag: "https://flagcdn.com/24x18/bw.png" },
            { name: "Brazil", iso2: "br", flag: "https://flagcdn.com/24x18/br.png" },
            { name: "Brunei", iso2: "bn", flag: "https://flagcdn.com/24x18/bn.png" },
            { name: "Bulgaria", iso2: "bg", flag: "https://flagcdn.com/24x18/bg.png" },
            { name: "Burkina Faso", iso2: "bf", flag: "https://flagcdn.com/24x18/bf.png" },
            { name: "Burundi", iso2: "bi", flag: "https://flagcdn.com/24x18/bi.png" },
            { name: "Cabo Verde", iso2: "cv", flag: "https://flagcdn.com/24x18/cv.png" },
            { name: "Cambodia", iso2: "kh", flag: "https://flagcdn.com/24x18/kh.png" },
            { name: "Cameroon", iso2: "cm", flag: "https://flagcdn.com/24x18/cm.png" },
            { name: "Canada", iso2: "ca", flag: "https://flagcdn.com/24x18/ca.png" },
            { name: "Central African Republic", iso2: "cf", flag: "https://flagcdn.com/24x18/cf.png" },
            { name: "Chad", iso2: "td", flag: "https://flagcdn.com/24x18/td.png" },
            { name: "Chile", iso2: "cl", flag: "https://flagcdn.com/24x18/cl.png" },
            { name: "China", iso2: "cn", flag: "https://flagcdn.com/24x18/cn.png" },
            { name: "Colombia", iso2: "co", flag: "https://flagcdn.com/24x18/co.png" },
            { name: "Comoros", iso2: "km", flag: "https://flagcdn.com/24x18/km.png" },
            { name: "Congo, Democratic Republic of the", iso2: "cd", flag: "https://flagcdn.com/24x18/cd.png" },
            { name: "Congo, Republic of the", iso2: "cg", flag: "https://flagcdn.com/24x18/cg.png" },
            { name: "Costa Rica", iso2: "cr", flag: "https://flagcdn.com/24x18/cr.png" },
            { name: "Croatia", iso2: "hr", flag: "https://flagcdn.com/24x18/hr.png" },
            { name: "Cuba", iso2: "cu", flag: "https://flagcdn.com/24x18/cu.png" },
            { name: "Cyprus", iso2: "cy", flag: "https://flagcdn.com/24x18/cy.png" },
            { name: "Czech Republic", iso2: "cz", flag: "https://flagcdn.com/24x18/cz.png" },
            { name: "Denmark", iso2: "dk", flag: "https://flagcdn.com/24x18/dk.png" },
            { name: "Djibouti", iso2: "dj", flag: "https://flagcdn.com/24x18/dj.png" },
            { name: "Dominica", iso2: "dm", flag: "https://flagcdn.com/24x18/dm.png" },
            { name: "Dominican Republic", iso2: "do", flag: "https://flagcdn.com/24x18/do.png" },
            { name: "Ecuador", iso2: "ec", flag: "https://flagcdn.com/24x18/ec.png" },
            { name: "Egypt", iso2: "eg", flag: "https://flagcdn.com/24x18/eg.png" },
            { name: "El Salvador", iso2: "sv", flag: "https://flagcdn.com/24x18/sv.png" },
            { name: "Equatorial Guinea", iso2: "gq", flag: "https://flagcdn.com/24x18/gq.png" },
            { name: "Eritrea", iso2: "er", flag: "https://flagcdn.com/24x18/er.png" },
            { name: "Estonia", iso2: "ee", flag: "https://flagcdn.com/24x18/ee.png" },
            { name: "Eswatini", iso2: "sz", flag: "https://flagcdn.com/24x18/sz.png" },
            { name: "Ethiopia", iso2: "et", flag: "https://flagcdn.com/24x18/et.png" },
            { name: "Fiji", iso2: "fj", flag: "https://flagcdn.com/24x18/fj.png" },
            { name: "Finland", iso2: "fi", flag: "https://flagcdn.com/24x18/fi.png" },
            { name: "France", iso2: "fr", flag: "https://flagcdn.com/24x18/fr.png" },
            { name: "Gabon", iso2: "ga", flag: "https://flagcdn.com/24x18/ga.png" },
            { name: "Gambia", iso2: "gm", flag: "https://flagcdn.com/24x18/gm.png" },
            { name: "Georgia", iso2: "ge", flag: "https://flagcdn.com/24x18/ge.png" },
            { name: "Germany", iso2: "de", flag: "https://flagcdn.com/24x18/de.png" },
            { name: "Ghana", iso2: "gh", flag: "https://flagcdn.com/24x18/gh.png" },
            { name: "Greece", iso2: "gr", flag: "https://flagcdn.com/24x18/gr.png" },
            { name: "Grenada", iso2: "gd", flag: "https://flagcdn.com/24x18/gd.png" },
            { name: "Guatemala", iso2: "gt", flag: "https://flagcdn.com/24x18/gt.png" },
            { name: "Guinea", iso2: "gn", flag: "https://flagcdn.com/24x18/gn.png" },
            { name: "Guinea-Bissau", iso2: "gw", flag: "https://flagcdn.com/24x18/gw.png" },
            { name: "Guyana", iso2: "gy", flag: "https://flagcdn.com/24x18/gy.png" },
            { name: "Haiti", iso2: "ht", flag: "https://flagcdn.com/24x18/ht.png" },
            { name: "Honduras", iso2: "hn", flag: "https://flagcdn.com/24x18/hn.png" },
            { name: "Hungary", iso2: "hu", flag: "https://flagcdn.com/24x18/hu.png" },
            { name: "Iceland", iso2: "is", flag: "https://flagcdn.com/24x18/is.png" },
            { name: "India", iso2: "in", flag: "https://flagcdn.com/24x18/in.png" },
            { name: "Indonesia", iso2: "id", flag: "https://flagcdn.com/24x18/id.png" },
            { name: "Iran", iso2: "ir", flag: "https://flagcdn.com/24x18/ir.png" },
            { name: "Iraq", iso2: "iq", flag: "https://flagcdn.com/24x18/iq.png" },
            { name: "Ireland", iso2: "ie", flag: "https://flagcdn.com/24x18/ie.png" },
            { name: "Israel", iso2: "il", flag: "https://flagcdn.com/24x18/il.png" },
            { name: "Italy", iso2: "it", flag: "https://flagcdn.com/24x18/it.png" },
            { name: "Jamaica", iso2: "jm", flag: "https://flagcdn.com/24x18/jm.png" },
            { name: "Japan", iso2: "jp", flag: "https://flagcdn.com/24x18/jp.png" },
            { name: "Jordan", iso2: "jo", flag: "https://flagcdn.com/24x18/jo.png" },
            { name: "Kazakhstan", iso2: "kz", flag: "https://flagcdn.com/24x18/kz.png" },
            { name: "Kenya", iso2: "ke", flag: "https://flagcdn.com/24x18/ke.png" },
            { name: "Kiribati", iso2: "ki", flag: "https://flagcdn.com/24x18/ki.png" },
            { name: "Korea, North", iso2: "kp", flag: "https://flagcdn.com/24x18/kp.png" },
            { name: "Korea, South", iso2: "kr", flag: "https://flagcdn.com/24x18/kr.png" },
            { name: "Kuwait", iso2: "kw", flag: "https://flagcdn.com/24x18/kw.png" },
            { name: "Kyrgyzstan", iso2: "kg", flag: "https://flagcdn.com/24x18/kg.png" },
            { name: "Laos", iso2: "la", flag: "https://flagcdn.com/24x18/la.png" },
            { name: "Latvia", iso2: "lv", flag: "https://flagcdn.com/24x18/lv.png" },
            { name: "Lebanon", iso2: "lb", flag: "https://flagcdn.com/24x18/lb.png" },
            { name: "Lesotho", iso2: "ls", flag: "https://flagcdn.com/24x18/ls.png" },
            { name: "Liberia", iso2: "lr", flag: "https://flagcdn.com/24x18/lr.png" },
            { name: "Libya", iso2: "ly", flag: "https://flagcdn.com/24x18/ly.png" },
            { name: "Liechtenstein", iso2: "li", flag: "https://flagcdn.com/24x18/li.png" },
            { name: "Lithuania", iso2: "lt", flag: "https://flagcdn.com/24x18/lt.png" },
            { name: "Luxembourg", iso2: "lu", flag: "https://flagcdn.com/24x18/lu.png" },
            { name: "Madagascar", iso2: "mg", flag: "https://flagcdn.com/24x18/mg.png" },
            { name: "Malawi", iso2: "mw", flag: "https://flagcdn.com/24x18/mw.png" },
            { name: "Malaysia", iso2: "my", flag: "https://flagcdn.com/24x18/my.png" },
            { name: "Maldives", iso2: "mv", flag: "https://flagcdn.com/24x18/mv.png" },
            { name: "Mali", iso2: "ml", flag: "https://flagcdn.com/24x18/ml.png" },
            { name: "Malta", iso2: "mt", flag: "https://flagcdn.com/24x18/mt.png" },
            { name: "Marshall Islands", iso2: "mh", flag: "https://flagcdn.com/24x18/mh.png" },
            { name: "Mauritania", iso2: "mr", flag: "https://flagcdn.com/24x18/mr.png" },
            { name: "Mauritius", iso2: "mu", flag: "https://flagcdn.com/24x18/mu.png" },
            { name: "Mexico", iso2: "mx", flag: "https://flagcdn.com/24x18/mx.png" },
            { name: "Micronesia", iso2: "fm", flag: "https://flagcdn.com/24x18/fm.png" },
            { name: "Moldova", iso2: "md", flag: "https://flagcdn.com/24x18/md.png" },
            { name: "Monaco", iso2: "mc", flag: "https://flagcdn.com/24x18/mc.png" },
            { name: "Mongolia", iso2: "mn", flag: "https://flagcdn.com/24x18/mn.png" },
            { name: "Montenegro", iso2: "me", flag: "https://flagcdn.com/24x18/me.png" },
            { name: "Morocco", iso2: "ma", flag: "https://flagcdn.com/24x18/ma.png" },
            { name: "Mozambique", iso2: "mz", flag: "https://flagcdn.com/24x18/mz.png" },
            { name: "Myanmar", iso2: "mm", flag: "https://flagcdn.com/24x18/mm.png" },
            { name: "Namibia", iso2: "na", flag: "https://flagcdn.com/24x18/na.png" },
            { name: "Nauru", iso2: "nr", flag: "https://flagcdn.com/24x18/nr.png" },
            { name: "Nepal", iso2: "np", flag: "https://flagcdn.com/24x18/np.png" },
            { name: "Netherlands", iso2: "nl", flag: "https://flagcdn.com/24x18/nl.png" },
            { name: "New Zealand", iso2: "nz", flag: "https://flagcdn.com/24x18/nz.png" },
            { name: "Nicaragua", iso2: "ni", flag: "https://flagcdn.com/24x18/ni.png" },
            { name: "Niger", iso2: "ne", flag: "https://flagcdn.com/24x18/ne.png" },
            { name: "Nigeria", iso2: "ng", flag: "https://flagcdn.com/24x18/ng.png" },
            { name: "North Macedonia", iso2: "mk", flag: "https://flagcdn.com/24x18/mk.png" },
            { name: "Norway", iso2: "no", flag: "https://flagcdn.com/24x18/no.png" },
            { name: "Oman", iso2: "om", flag: "https://flagcdn.com/24x18/om.png" },
            { name: "Pakistan", iso2: "pk", flag: "https://flagcdn.com/24x18/pk.png" },
            { name: "Palau", iso2: "pw", flag: "https://flagcdn.com/24x18/pw.png" },
            { name: "Palestine", iso2: "ps", flag: "https://flagcdn.com/24x18/ps.png" },
            { name: "Panama", iso2: "pa", flag: "https://flagcdn.com/24x18/pa.png" },
            { name: "Papua New Guinea", iso2: "pg", flag: "https://flagcdn.com/24x18/pg.png" },
            { name: "Paraguay", iso2: "py", flag: "https://flagcdn.com/24x18/py.png" },
            { name: "Peru", iso2: "pe", flag: "https://flagcdn.com/24x18/pe.png" },
            { name: "Philippines", iso2: "ph", flag: "https://flagcdn.com/24x18/ph.png" },
            { name: "Poland", iso2: "pl", flag: "https://flagcdn.com/24x18/pl.png" },
            { name: "Portugal", iso2: "pt", flag: "https://flagcdn.com/24x18/pt.png" },
            { name: "Qatar", iso2: "qa", flag: "https://flagcdn.com/24x18/qa.png" },
            { name: "Romania", iso2: "ro", flag: "https://flagcdn.com/24x18/ro.png" },
            { name: "Russia", iso2: "ru", flag: "https://flagcdn.com/24x18/ru.png" },
            { name: "Rwanda", iso2: "rw", flag: "https://flagcdn.com/24x18/rw.png" },
            { name: "Saint Kitts and Nevis", iso2: "kn", flag: "https://flagcdn.com/24x18/kn.png" },
            { name: "Saint Lucia", iso2: "lc", flag: "https://flagcdn.com/24x18/lc.png" },
            { name: "Saint Vincent and the Grenadines", iso2: "vc", flag: "https://flagcdn.com/24x18/vc.png" },
            { name: "Samoa", iso2: "ws", flag: "https://flagcdn.com/24x18/ws.png" },
            { name: "San Marino", iso2: "sm", flag: "https://flagcdn.com/24x18/sm.png" },
            { name: "Sao Tome and Principe", iso2: "st", flag: "https://flagcdn.com/24x18/st.png" },
            { name: "Saudi Arabia", iso2: "sa", flag: "https://flagcdn.com/24x18/sa.png" },
            { name: "Senegal", iso2: "sn", flag: "https://flagcdn.com/24x18/sn.png" },
            { name: "Serbia", iso2: "rs", flag: "https://flagcdn.com/24x18/rs.png" },
            { name: "Seychelles", iso2: "sc", flag: "https://flagcdn.com/24x18/sc.png" },
            { name: "Sierra Leone", iso2: "sl", flag: "https://flagcdn.com/24x18/sl.png" },
            { name: "Singapore", iso2: "sg", flag: "https://flagcdn.com/24x18/sg.png" },
            { name: "Slovakia", iso2: "sk", flag: "https://flagcdn.com/24x18/sk.png" },
            { name: "Slovenia", iso2: "si", flag: "https://flagcdn.com/24x18/si.png" },
            { name: "Solomon Islands", iso2: "sb", flag: "https://flagcdn.com/24x18/sb.png" },
            { name: "Somalia", iso2: "so", flag: "https://flagcdn.com/24x18/so.png" },
            { name: "South Africa", iso2: "za", flag: "https://flagcdn.com/24x18/za.png" },
            { name: "South Sudan", iso2: "ss", flag: "https://flagcdn.com/24x18/ss.png" },
            { name: "Spain", iso2: "es", flag: "https://flagcdn.com/24x18/es.png" },
            { name: "Sri Lanka", iso2: "lk", flag: "https://flagcdn.com/24x18/lk.png" },
            { name: "Sudan", iso2: "sd", flag: "https://flagcdn.com/24x18/sd.png" },
            { name: "Suriname", iso2: "sr", flag: "https://flagcdn.com/24x18/sr.png" },
            { name: "Sweden", iso2: "se", flag: "https://flagcdn.com/24x18/se.png" },
            { name: "Switzerland", iso2: "ch", flag: "https://flagcdn.com/24x18/ch.png" },
            { name: "Syria", iso2: "sy", flag: "https://flagcdn.com/24x18/sy.png" },
            { name: "Taiwan", iso2: "tw", flag: "https://flagcdn.com/24x18/tw.png" },
            { name: "Tajikistan", iso2: "tj", flag: "https://flagcdn.com/24x18/tj.png" },
            { name: "Tanzania", iso2: "tz", flag: "https://flagcdn.com/24x18/tz.png" },
            { name: "Thailand", iso2: "th", flag: "https://flagcdn.com/24x18/th.png" },
            { name: "Timor-Leste", iso2: "tl", flag: "https://flagcdn.com/24x18/tl.png" },
            { name: "Togo", iso2: "tg", flag: "https://flagcdn.com/24x18/tg.png" },
            { name: "Tonga", iso2: "to", flag: "https://flagcdn.com/24x18/to.png" },
            { name: "Trinidad and Tobago", iso2: "tt", flag: "https://flagcdn.com/24x18/tt.png" },
            { name: "Tunisia", iso2: "tn", flag: "https://flagcdn.com/24x18/tn.png" },
            { name: "Turkey", iso2: "tr", flag: "https://flagcdn.com/24x18/tr.png" },
            { name: "Turkmenistan", iso2: "tm", flag: "https://flagcdn.com/24x18/tm.png" },
            { name: "Tuvalu", iso2: "tv", flag: "https://flagcdn.com/24x18/tv.png" },
            { name: "Uganda", iso2: "ug", flag: "https://flagcdn.com/24x18/ug.png" },
            { name: "Ukraine", iso2: "ua", flag: "https://flagcdn.com/24x18/ua.png" },
            { name: "United Arab Emirates", iso2: "ae", flag: "https://flagcdn.com/24x18/ae.png" },
            { name: "United Kingdom", iso2: "gb", flag: "https://flagcdn.com/24x18/gb.png" },
            { name: "United States", iso2: "us", flag: "https://flagcdn.com/24x18/us.png" },
            { name: "Uruguay", iso2: "uy", flag: "https://flagcdn.com/24x18/uy.png" },
            { name: "Uzbekistan", iso2: "uz", flag: "https://flagcdn.com/24x18/uz.png" },
            { name: "Vanuatu", iso2: "vu", flag: "https://flagcdn.com/24x18/vu.png" },
            { name: "Vatican City", iso2: "va", flag: "https://flagcdn.com/24x18/va.png" },
            { name: "Venezuela", iso2: "ve", flag: "https://flagcdn.com/24x18/ve.png" },
            { name: "Vietnam", iso2: "vn", flag: "https://flagcdn.com/24x18/vn.png" },
            { name: "Yemen", iso2: "ye", flag: "https://flagcdn.com/24x18/ye.png" },
            { name: "Zambia", iso2: "zm", flag: "https://flagcdn.com/24x18/zm.png" },
            { name: "Zimbabwe", iso2: "zw", flag: "https://flagcdn.com/24x18/zw.png" }
        ];

        // Fetch user’s country via geolocation
        async function getUserCountry() {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                return data.country_name || '';
            } catch (error) {
                console.error('Geolocation failed:', error);
                return '';
            }
        }

        // Render country dropdown
        function renderCountryList(filteredCountries, input) {
            const countryList = document.getElementById('country-list');
            countryList.innerHTML = '';
            filteredCountries.forEach(country => {
                const div = document.createElement('div');
                div.className = 'country-option';
                div.innerHTML = `
                    <img src="${country.flag}" alt="${country.name} flag" class="flag">
                    ${country.name}
                `;
                div.tabIndex = 0;
                div.addEventListener('click', () => {
                    input.value = country.name;
                    const selectedFlag = document.getElementById('selected-flag');
                    selectedFlag.src = country.flag;
                    selectedFlag.alt = `${country.name} flag`;
                    selectedFlag.style.display = 'block';
                    countryList.style.display = 'none';
                });
                div.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        input.value = country.name;
                        const selectedFlag = document.getElementById('selected-flag');
                        selectedFlag.src = country.flag;
                        selectedFlag.alt = `${country.name} flag`;
                        selectedFlag.style.display = 'block';
                        countryList.style.display = 'none';
                    }
                });
                countryList.appendChild(div);
            });
            countryList.style.display = filteredCountries.length > 0 ? 'block' : 'none';
        }

        // Initialize country input
        async function initCountryInput() {
            const countryInput = document.getElementById('country');
            const selectedFlag = document.getElementById('selected-flag');
            const userCountry = await getUserCountry();
            if (userCountry) {
                const country = countries.find(c => c.name.toLowerCase() === userCountry.toLowerCase());
                if (country) {
                    countryInput.value = country.name;
                    selectedFlag.src = country.flag;
                    selectedFlag.alt = `${country.name} flag`;
                    selectedFlag.style.display = 'block';
                }
            }

            countryInput.addEventListener('input', () => {
                const query = countryInput.value.toLowerCase();
                const filtered = countries.filter(country =>
                    country.name.toLowerCase().includes(query)
                );
                renderCountryList(filtered, countryInput);
                selectedFlag.style.display = 'none'; // Hide flag while typing
            });

            countryInput.addEventListener('focus', () => {
                renderCountryList(countries, countryInput);
            });

            countryInput.addEventListener('blur', () => {
                setTimeout(() => {
                    document.getElementById('country-list').style.display = 'none';
                }, 200);
            });

            // Keyboard navigation for dropdown
            countryInput.addEventListener('keydown', (e) => {
                const countryList = document.getElementById('country-list');
                const options = countryList.querySelectorAll('.country-option');
                if (options.length === 0) return;

                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    options[0].focus();
                } else if (e.key === 'Escape') {
                    countryList.style.display = 'none';
                }
            });
        }

        // Password toggle
        function togglePassword(fieldId) {
            const passwordInput = document.getElementById(fieldId);
            const toggleText = passwordInput.nextElementSibling;
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleText.textContent = 'Hide';
            } else {
                passwordInput.type = 'password';
                toggleText.textContent = 'Show';
            }
        }

        // Form validation for terms checkbox
        document.querySelector('form').addEventListener('submit', (e) => {
            const termsCheckbox = document.getElementById('terms');
            if (!termsCheckbox.checked) {
                e.preventDefault();
                alert('You must agree to the Terms and Conditions.');
            }
        });

        // Initialize page
        window.onload = initCountryInput;
    