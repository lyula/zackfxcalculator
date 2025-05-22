// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('navbar-links');
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active'); 
    });
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });
});

// List of ISO 4217 currency codes for forex pairs
        const currencyCodes = [
            'USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD', 'CNY', 'HKD', 
            'SGD', 'NOK', 'SEK', 'DKK', 'TRY', 'MXN', 'ZAR', 'BRL', 'RUB', 'INR',
            'KRW', 'TWD', 'THB', 'MYR', 'PLN', 'HUF', 'CZK', 'ILS', 'CLP', 'PHP'
        ];

        // Supported metals and commodities
        const metals = ['XAU/USD', 'XAG/USD', 'XPT/USD', 'XPD/USD'];
        const commodities = ['WTI/USD', 'NG/USD'];

        function normalizeInstrument(instrument) {
            // Add '/' if missing (e.g., 'EURUSD' -> 'EUR/USD')
            const cleaned = instrument.replace(/\s/g, '').toUpperCase();
            if (!cleaned.includes('/')) {
                if (cleaned.length >= 6) {
                    return cleaned.slice(0, 3) + '/' + cleaned.slice(3);
                }
            }
            return cleaned;
        }

        function isValidInstrument(instrument) {
            // Check if it's a metal or commodity
            if (metals.includes(instrument) || commodities.includes(instrument)) {
                return true;
            }
            // Check if it's a valid forex pair
            const [base, quote] = instrument.split('/');
            return currencyCodes.includes(base) && currencyCodes.includes(quote);
        }

        function calculatePipValue(instrument, lotSize) {
            // Pip values per standard lot (100,000 units)
            if (metals.includes(instrument)) {
                const metalPipValues = {
                    'XAU/USD': 1,    // $1 per pip for gold
                    'XAG/USD': 50,   // $50 per pip for silver
                    'XPT/USD': 1,    // $1 per pip for platinum
                    'XPD/USD': 1     // $1 per pip for palladium
                };
                return metalPipValues[instrument] * lotSize;
            }
            if (commodities.includes(instrument)) {
                const commodityPipValues = {
                    'WTI/USD': 1,    // $1 per 0.01 move for crude oil
                    'NG/USD': 10     // $10 per 0.001 move for natural gas
                };
                return commodityPipValues[instrument] * lotSize;
            }
            // Forex pairs
            if (instrument.includes('JPY')) {
                // Approximate pip value for JPY pairs (assuming USD/JPY ~112.5)
                return (1000 / 112.5) * lotSize; // ~$8.89 per pip for 1 lot
            }
            return 10 * lotSize; // $10 per pip for non-JPY forex pairs
        }

        function getPipMultiplier(instrument) {
            if (metals.includes(instrument)) {
                const metalMultipliers = {
                    'XAU/USD': 10,   // 1 pip = 0.1 price move
                    'XAG/USD': 100,  // 1 pip = 0.01 price move
                    'XPT/USD': 10,   // 1 pip = 0.1 price move
                    'XPD/USD': 10    // 1 pip = 0.1 price move
                };
                return metalMultipliers[instrument];
            }
            if (commodities.includes(instrument)) {
                const commodityMultipliers = {
                    'WTI/USD': 100,  // 1 pip = 0.01 price move
                    'NG/USD': 1000   // 1 pip = 0.001 move for natural gas
                };
                return commodityMultipliers[instrument];
            }
            // Forex pairs
            return instrument.includes('JPY') ? 100 : 10000;
        }

        function determineTradeDirection(entryPrice, stopLoss, takeProfit) {
            if (entryPrice > stopLoss && entryPrice < takeProfit) {
                return 'Long';
            } else if (entryPrice < stopLoss && entryPrice > takeProfit) {
                return 'Short';
            } else {
                return 'Invalid';
            }
        }

        function calculate() {
    let instrument = document.getElementById('instrument').value;
    instrument = normalizeInstrument(instrument);
    const lotSize = parseFloat(document.getElementById('lot-size').value);
    const entryPrice = parseFloat(document.getElementById('entry-price').value);
    const stopLoss = parseFloat(document.getElementById('stop-loss').value);
    const takeProfit = parseFloat(document.getElementById('take-profit').value);

    // Validate inputs
    if (!instrument || isNaN(lotSize) || isNaN(entryPrice) || isNaN(stopLoss) || isNaN(takeProfit)) {
        Swal.fire({
            title: 'Error',
            text: 'Please fill all fields with valid values.',
            icon: 'error',
            confirmButtonColor: '#f67421'
        });
        return;
    }

    // Validate instrument
    if (!isValidInstrument(instrument)) {
        Swal.fire({
            title: 'Invalid Instrument',
            text: 'Invalid instrument. Please use a supported forex pair (e.g., EUR/USD, GBP/JPY), metal (e.g., XAU/USD), or commodity (e.g., WTI/USD).',
            icon: 'error',
            confirmButtonColor: '#f67421'
        });
        return;
    }

    // Determine trade direction
    const tradeDirection = determineTradeDirection(entryPrice, stopLoss, takeProfit);
    if (tradeDirection === 'Invalid') {
        Swal.fire({
            title: 'Invalid Trade Setup',
            text: 'The entry price, stop loss, and take profit values do not form a valid long or short position.',
            icon: 'error',
            confirmButtonColor: '#f67421'
        });
        return;
    }

    // Calculate pips
    const pipMultiplier = getPipMultiplier(instrument);
    const pipsRisked = Math.abs((entryPrice - stopLoss) * pipMultiplier);
    const pipsTargeted = Math.abs((takeProfit - entryPrice) * pipMultiplier);

    // Calculate pip value
    const pipValue = calculatePipValue(instrument, lotSize);
    if (!pipValue) {
        Swal.fire({
            title: 'Error',
            text: 'Unable to calculate pip value for this instrument.',
            icon: 'error',
            confirmButtonColor: '#f67421'
        });
        return;
    }

    const riskUSD = pipsRisked * pipValue;
    const expectedProfit = pipsTargeted * pipValue;

    // Calculate Risk-to-Reward Ratio
    const rrRatio = pipsTargeted / pipsRisked;

    // Trade suggestion
    const isGoodTrade = rrRatio >= 2;
    const alertMessage = isGoodTrade
        ? 'Zack FX thinks this is a nice trade, take it!'
        : 'Zack FX thinks this trade is unfit, consider waiting for a better set up';

    // Show results
   Swal.fire({
    title: 'Trade Analysis',
    html: `
        <p><strong>Trade Direction:</strong> ${tradeDirection}</p>
        <p><strong>Lot Size:</strong> ${lotSize}</p>
        <p><strong>Instrument:</strong> ${instrument.toUpperCase()}</p>
        <p><strong>Pip Value:</strong> $${pipValue.toFixed(2)} per pip</p>
        <p><strong>Pips Risked:</strong> ${pipsRisked.toFixed(1)}</p>
         <p><strong>Risk Amount:</strong> $${riskUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <p><strong>Pips Targeted:</strong> ${pipsTargeted.toFixed(1)}</p>
        <p><strong>Expected Profit:</strong> $${expectedProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <p><strong>Risk-to-Reward Ratio:</strong> 1:${rrRatio.toFixed(2)}</p>
        <p style="color: ${isGoodTrade ? '#28a745' : '#dc3545'}; font-weight: bold;">${alertMessage}</p>
    `,
    icon: isGoodTrade ? 'success' : 'warning',
    confirmButtonColor: '#f67421'
});

}


        function journalTrades() {
            Swal.fire({
                title: 'Journal Trades',
                text: 'Journal Page still under development.',
                icon: 'info',
                confirmButtonColor: '#f67421'
            });
        }

        function showNews() {
            Swal.fire({
                title: 'News',
                text: 'The news events on this page are just mock data for tests purposes. Realtime news will be supported soon!',
                icon: 'info',
                confirmButtonColor: '#f67421'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'news.html';
                }
            });
        }

        function toggleView(view) {
            const calculator = document.querySelector('.calculator');
            const chart = document.querySelector('.chart-container');
            const calcButton = document.querySelector('.toggle-button[onclick="toggleView(\'calculator\')"]');
            const chartButton = document.querySelector('.toggle-button[onclick="toggleView(\'chart\')"]');

            if (view === 'calculator') {
                calculator.classList.add('active');
                chart.classList.remove('active');
                calcButton.classList.add('active');
                chartButton.classList.remove('active');
            } else {
                calculator.classList.remove('active');
                chart.classList.add('active');
                calcButton.classList.remove('active');
                chartButton.classList.add('active');
            }
        }

        function toggleFullscreen() {
            const chartContainer = document.querySelector('.chart-container');
            const header = document.querySelector('header');
            const toggleContainer = document.querySelector('.toggle-container');
            const calculator = document.querySelector('.calculator');

            if (!chartContainer.classList.contains('fullscreen')) {
                chartContainer.classList.add('fullscreen');
                header.style.display = 'none';
                toggleContainer.style.display = 'none';
                calculator.style.display = 'none';
            } else {
                chartContainer.classList.remove('fullscreen');
                header.style.display = 'flex';
                toggleContainer.style.display = window.innerWidth <= 900 ? 'block' : 'none';
                calculator.style.display = window.innerWidth <= 900 ? (calculator.classList.contains('active') ? 'flex' : 'none') : 'flex';
            }
        }

        // Initialize TradingView Chart with persistence
        function initializeChart() {
            // Load saved settings from localStorage
            const savedSettings = localStorage.getItem('tradingview_settings');
            const defaultSettings = {
                symbol: 'FX:EURUSD',
                interval: 'D',
                timezone: 'Etc/UTC',
                theme: 'dark',
                style: '1',
                locale: 'en',
                toolbar_bg: '#f1f3f6',
                enable_publishing: false,
                allow_symbol_change: true,
                studies: [
                    'MASimple@tv-basicstudies',
                    'RSI@tv-basicstudies'
                ],
                show_popup_button: false, // Disable popup button
                withdateranges: true,
                hide_side_toolbar: false,
                details: true,
                hotlist: true
            };
            const settings = savedSettings ? JSON.parse(savedSettings) : defaultSettings;

            const widget = new TradingView.widget({
                ...settings,
                container_id: 'tradingview_chart',
                width: '100%',
                height: '100%',
                autosize: true,
                onready: () => {
                    // Save chart settings and drawings when changed
                    widget.onChartReady(() => {
                        widget.subscribe('onChartStateChanged', () => {
                            widget.save(state => {
                                localStorage.setItem('tradingview_settings', JSON.stringify({
                                    ...settings,
                                    symbol: widget.activeChart().symbol(),
                                    interval: widget.activeChart().resolution(),
                                    // Include other dynamic settings as needed
                                }));
                            });
                        });
                    });
                }
            });

            return widget;
        }

        // Initialize chart and set height
        let chartWidget;
        window.addEventListener('load', () => {
            chartWidget = initializeChart();
            const calculator = document.querySelector('.calculator');
            const chartContainer = document.querySelector('.chart-container');
            chartContainer.style.height = `${calculator.offsetHeight}px`;
        });

