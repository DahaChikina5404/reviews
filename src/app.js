let count = 0

let reviews = [
    {
        id: count++,
        assessment: '5',
        text: 'Всё замечательно. Обязательно куплю еще! Порекомендую друзьям.',
        name: 'Жора',
        image: 'https://www.kino-teatr.ru/acter/foto/ros/48694.jpg',
        dateReview: '09/02/2022',
        dateBuying: '05/02/2022',
        city: 'Москва',
    },

    {
        id: count++,
        assessment: '2',
        text: 'Ужасно!!!!!',
        name: 'Нюра',
        image: 'https://img.freepik.com/premium-photo/young-woman-portrait-adorable-brunette-in-a-shirt-looking-at-the-camera-with-her-arms-crossed_168410-1953.jpg',
        dateReview: '09/08/2021',
        dateBuying: '30/04/2021',
        city: 'Саранск',
    },

    {
        id: count++,
        assessment: '4',
        text: 'В целом разочарован! Могло быть и лучше......',
        name: 'Степан',
        image: 'https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-in-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg',
        dateReview: '09/08/2022',
        dateBuying: '05/07/2022',
        city: 'Вологда',
    },
]

let currentIndex = 0  // текущий отзыв

const reviewsList = document.getElementById('container__with_reviews')

function renderReviews() {   // Динамическое добавление объектов из масива

    reviewsList.innerHTML = ''

        reviews.forEach((review) => {
            reviewsList.innerHTML += `
                <div class="reviews">
                    <p>${review.assessment}</p>
                    <p>${review.text}</p>
                    <p>${review.name}</p>
                    <img class="foto" src="${review.image}"/> 
                    <p>${review.dateReview}</p>
                    <p>${review.dateBuying}</p>
                    <p>${review.city}</p>
                </div>`
        })
}

function showPrevSlide() {
    if (currentIndex <= 0) {
        currentIndex = reviews.length - 1
    } else {
        currentIndex = currentIndex - 1
    }
    renderReviews()
}

function showNextSlide() {
    if (currentIndex >= reviews.length - 1) {
        currentIndex = reviews.length - reviews.length
    } else {
        currentIndex = currentIndex + 1
    }
    renderReviews()
}

const prevButton = document.getElementById('prev-button')  // кнопка назад
prevButton.addEventListener('click', showPrevSlide)

const nextButton = document.getElementById('next-button')  // кнопка вперед
nextButton.addEventListener('click', showNextSlide)

// const randomButton = document.getElementById('random_review') // случайный отзыв
// randomButton.addEventListener('click', showRandomSlide)