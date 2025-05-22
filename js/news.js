// Mock API response (replace with real TraderMade API call)
        const mockNews = [
            {
                date: "2025-05-22T14:00:00Z",
                event: "FOMC Interest Rate Decision",
                currency: "USD",
                impact: "High",
                details: "Expected rate hike may strengthen USD across pairs."
            },
            {
                date: "2025-05-21T08:30:00Z",
                event: "U.S. CPI Release",
                currency: "USD",
                impact: "High",
                details: "Higher CPI could bolster USD, impacting multiple pairs."
            },
            {
                date: "2025-05-20T10:00:00Z",
                event: "ECB President's Speech",
                currency: "EUR",
                impact: "Medium",
                details: "Comments on inflation may drive volatility in EUR markets."
            },
            {
                date: "2025-05-19T12:00:00Z",
                event: "Japan Bond Market Update",
                currency: "JPY",
                impact: "High",
                details: "Bond yield spikes may strengthen JPY, affecting yen pairs."
            },
            {
                date: "2025-05-18T09:00:00Z",
                event: "Moody’s U.S. Credit Downgrade",
                currency: "USD",
                impact: "High",
                details: "Downgrade weakens USD, impacting global forex markets."
            }
        ];

        // Fetch news from TraderMade (replace with real API)
        async function fetchNews() {
            // Real API call (uncomment and add your API key)
            /*
            try {
                const response = await fetch('https://api.tradermade.com/v1/news?api_key=YOUR_API_KEY¤cy=USD,JPY,EUR');
                if (!response.ok) throw new Error('API request failed');
                const data = await response.json();
                return data.news.filter(event => event.impact === 'High' || event.impact === 'Medium');
            } catch (error) {
                console.error(error);
                alert('Failed to fetch news. Using cached data.');
                return JSON.parse(localStorage.getItem('news') || '[]');
            }
            */
            return mockNews; // Mock data for demo
        }

        // Fetch user’s country via geolocation
        async function getUserCountry() {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                return data.country_name || 'Unknown';
            } catch (error) {
                console.error(error);
                return 'Unknown';
            }
        }

        // Get user’s local time and timezone
        function getLocalTime() {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZoneName: 'short'
            });
            return formatter.format(now);
        }

        // Convert UTC date to local time
        function convertToLocalTime(utcDate) {
            const date = new Date(utcDate);
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZoneName: 'short'
            });
        }

        // Render news in table
        async function renderNews(news = null) {
            const newsBody = document.getElementById('news-body');
            newsBody.innerHTML = '';
            const newsData = news || await fetchNews();

            // Cache news to localStorage
            localStorage.setItem('news', JSON.stringify(newsData));

            newsData.forEach(item => {
                const row = document.createElement('tr');
                const localDate = convertToLocalTime(item.date);
                const impactClass = item.impact.toLowerCase() + '-impact';
                row.innerHTML = `
                    <td>${localDate}</td>
                    <td>${item.event}</td>
                    <td>${item.currency}</td>
                    <td class="${impactClass}">${item.impact}</td>
                    <td>${item.details}</td>
                `;
                newsBody.appendChild(row);
            });
        }

        // Search news by currency or event
        function searchNews() {
            const query = document.getElementById('search').value.toLowerCase().replace(/[<>&]/g, '');
            fetchNews().then(news => {
                const filtered = news.filter(item =>
                    item.currency.toLowerCase().includes(query) ||
                    item.event.toLowerCase().includes(query)
                );
                renderNews(filtered);
            });
        }

        // Sort news
        function sortNews() {
            const sortBy = document.getElementById('sort').value;
            fetchNews().then(news => {
                let sorted = [...news];
                if (sortBy === 'date-desc') {
                    sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
                } else if (sortBy === 'date-asc') {
                    sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
                } else if (sortBy === 'impact') {
                    const impactOrder = { High: 1, Medium: 2, Low: 3 };
                    sorted.sort((a, b) => impactOrder[a.impact] - impactOrder[b.impact]);
                } else if (sortBy === 'currency') {
                    sorted.sort((a, b) => a.currency.localeCompare(b.currency));
                }
                renderNews(sorted);
            });
        }

        // Initialize page
        async function initialize() {
            // Set user info (country and local time)
            const country = await getUserCountry();
            const localTime = getLocalTime();
            document.getElementById('user-info').textContent = `${country}, ${localTime}`;

            // Render news
            await renderNews();

            // Poll for updates every 5 minutes
            setInterval(() => renderNews(), 5 * 60 * 1000);
        }

        window.onload = initialize;