const geoBtn = document.getElementById('geo-btn');
const enBtn = document.getElementById('en-btn');
const indicator = document.getElementById('indicator');
const headerTitle = document.querySelector('header h1');
const mainSection = document.querySelector('main section h2');
const mainParagraph = document.querySelector('main section p');

const languageData = {
    en: {
        title: "Welcome to the Manhwa Library",
        mainTitle: "Discover Your Next Favorite Manhwa",
        mainText: "Explore the world of manhwa with our extensive collection of titles."
    },
    geo: {
        title: "მოგესალმებით მანჰვას ბიბლიოთეკაში",
        mainTitle: "აღმოაჩინეთ თქვენი შემდეგი საყვარელი მანჰვა",
        mainText: "გაეცანით მანჰვას სამყაროს ჩვენი ფართო კოლექციით."
    }
};

function switchLanguage(language) {
    if (language === 'geo') {
        indicator.style.transform = 'translateX(0)';
        headerTitle.textContent = languageData.geo.title;
        mainSection.textContent = languageData.geo.mainTitle;
        mainParagraph.textContent = languageData.geo.mainText;
    } else if (language === 'en') {
        indicator.style.transform = 'translateX(50px)';
        headerTitle.textContent = languageData.en.title;
        mainSection.textContent = languageData.en.mainTitle;
        mainParagraph.textContent = languageData.en.mainText;
    }
}

geoBtn.addEventListener('click', () => switchLanguage('geo'));
enBtn.addEventListener('click', () => switchLanguage('en'));

switchLanguage('en');
